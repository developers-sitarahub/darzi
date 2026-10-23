import type { Metadata } from 'next'
import { ContactClient } from './contact-client'
import { SITE_CONFIG, buildBreadcrumbSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Contact Raffu Support',
  description:
    'Questions about your alteration booking, studio visit, or order? Contact the official Raffu support team at support@raffu.com.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Raffu | raffu.com',
    description:
      'Questions about your alteration booking, studio visit, or order? Contact the official Raffu support team at support@raffu.com.',
    url: '/contact',
  },
}

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Raffu',
    description: 'Get in touch with Raffu for tailoring and fitting questions.',
    url: `${SITE_CONFIG.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      email: SITE_CONFIG.supportEmail,
    },
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ContactClient />
    </>
  )
}
