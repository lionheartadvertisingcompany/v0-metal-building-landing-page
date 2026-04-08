"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, GizmoHelper, GizmoViewport } from "@react-three/drei"
import * as THREE from "three"

// ---------------------------------------------------------------------------
// Types (mirrored from builder-section — kept local to avoid circular deps)
// ---------------------------------------------------------------------------
type RoofStyle = "gable" | "single-slope"

interface BuildingConfig {
  width: number    // ft
  length: number   // ft
  height: number   // ft (eave height)
  roofStyle: RoofStyle
  doors: number
  windows: number
}

// ---------------------------------------------------------------------------
// Materials — defined once, shared across meshes
// ---------------------------------------------------------------------------
const MAT_WALL   = new THREE.MeshStandardMaterial({ color: "#b0bec5", roughness: 0.7, metalness: 0.4 })
const MAT_ROOF   = new THREE.MeshStandardMaterial({ color: "#3b7dd8", roughness: 0.5, metalness: 0.6 })
const MAT_DOOR   = new THREE.MeshStandardMaterial({ color: "#1e3a5c", roughness: 0.8, metalness: 0.2 })
const MAT_WINDOW = new THREE.MeshStandardMaterial({ color: "#7eb8e8", roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.75 })
const MAT_FLOOR  = new THREE.MeshStandardMaterial({ color: "#546e7a", roughness: 1.0, metalness: 0.0 })

// ---------------------------------------------------------------------------
// Scale factor: 1 unit = 10 ft in scene space (keeps numbers sane)
// ---------------------------------------------------------------------------
const SCALE = 0.1

// ---------------------------------------------------------------------------
// Gable roof geometry (a prism along the Z axis)
// ---------------------------------------------------------------------------
function GableRoof({ w, l, wallH, ridgeH }: { w: number; l: number; wallH: number; ridgeH: number }) {
  const geo = useMemo(() => {
    const hw = w / 2
    const hl = l / 2
    const shape = new THREE.Shape()
    shape.moveTo(-hw, 0)
    shape.lineTo(0, ridgeH)
    shape.lineTo(hw, 0)
    shape.closePath()

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: l,
      bevelEnabled: false,
    }
    const g = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    // Extruded along +Z, centre it
    g.translate(0, 0, -hl)
    return g
  }, [w, l, ridgeH])

  return <mesh geometry={geo} material={MAT_ROOF} position={[0, wallH, 0]} castShadow />
}

// ---------------------------------------------------------------------------
// Single-slope roof geometry (a tapered box)
// ---------------------------------------------------------------------------
function SingleSlopeRoof({ w, l, wallH, highH, lowH }: { w: number; l: number; wallH: number; highH: number; lowH: number }) {
  // Build a custom quad prism: back edge is higher than front
  const geo = useMemo(() => {
    const hw = w / 2
    const hl = l / 2
    const verts = new Float32Array([
      // front face (low side)
      -hw, lowH,  hl,
       hw, lowH,  hl,
      // back face (high side)
       hw, highH, -hl,
      -hw, highH, -hl,
    ])
    // 2 triangles per face × 6 faces
    const indices = [
      // top face (the slope)
      0, 1, 2,  0, 2, 3,
      // front (low) face
      0, 1, 1, 0,
      // left
      0, 3, 3, 0,
      // right
      1, 2, 2, 1,
      // back (high) face
      2, 3, 3, 2,
    ]
    // Use BufferGeometry manually for full control
    const bg = new THREE.BufferGeometry()
    // Top slope
    const positions: number[] = [
      // top
      -hw, lowH,  hl,   hw, lowH,  hl,   hw, highH, -hl,
      -hw, lowH,  hl,   hw, highH, -hl,  -hw, highH, -hl,
      // front low
      -hw, 0,     hl,   hw, 0,     hl,    hw, lowH,   hl,
      -hw, 0,     hl,   hw, lowH,  hl,   -hw, lowH,   hl,
      // back high
      -hw, highH, -hl,  hw, highH, -hl,   hw, 0,    -hl,
      -hw, highH, -hl,  hw, 0,    -hl,   -hw, 0,    -hl,
      // left
      -hw, 0,     hl,  -hw, lowH,  hl,   -hw, highH, -hl,
      -hw, 0,     hl,  -hw, highH, -hl,  -hw, 0,    -hl,
      // right
       hw, lowH,  hl,   hw, 0,     hl,    hw, 0,    -hl,
       hw, lowH,  hl,   hw, 0,    -hl,    hw, highH, -hl,
    ]
    bg.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    bg.computeVertexNormals()
    return bg
  }, [w, l, highH, lowH])

  return <mesh geometry={geo} material={MAT_ROOF} position={[0, wallH, 0]} castShadow />
}

// ---------------------------------------------------------------------------
// Door mesh (flat box on the front face, bottom-anchored)
// ---------------------------------------------------------------------------
function Door({ x, wallH, wallZ, doorW, doorH }: { x: number; wallH: number; wallZ: number; doorW: number; doorH: number }) {
  return (
    <mesh
      material={MAT_DOOR}
      position={[x, doorH / 2, wallZ + 0.005]}
      castShadow
    >
      <boxGeometry args={[doorW, doorH, 0.01]} />
    </mesh>
  )
}

