import * as React from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ratneshpatel.in";

/**
 * Sitewide Person schema for Ratnesh Patel.
 * Establishes knowledge graph entity for political leadership queries in Bihar.
 */
export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Ratnesh Patel",
    alternateName: [
      "रत्नेश पटेल",
      "Ratnesh Patel HAM",
      "Ratnesh Patel Kudhani",
      "Ratnesh Patel Bihar",
    ],
    jobTitle: "Senior State Vice President, Bihar",
    description:
      "Senior State Vice President of Hindustani Awam Morcha (Secular), Bihar. Experienced grassroots leader with 30+ years of public service in farmer welfare, youth advocacy, and NDA election coordination across Tirhut Division and Bihar.",
    url: siteUrl,
    image: `${siteUrl}/images/ratnesh-patel/profile/ratnesh-patel.webp`,
    telephone: "+919504211461",
    email: "mailto:ratneshpatelham@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Surya Bhawan, Anant Kamatual",
      addressLocality: "Kudhani, Muzaffarpur",
      addressRegion: "Bihar",
      postalCode: "844120",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "PoliticalParty",
      "@id": `${siteUrl}/#organization`,
      name: "Hindustani Awam Morcha (Secular)",
      url: "https://ham.org.in/",
    },
    affiliation: {
      "@type": "PoliticalParty",
      "@id": `${siteUrl}/#organization`,
      name: "Hindustani Awam Morcha (Secular)",
    },
    memberOf: [
      {
        "@type": "PoliticalParty",
        name: "Hindustani Awam Morcha (Secular)",
        alternateName: "HAM(S)",
      },
    ],
    sameAs: [
      "https://www.facebook.com/RatneshPatelHAM/",
      "https://www.instagram.com/ratneshpatelham",
      "https://x.com/ratneshpatelham",
      "https://ham.org.in/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * PoliticalParty & Organization schema for Hindustani Awam Morcha (Secular).
 */
export function PoliticalPartyJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PoliticalParty",
    "@id": `${siteUrl}/#organization`,
    name: "Hindustani Awam Morcha (Secular)",
    alternateName: ["HAM(S)", "हम (से.)", "Hindustani Awam Morcha"],
    url: "https://ham.org.in/",
    logo: `${siteUrl}/HAMLogo.png`,
    image: `${siteUrl}/images/ham/Hindustani%20Awam%20Morcha%20(Secular).png`,
    description:
      "Recognized state political party in Bihar, India. Natural ally of the National Democratic Alliance (NDA), founded by former Bihar Chief Minister Shri Jitan Ram Manjhi.",
    foundingDate: "2015-05-08",
    founder: {
      "@type": "Person",
      name: "Shri Jitan Ram Manjhi",
      jobTitle: "Founder HAM(S) & Union Minister of MSME, Government of India",
    },
    leader: {
      "@type": "Person",
      name: "Dr. Santosh Kumar Suman",
      jobTitle: "National President HAM(S) & Cabinet Minister, Government of Bihar",
    },
    member: [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ratnesh Patel",
        jobTitle: "Senior State Vice President, Bihar",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Party Central Desk",
        email: "hampartyofficial@gmail.com",
        url: "https://ham.org.in/",
      },
      {
        "@type": "ContactPoint",
        contactType: "State Leadership Office (Ratnesh Patel)",
        telephone: "+919504211461",
        email: "ratneshpatelham@gmail.com",
        areaServed: "Bihar",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite schema for search appearance and branding.
 */
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Ratnesh Patel - Official Leadership Portal",
    description:
      "Official public profile and communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: ["en-IN", "hi-IN"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList schema for navigation and SERP breadcrumb display.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * ContactPage schema for /contact.
 */
export function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: "Connect with Office | Ratnesh Patel",
    description:
      "Official communication desk for Ratnesh Patel, Senior State Vice President, Bihar, and Hindustani Awam Morcha (Secular) headquarters.",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * CollectionPage schema for /gallery.
 */
export function GalleryPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/gallery#webpage`,
    url: `${siteUrl}/gallery`,
    name: "Photo Gallery & Official Media Archive | Ratnesh Patel",
    description:
      "Official archive of photographs, conventions, public outreach rallies, and downloadable transparent PNG media of Ratnesh Patel, Senior State Vice President, Bihar.",
    mainEntity: {
      "@type": "ItemList",
      name: "Official Leadership & Public Outreach Photographs",
      numberOfItems: 18,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
