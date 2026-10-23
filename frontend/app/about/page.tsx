import type { Metadata } from 'next'
import { AboutClient } from './about-client'
import { SITE_CONFIG, buildBreadcrumbSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'About Raffu',
  description:
    'Raffu (raffu.com) lets you book clothing alterations online with verified local tailor studios. You visit the studio for your fitting and collect your altered clothes there.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Raffu | raffu.com',
    description:
      'Raffu (raffu.com) lets you book clothing alterations online with verified local tailor studios. You visit the studio for your fitting and collect your altered clothes there.',
    url: '/about',
  },
}

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Raffu',
    description:
      'Raffu (raffu.com) lets you book clothing alterations online with verified local tailor studios. You visit the studio for your fitting and collect your altered clothes there.',
    url: `${SITE_CONFIG.url}/about`,
    about: { '@id': `${SITE_CONFIG.url}/#organization` },
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Raffu', path: '/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AboutClient />
    </>
  )
}
