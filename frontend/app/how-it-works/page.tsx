import type { Metadata } from 'next'
import { HowItWorksClient } from './how-it-works-client'
import { buildHowToSchema, buildBreadcrumbSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'How Raffu Works',
  description:
    'How Raffu works: book your alteration on raffu.com, a nearby partner studio accepts your order, you visit the studio, the tailor alters your garment and hands it over to you there.',
  alternates: {
    canonical: '/how-it-works',
  },
  openGraph: {
    title: 'How Raffu Works | Own Your Fit | raffu.com',
    description:
      'How Raffu works: book your alteration on raffu.com, a nearby partner studio accepts your order, you visit the studio, the tailor alters your garment and hands it over to you there.',
    url: '/how-it-works',
  },
}

export default function HowItWorksPage() {
  const howToSchema = buildHowToSchema()
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HowItWorksClient />
    </>
  )
}
