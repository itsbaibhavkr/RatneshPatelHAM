import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Building2, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { politicalJourneyItems } from "@/data/political-journey";

export const metadata: Metadata = {
  title: "Political Journey | Ratnesh Patel",
  description:
    "Documented political journey and service milestones of Ratnesh Patel across Bihar under Hindustani Awam Morcha (Secular).",
  openGraph: {
    title: "Political Journey | Ratnesh Patel",
    description:
      "Documented political journey and service milestones of Ratnesh Patel across Bihar under Hindustani Awam Morcha (Secular).",
  },
};

export default function PoliticalJourneyPage() {
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
              <span className="text-slate-900 font-semibold">Political Journey</span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  राजनीतिक यात्रा &bull; Milestones of Public Service
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Political Journey &amp; Leadership Record
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                A documented chronology of grassroots organization, constituent service, and executive appointments in Bihar under Hindustani Awam Morcha (Secular).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Vertical Timeline Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line through timeline */}
            <div
              className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-slate-200"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {politicalJourneyItems.map((item, index) => (
                <div key={item.id} className="relative flex items-start gap-6 sm:gap-8 group">
                  {/* Timeline Node Icon */}
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-white text-[var(--color-primary)] shadow-sm z-10 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  {/* Timeline Card */}
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <Badge variant="subtle" className="font-extrabold text-xs py-0.5 text-[var(--color-primary)] bg-red-50">
                        {item.year}
                      </Badge>
                      {(item.is_current || index === 0) && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded-full">
                          <ShieldCheck className="h-3 w-3" />
                          <span>Active Leadership Mandate</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 pb-3 border-b border-slate-100">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <Building2 className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                        <span>{item.organization}</span>
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>

                    <p className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-xl shadow-xs">
                  <span>Connect with Office / जन संवाद</span>
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
