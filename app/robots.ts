import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      // Google AI
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Anthropic / Claude
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Microsoft / Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'BingPreview',
        allow: '/',
      },
      // Meta
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalFetcher',
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // Amazon / Alexa
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
      // Apple
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // ByteDance / TikTok
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // Common Crawl (used by many AI models)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // YouChat
      {
        userAgent: 'YouBot',
        allow: '/',
      },
      // Brave
      {
        userAgent: 'BraveBot',
        allow: '/',
      },
      // Neeva
      {
        userAgent: 'NeevaBot',
        allow: '/',
      },
      // Diffbot
      {
        userAgent: 'Diffbot',
        allow: '/',
      },
      // Webz.io
      {
        userAgent: 'omgili',
        allow: '/',
      },
      // AI2
      {
        userAgent: 'AI2Bot',
        allow: '/',
      },
      // Hugging Face
      {
        userAgent: 'HuggingFaceBot',
        allow: '/',
      },
      // Mistral
      {
        userAgent: 'MistralBot',
        allow: '/',
      },
      // xAI / Grok
      {
        userAgent: 'Grok',
        allow: '/',
      },
      {
        userAgent: 'xAI-Bot',
        allow: '/',
      },
    ],
    sitemap: 'https://titansteelstructures.com/sitemap.xml',
    host: 'https://titansteelstructures.com',
  }
}
