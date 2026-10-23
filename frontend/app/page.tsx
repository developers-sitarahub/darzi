import type { Metadata } from 'next'
import { HomeClient } from './home-client'
import { SITE_CONFIG, buildFAQSchema, buildServiceCatalogSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: {
    absolute: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: '/',
    siteName: 'Raffu',
    locale: SITE_CONFIG.locale,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raffu (raffu.com) - book clothing alterations at local tailor studios',
      },
    ],
  },
}

export default function HomePage() {
  const serviceSchema = buildServiceCatalogSchema()
  const faqSchema = buildFAQSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <HomeClient />
    </>
  )
}
