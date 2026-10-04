import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  PersonJsonLd,
  PoliticalPartyJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ratneshpatel.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Ratnesh Patel",
    default:
      "Ratnesh Patel | Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)",
  },
  description:
    "Official portal of Ratnesh Patel, Senior State Vice President of Hindustani Awam Morcha (Secular), Bihar. 30+ years of dedicated grassroots public service, farmer advocacy, NDA leadership, and constituent outreach across Bihar.",
  keywords: [
    // English primary keywords
    "Ratnesh Patel",
    "Ratnesh Patel Bihar",
    "Ratnesh Patel HAM",
    "Ratnesh Patel Hindustani Awam Morcha",
    "Senior State Vice President Bihar",
    "Hindustani Awam Morcha Secular",
    "HAM Secular Bihar",
    "HAM Party Leaders Bihar",
    "Jitan Ram Manjhi HAM Secular",
    "Dr Santosh Kumar Suman",
    "NDA Incharge Muzaffarpur Vaishali 2024",
    "Kudhani Muzaffarpur Bihar",
    "Tirhut Division Political Leader",
    "Farmer Welfare Bihar",
    "Surya Bhawan Kudhani",
    // Hindi keywords for bilingual search intent
    "रत्नेश पटेल",
    "रत्नेश पटेल हम पार्टी",
    "रत्नेश पटेल कुढ़नी मुजफ्फरपुर",
    "वरीय प्रदेश उपाध्यक्ष बिहार",
    "हिंदुस्तानी आवाम मोर्चा सेक्युलर",
    "हम सेक्युलर बिहार",
    "जीतन राम मांझी",
    "डॉ संतोष कुमार सुमन",
  ],
  authors: [{ name: "Ratnesh Patel", url: siteUrl }],
  creator: "Office of Ratnesh Patel",
  publisher: "Ratnesh Patel",
  category: "politics",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: siteUrl,
    siteName: "Ratnesh Patel - Official Leadership Portal",
    title:
      "Ratnesh Patel | Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)",
    description:
      "Official portal of Ratnesh Patel, Senior State Vice President of Hindustani Awam Morcha (Secular), Bihar. 30+ years of grassroots leadership and constituent advocacy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ratnesh Patel - Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)",
        type: "image/png",
      },
      {
        url: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
        width: 1200,
        height: 1800,
        alt: "Ratnesh Patel Official Portrait",
        type: "image/webp",
      },
      {
        url: "/HAMLogo.png",
        width: 512,
        height: 512,
        alt: "Hindustani Awam Morcha (Secular) Official Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ratneshpatelham",
    creator: "@ratneshpatelham",
    title:
      "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
    description:
      "Official public profile and communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Favicons & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#BE1B0F" />

        {/* Core structured data for Search Engines */}
        <PersonJsonLd />
        <PoliticalPartyJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
