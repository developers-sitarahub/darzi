import type { Metadata } from 'next'
import { HomeClient } from './home-client'
import { buildFAQSchema, buildServiceCatalogSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: {
    absolute: 'Raffu - Own Your Fit | Clothes Alterations & Tailoring',
  },
  description:
    'Connect with verified local master tailors for precision clothes alterations, fittings, and repairs with upfront pricing and a 100% re-fit guarantee.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Raffu - Own Your Fit | Clothes Alterations & Tailoring',
    description:
      'Connect with verified local master tailors for precision clothes alterations, fittings, and repairs with upfront pricing and a 100% re-fit guarantee.',
    url: 'https://raffu.com',
    siteName: 'Raffu - Own Your Fit',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raffu tailoring and alteration studio network',
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
