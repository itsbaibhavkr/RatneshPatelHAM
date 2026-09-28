import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Calendar, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publicWorkItems } from "@/data/public-work";

export const metadata: Metadata = {
  title: "Public Work & Initiatives | Ratnesh Patel",
  description:
    "Constituent representation, civic outreach programs, and community initiatives led by Ratnesh Patel across Bihar.",
  openGraph: {
    title: "Public Work & Initiatives | Ratnesh Patel",
    description:
      "Constituent representation, civic outreach programs, and community initiatives led by Ratnesh Patel across Bihar.",
  },
};

export default function PublicWorkPage() {
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
              <span className="text-slate-900 font-semibold">Public Work</span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  जनहित कार्य &bull; Initiatives &amp; Field Engagements
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Public Work &amp; Civic Initiatives
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Documenting active constituent representations, farmer welfare advocacy, youth empowerment camps, and district-level social programs across Bihar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicWorkItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="subtle" className="text-xs font-bold text-[var(--color-primary)] bg-red-50">
                      {item.category}
                    </Badge>
                    {item.date && (
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h2>

                  {item.location && (
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                      <span>{item.location}</span>
                    </span>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Constituent Initiative
                  </span>
                  <Link
                    href="/contact"
                    className="font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Submit Query</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 p-8 sm:p-10 text-white text-center space-y-4 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Have a Local Matter or Civic Proposal for Your District?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Ratnesh Patel&apos;s office regularly coordinates with district magistrates, administrative departments, and community delegates to resolve public grievances.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-xl shadow-md">
                  <span>Connect with Constituent Desk / जन संवाद</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
