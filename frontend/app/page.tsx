import type { Metadata } from 'next'
import { HomeClient } from './home-client'
import { SITE_CONFIG, buildLocalBusinessSchema, buildFAQSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Raffu — Own Your Fit | Certified Clothes Alteration & Tailoring Studio Network',
  description:
    'Raffu connects you with verified neighborhood master tailor studios with transparent upfront menu pricing. Precision trouser & denim hemming with original finish preservation, suit refitting, and artisanal darning. 100% Fit Guarantee.',
  alternates: {
    canonical: 'https://raffu.com',
  },
  openGraph: {
    title: 'Raffu — Own Your Fit | Certified Clothes Alteration & Tailoring Studio Network',
    description:
      'Verified local master tailor studios, upfront transparent menu pricing, and 100% Fit Guarantee. Jeans hemming, suit refitting & artisanal darning. Not doorstep tailoring.',
    url: 'https://raffu.com',
    siteName: 'Raffu - Own Your Fit',
  },
}

export default function HomePage() {
  const localBusinessSchema = buildLocalBusinessSchema()
  const faqSchema = buildFAQSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
