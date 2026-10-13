import { COMPANY, PRODUCTS } from "@/lib/data";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    description: COMPANY.description,
    url: "https://globaloreandminerals.com",
    logo: "https://globaloreandminerals.com/images/logo.jpeg",
    foundingDate: COMPANY.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "IN",
    },
    contactPoint: COMPANY.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    })),
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProductsJsonLd() {
  const jsonLd = PRODUCTS.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.heroDescription,
    image: `https://globaloreandminerals.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: COMPANY.name,
      },
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: "https://globaloreandminerals.com",
    description: COMPANY.description,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://globaloreandminerals.com/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: COMPANY.description,
    image: "https://globaloreandminerals.com/images/logo.jpeg",
    telephone: COMPANY.phones[0],
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.035,
      longitude: 69.075,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
