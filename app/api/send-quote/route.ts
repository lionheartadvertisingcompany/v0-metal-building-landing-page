import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

interface QuoteRequest {
  name: string
  email: string
  phone: string
  zipCode: string
  width: number
  length: number
  height: number
  roofStyle: string
  gauge: string
  totalDoors: number
  totalWindows: number
  estimatedPrice: number
  priceRange: { low: number; high: number }
}

const COMPANY_EMAILS = [
  "lionheartadvertisingcompany@gmail.com",
]

const SENDER_EMAIL = "noreply@metalbuilder.com"

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body: QuoteRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.zipCode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send user confirmation email
    await resend.emails.send({
      from: SENDER_EMAIL,
      to: body.email,
      subject: "Your Metal Builder Quote Request",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for your quote request, ${body.name}!</h2>
          <p>We've received your building inquiry and will review your specifications shortly. Our team will be in touch within 24 hours.</p>
          
          <h3>Your Building Configuration:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;"><strong>Dimensions</strong></td>
              <td style="padding: 8px;">${body.width}′ W × ${body.length}′ L × ${body.height}′ H</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;"><strong>Square Footage</strong></td>
              <td style="padding: 8px;">${(body.width * body.length).toLocaleString()} sq ft</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;"><strong>Roof Style</strong></td>
              <td style="padding: 8px;">${body.roofStyle}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;"><strong>Steel Gauge</strong></td>
              <td style="padding: 8px;">${body.gauge} gauge</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;"><strong>Doors</strong></td>
              <td style="padding: 8px;">${body.totalDoors}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;"><strong>Windows</strong></td>
              <td style="padding: 8px;">${body.totalWindows}</td>
            </tr>
          </table>
          
          <h3>Estimated Price Range</h3>
          <p style="font-size: 18px; color: #3b7dd8;"><strong>$${body.priceRange.low.toLocaleString()} – $${body.priceRange.high.toLocaleString()}</strong></p>
          
          <p><strong>Your Contact Information:</strong><br/>
          Phone: ${body.phone}<br/>
          ZIP Code: ${body.zipCode}</p>
          
          <p>Thanks for choosing Titan Steel Structures!</p>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is an automated message. Please do not reply to this email. 
            Contact us at info@titansteelstructures.com or call 1-800-Your-Build.
          </p>
        </div>
      `,
    })

    // Send company lead notification emails
    for (const companyEmail of COMPANY_EMAILS) {
      await resend.emails.send({
        from: SENDER_EMAIL,
        to: companyEmail,
        subject: `New Quote Request: ${body.width}×${body.length}×${body.height} Building (${(body.width * body.length).toLocaleString()} sq ft)`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Quote Request</h2>
            
            <h3>Customer Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Name</strong></td>
                <td style="padding: 8px;">${body.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Email</strong></td>
                <td style="padding: 8px;"><a href="mailto:${body.email}">${body.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Phone</strong></td>
                <td style="padding: 8px;"><a href="tel:${body.phone}">${body.phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>ZIP Code</strong></td>
                <td style="padding: 8px;">${body.zipCode}</td>
              </tr>
            </table>
            
            <h3>Building Specifications:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Dimensions</strong></td>
                <td style="padding: 8px;">${body.width}′ W × ${body.length}′ L × ${body.height}′ H</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Square Footage</strong></td>
                <td style="padding: 8px;">${(body.width * body.length).toLocaleString()} sq ft</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Roof Style</strong></td>
                <td style="padding: 8px;">${body.roofStyle}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Steel Gauge</strong></td>
                <td style="padding: 8px;">${body.gauge} gauge</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Doors</strong></td>
                <td style="padding: 8px;">${body.totalDoors}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;"><strong>Windows</strong></td>
                <td style="padding: 8px;">${body.totalWindows}</td>
              </tr>
            </table>
            
            <h3>Pricing</h3>
            <p><strong>Estimated Total:</strong> $${body.estimatedPrice.toLocaleString()}</p>
            <p><strong>Price Range:</strong> $${body.priceRange.low.toLocaleString()} – $${body.priceRange.high.toLocaleString()}</p>
            
            <p style="margin-top: 20px; color: #666;">
              Received on: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted and emails sent successfully",
    })
  } catch (error) {
    console.error("Error sending quote emails:", error)
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    )
  }
}
