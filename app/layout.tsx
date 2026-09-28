import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
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
