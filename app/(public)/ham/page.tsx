import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ShieldCheck, ShieldAlert, Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "HAM (Secular) Association",
  description:
    "Party affiliation context of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  openGraph: {
    title: "HAM (Secular) Association | Ratnesh Patel",
    description:
      "Party affiliation context of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  },
};

export default function HamPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
              <Link href="/" className="hover:text-[var(--color-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--color-dark-text)] font-medium">HAM (Secular)</span>
            </div>

            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Party Association Context
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)]">
                Hindustani Awam Morcha (Secular)
              </h1>
              <p className="text-base sm:text-lg font-medium text-[var(--color-primary)]">
                Organizational Mandate: Senior State Vice President, Bihar
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Branded Information Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mandatory Disclaimer Box */}
            <div className="rounded-lg border border-[var(--color-primary-border)] bg-[var(--color-primary-subtle)] p-5 text-xs sm:text-sm text-[var(--color-dark-text)] flex items-start gap-3.5">
              <ShieldAlert className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <strong className="font-bold text-[var(--color-primary-dark)] text-sm">
                  Official Clarification: Personal Profile Portal
                </strong>
                <p className="leading-relaxed">
                  This website is the official personal and public-profile website of <strong>Ratnesh Patel</strong>. It documents his public work, state leadership responsibilities, and constituent engagement as Senior State Vice President, Bihar. This is <strong>NOT</strong> the official central portal of the Hindustani Awam Morcha (Secular) political party.
                </p>
                <div className="pt-2">
                  <a
                    href="https://ham.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--color-primary)] hover:underline"
                  >
                    <span>Visit Central Party Website (https://ham.org.in/)</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Branded Identity & Factual Association */}
            <div className="rounded-xl border border-[var(--color-border-gray)] bg-[var(--color-white)] p-6 sm:p-10 space-y-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[var(--color-border-gray)]">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-[var(--color-border-gray)] shadow-xs shrink-0">
                    <Image
                      src="/images/ham/logo/ham-logo.svg"
                      alt="Hindustani Awam Morcha (Secular) Official Emblem"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-dark-text)]">
                      Party Leadership in Bihar
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--color-muted-text)]">
                      Organizational Portfolio &bull; Senior State Vice President
                    </p>
                  </div>
                </div>

                <a
                  href="https://ham.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-primary)] text-white text-xs font-semibold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0 shadow-xs"
                >
                  <span>Official Website: ham.org.in</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[var(--color-dark-text)] leading-relaxed">
                <p>
                  <strong>Hindustani Awam Morcha (Secular)</strong> is an established political party operating actively across Bihar, committed to social welfare, constituent empowerment, and democratic representation.
                </p>

                <p className="text-[var(--color-dark-text)]/90">
                  As <strong>Senior State Vice President, Bihar</strong>, Ratnesh Patel is actively involved in strengthening organizational coordination, expanding grassroots outreach, and presenting public representations to state authorities on behalf of the party.
                </p>
              </div>

              {/* Factual Pillars of Responsibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border-gray)]">
                <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                    <ShieldCheck className="h-4 w-4" />
                    <span>State Committee Leadership</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
                    Participating in executive deliberations, state party conclaves, and strategic organizational coordination.
                  </p>
                </div>

                <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                    <Building2 className="h-4 w-4" />
                    <span>District Coordination</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
                    Facilitating communication between grassroots community workers and state executive leadership across districts.
                  </p>
                </div>
              </div>

              {/* Party Flag Banner */}
              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md border border-[var(--color-border-gray)] shadow-2xs">
                  <Image
                    src="/images/ham/flag/ham-flag.svg"
                    alt="Hindustani Awam Morcha (Secular) Party Flag"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs text-[var(--color-muted-text)] space-y-0.5 text-center sm:text-left">
                  <strong className="text-[var(--color-dark-text)] font-semibold block">
                    Party Colors &amp; Identity
                  </strong>
                  <p>
                    Deep Red and White represent organizational discipline, constituent empowerment, and social justice across Bihar.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    &larr; About Ratnesh Patel
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="default" size="sm">
                    <span>Contact Office</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
