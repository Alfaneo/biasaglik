import { site } from './site';

// Yapılandırılmış veri (JSON-LD) yardımcıları
export const isletmeId = `${site.url}/#isletme`;

export function isletmeSchema(gorselUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    '@id': isletmeId,
    name: site.ad,
    description: 'İstanbul genelinde evde fizik tedavi ve rehabilitasyon hizmeti.',
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: gorselUrl ?? `${site.url}/logo.png`,
    telephone: '+905387001374',
    email: site.eposta,
    foundingDate: String(site.kurulusYili),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.adres.sokak,
      addressLocality: site.adres.ilce,
      addressRegion: site.adres.il,
      postalCode: site.adres.postaKodu,
      addressCountry: 'TR',
    },
    areaServed: { '@type': 'City', name: 'İstanbul' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    hasMap: site.haritaLink,
  };
}

export function breadcrumbSchema(adimlar: { ad: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: adimlar.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.ad,
      item: new URL(a.url, site.url).href,
    })),
  };
}

export function sssSchema(sss: { soru: string; cevap: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sss.map((s) => ({
      '@type': 'Question',
      name: s.soru,
      acceptedAnswer: { '@type': 'Answer', text: s.cevap },
    })),
  };
}