// ---------------------------------------------------------------------------
// Window mesh (thin pane on the front face, mid-height)
// ---------------------------------------------------------------------------
function Window({ x, y, wallZ, winW, winH }: { x: number; y: number; wallZ: number; winW: number; winH: number }) {
  return (
    <mesh
      material={MAT_WINDOW}
      position={[x, y, wallZ + 0.005]}
    >
      <boxGeometry args={[winW, winH, 0.01]} />
    </mesh>
  )
}

// ---------------------------------------------------------------------------
// Main building scene node
// ---------------------------------------------------------------------------
function Building({ config }: { config: BuildingConfig }) {
  const groupRef = useRef<THREE.Group>(null!)

  // Slow auto-rotate until user interacts
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12
    }
  })

  // Scene-space dimensions
  const W = config.width  * SCALE
  const L = config.length * SCALE
  const H = config.height * SCALE

  // Roof params
  const ridgeH      = H * 0.35          // gable ridge above eave
  const slopeHighH  = H * 0.30          // single-slope high side
  const slopeLowH   = H * 0.05          // single-slope low side

  // Openings (on front face, i.e. +Z face)
  const frontZ = L / 2

  const doorW  = Math.min(0.6, W * 0.12)
  const doorH  = H * 0.6
  const doorsToShow = Math.min(config.doors, 4)
  const doorXs: number[] = []
  for (let i = 0; i < doorsToShow; i++) {
    const seg = W / (doorsToShow + 1)
    doorXs.push(-W / 2 + seg * (i + 1))
  }

  const winW  = Math.min(0.4, W * 0.08)
  const winH  = winW * 0.85
  const winY  = H * 0.72
  const windowsToShow = Math.min(config.windows, 5)
  const windowXs: number[] = []
  for (let i = 0; i < windowsToShow; i++) {
    const seg = W / (windowsToShow + 1)
    windowXs.push(-W / 2 + seg * (i + 1))
  }

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Floor / base */}
      <mesh material={MAT_FLOOR} position={[0, -0.01, 0]} receiveShadow>
        <boxGeometry args={[W + 0.4, 0.02, L + 0.4]} />
      </mesh>

      {/* Walls (one box — doors/windows are overlaid meshes) */}
      <mesh material={MAT_WALL} position={[0, H / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[W, H, L]} />
      </mesh>

      {/* Roof */}
      {config.roofStyle === "gable" ? (
        <GableRoof w={W} l={L} wallH={H} ridgeH={ridgeH} />
      ) : (
        <SingleSlopeRoof w={W} l={L} wallH={H} highH={slopeHighH} lowH={slopeLowH} />
      )}

      {/* Roll-up doors — front face */}
      {doorXs.map((dx, i) => (
        <Door key={i} x={dx} wallH={H} wallZ={frontZ} doorW={doorW} doorH={doorH} />
      ))}

      {/* Windows — front face */}
      {windowXs.map((wx, i) => (
        <Window key={i} x={wx} y={winY} wallZ={frontZ} winW={winW} winH={winH} />
      ))}
    </group>
  )
}

// ---------------------------------------------------------------------------
// Camera rig — adjusts distance based on building size
// ---------------------------------------------------------------------------
function CameraRig({ config }: { config: BuildingConfig }) {
  const maxDim = Math.max(config.width, config.length, config.height) * SCALE
  const dist   = maxDim * 2.8 + 1.5
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      minDistance={maxDim * 1.2}
      maxDistance={maxDim * 5}
      minPolarAngle={Math.PI / 12}
      maxPolarAngle={Math.PI / 2.2}
      target={[0, (config.height * SCALE) / 2, 0]}
    />
  )
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------
export function Building3DPreview({ config }: { config: BuildingConfig }) {
  const H = config.height * SCALE
  const camY = H * 0.9
  const camZ = Math.max(config.width, config.length) * SCALE * 2.0 + 1.5

  return (
    <Canvas
      shadows
      camera={{ position: [camZ * 0.7, camY + 0.5, camZ], fov: 45, near: 0.1, far: 200 }}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        // Suppress harmless shader precision warnings (GPU-specific noise)
        gl.debug.checkShaderErrors = false
      }}
      style={{ width: "100%", height: "100%" }}
      aria-label={`3D preview of a ${config.width}ft × ${config.length}ft × ${config.height}ft ${config.roofStyle} roof metal building`}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[6, 10, 6]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-4, 6, -4]} intensity={0.4} />

      {/* Environment */}
      <Environment preset="warehouse" />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#d1d9e0" roughness={1} />
      </mesh>

      {/* Building */}
      <Building config={config} />

      {/* Orbit controls */}
      <CameraRig config={config} />

      {/* Viewport gizmo */}
      <GizmoHelper alignment="bottom-right" margin={[60, 60]}>
        <GizmoViewport axisColors={["#e05555", "#55c172", "#3b7dd8"]} labelColor="white" />
      </GizmoHelper>
    </Canvas>
  )
}
