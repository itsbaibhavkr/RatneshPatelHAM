import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Briefcase,
  Image as ImageIcon,
  Building2,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Official Personal Portal | Ratnesh Patel",
  description:
    "Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
};

const ARCHITECTURE_SECTIONS = [
  {
    title: "About Ratnesh Patel",
    href: "/about",
    description:
      "Public profile, leadership background, and organizational role in Bihar.",
    icon: Compass,
    badge: "Architecture Ready",
  },
  {
    title: "Political Journey",
    href: "/political-journey",
    description:
      "Documented chronological milestones, party responsibilities, and leadership timeline.",
    icon: Building2,
    badge: "Architecture Ready",
  },
  {
    title: "Public Work & Initiatives",
    href: "/public-work",
    description:
      "Constituent representation, civic outreach programs, and public service activities.",
    icon: Briefcase,
    badge: "Architecture Ready",
  },
  {
    title: "Media & Archive",
    href: "/gallery",
    description:
      "Official photographic documentation from public meetings, conventions, and state sessions.",
    icon: ImageIcon,
    badge: "Architecture Ready",
  },
  {
    title: "Hindustani Awam Morcha (S)",
    href: "/ham",
    description:
      "Organizational context, party affiliation details, and state leadership purview.",
    icon: ShieldCheck,
    badge: "Architecture Ready",
  },
  {
    title: "Constituent Communication",
    href: "/contact",
    description:
      "Direct channels for public representations, official inquiries, and constituent messages.",
    icon: Mail,
    badge: "Architecture Ready",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="subtle" className="text-xs uppercase tracking-wider py-1 px-3">
                  Official Public Profile
                </Badge>
                <span className="text-xs text-[var(--color-muted-text)] font-medium">
                  State of Bihar
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)] leading-tight">
                  Ratnesh Patel
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[var(--color-primary)]">
                  Senior State Vice President, Bihar
                </p>
                <p className="text-sm font-semibold tracking-wide text-[var(--color-muted-text)] uppercase">
                  Hindustani Awam Morcha (Secular)
                </p>
              </div>

              <p className="text-base text-[var(--color-dark-text)]/80 leading-relaxed max-w-2xl">
                Welcome to the official personal communication and public documentation portal of Ratnesh Patel. This platform is dedicated to maintaining transparent engagement with constituents, recording civic work across Bihar, and facilitating public correspondence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/contact">
                  <Button size="lg" variant="default" className="font-medium">
                    <span>Contact Office</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="font-medium">
                    Profile Overview
                  </Button>
                </Link>
                <Link href="/public-work">
                  <Button size="lg" variant="secondary" className="font-medium">
                    Public Work
                  </Button>
                </Link>
              </div>

              {/* Quick Trust Indicators */}
              <div className="pt-6 border-t border-[var(--color-border-gray)] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-2 text-[var(--color-dark-text)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  <span>Verified Public Portal</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-dark-text)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  <span>State Leadership</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-dark-text)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  <span>Constituent Office</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prepared Image Architecture */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-b from-[var(--color-primary-border)]/40 to-transparent blur-xs -z-10" />
                <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-4 shadow-xs">
                  <ImagePlaceholder
                    category="profile"
                    aspectRatio="4:3"
                    title="Official Portrait of Ratnesh Patel"
                    description="Official portrait slot configured for verified high-resolution photography."
                    className="w-full"
                  />
                  <div className="mt-4 pt-3 border-t border-[var(--color-border-gray)] flex items-center justify-between text-xs text-[var(--color-muted-text)]">
                    <span className="font-medium text-[var(--color-dark-text)]">
                      Ratnesh Patel
                    </span>
                    <span>Senior State Vice President</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mandatory Disclaimer Callout */}
      <section className="bg-[var(--color-off-white)] border-b border-[var(--color-border-gray)] py-4">
        <Container>
          <div className="flex items-center justify-between gap-4 text-xs text-[var(--color-muted-text)]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
              <span>
                <strong>Important Notice:</strong> This is a personal/public-profile website for Ratnesh Patel. It is not the official party website of Hindustani Awam Morcha (Secular).
              </span>
            </div>
            <Link
              href="/ham"
              className="text-[var(--color-primary)] font-medium hover:underline shrink-0 hidden sm:inline"
            >
              Learn More &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Public Architecture Sections */}
      <Section variant="surface">
        <Container>
          <SectionHeading
            badge="Portal Structure"
            title="Public Portal Architecture"
            description="Explore the dedicated sections designed to provide organized, authentic information on leadership, public initiatives, and constituent engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARCHITECTURE_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.href} href={section.href} className="group block">
                  <Card className="h-full transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary-subtle)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-medium text-[var(--color-muted-text)] border border-[var(--color-border-gray)] rounded-full px-2 py-0.5">
                          {section.badge}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-[var(--color-primary)] transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription>
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-xs font-semibold text-[var(--color-primary)] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Enter Section</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Foundation Status & Development Notice */}
      <Section variant="default">
        <Container size="narrow">
          <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-8 text-center space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] mx-auto">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-dark-text)]">
              Foundation Phase Completed
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed max-w-xl mx-auto">
              The technical foundation, design token system, image architecture, and Supabase client configuration have been set up in strict accordance with the brand guidelines (Red &amp; White) and content verification rules.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button size="sm" variant="default">
                  Submit Constituent Query
                </Button>
              </Link>
              <Link href="/admin/login">
                <Button size="sm" variant="outline">
                  Administrator Access
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
