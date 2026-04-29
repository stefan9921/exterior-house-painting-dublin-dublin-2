import { business } from "@/lib/business";

type Json = Record<string, unknown> | Array<Record<string, unknown>>;

export function JsonLd({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema(opts?: {
  url?: string;
  serviceArea?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Painter",
    "@id": `${business.siteUrl}/#localbusiness`,
    name: business.name,
    image: `${business.siteUrl}/images/og-image.jpg`,
    url: opts?.url ?? business.siteUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.area,
      postalCode: business.postcode,
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3441,
      longitude: -6.2411,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: (opts?.serviceArea ?? [
      "Dublin 2",
      "Dublin",
      "Greater Dublin",
      "Tallaght",
      "Swords",
      "Lucan",
      "Blanchardstown",
      "Malahide",
      "Blackrock",
      "Dundrum",
      "Clontarf",
      "Ranelagh",
      "Rathmines",
      "Sandyford",
      "Howth",
      "Greystones",
      "Bray",
      "Naas",
      "Maynooth",
      "Celbridge",
      "Drogheda",
      "Navan",
      "Mullingar",
    ]).map((name) => ({ "@type": "Place", name })),
  };
}

export function breadcrumbSchema(
  trail: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${business.siteUrl}/#localbusiness` },
    areaServed: (opts.areaServed ?? ["Dublin", "Dublin 2", "Greater Dublin"]).map(
      (name) => ({ "@type": "Place", name })
    ),
  };
}

export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${business.siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
