import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    "Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  keywords: [
    "Ratnesh Patel",
    "Senior State Vice President",
    "Bihar",
    "Hindustani Awam Morcha",
    "HAM Secular",
    "Public Profile",
    "Patna",
  ],
  authors: [{ name: "Ratnesh Patel" }],
  creator: "Office of Ratnesh Patel",
  publisher: "Ratnesh Patel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ratnesh Patel - Official Portal",
    title:
      "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
    description:
      "Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
    description:
      "Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
