import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ShieldCheck, Building2, ArrowRight, Sparkles, Users, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hindustani Awam Morcha (Secular) | Role & Leadership",
  description:
    "Organizational mandate and leadership role of Ratnesh Patel as Senior State Vice President, Bihar, in Hindustani Awam Morcha (Secular).",
  openGraph: {
    title: "HAM (Secular) Role | Ratnesh Patel",
    description:
      "Organizational mandate and leadership role of Ratnesh Patel as Senior State Vice President, Bihar, in Hindustani Awam Morcha (Secular).",
  },
};

export default function HamPage() {
  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/70 py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">HAM (Secular)</span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  Party Mandate &bull; Senior State Leadership
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Hindustani Awam Morcha (Secular)
              </h1>
              <p className="text-base sm:text-lg font-bold text-[var(--color-primary)]">
                Organizational Portfolio: Senior State Vice President, Bihar
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Party Presentation */}
      <Section variant="default">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Leadership & Identity Banner */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-slate-200 shadow-2xs shrink-0 bg-slate-50 p-1">
                    <Image
                      src="/images/ham/logo/ham-logo.png"
                      alt="Hindustani Awam Morcha (Secular) Official Emblem"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Party Leadership in Bihar
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Ratnesh Patel &bull; Senior State Vice President, Bihar
                    </p>
                  </div>
                </div>

                <a
                  href="https://ham.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0 shadow-sm"
                >
                  <span>Central Portal: ham.org.in</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Narrative Content */}
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>Hindustani Awam Morcha (Secular)</strong> is an established political force in Bihar founded by former Chief Minister <strong>Shri Jitan Ram Manjhi</strong> and led by National President <strong>Dr. Santosh Kumar Suman</strong>. The party champions social equality, economic dignity for backward classes and Dalits, and all-round developmental progress across Bihar.
                </p>

                <p>
                  As <strong>Senior State Vice President</strong>, Ratnesh Patel is actively involved in strengthening grassroots cadre coordination, organizing district conventions, and ensuring that public representations regarding farmer welfare, rural infrastructure, and local civic issues are effectively advocated before government authorities.
                </p>
              </div>

              {/* Leadership Banners / Slogans Grid */}
              <div className="space-y-4 pt-2">
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                  Party Vision &amp; Guiding Inspirations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/6] w-full rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                    <Image
                      src="/images/ratnesh-patel/hero/hero1.webp"
                      alt="HAM(S) Vision Banner"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/6] w-full rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                    <Image
                      src="/images/ratnesh-patel/hero/hero3.webp"
                      alt="Shri Jitan Ram Manjhi Banner"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Functional Responsibilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                    <ShieldCheck className="h-4 w-4" />
                    <span>State Executive Committee Leadership</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active participation in state executive deliberations, formulation of party resolutions, and coordinating district committee leadership.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                    <Building2 className="h-4 w-4" />
                    <span>District &amp; Block Coordination</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mentoring grassroots workers, overseeing booth-level organizational committees, and organizing community outreach drives across Bihar.
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <Link href="/#about">
                  <Button variant="outline" size="sm" className="rounded-lg border-slate-300 font-semibold">
                    &larr; About Ratnesh Patel
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-lg">
                    <span>जन संवाद / Contact Office</span>
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
