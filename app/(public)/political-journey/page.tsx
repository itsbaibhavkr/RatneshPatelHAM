import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { politicalJourneyItems } from "@/data/political-journey";

export const metadata: Metadata = {
  title: "Political Journey",
  description:
    "Documented political journey and chronological organizational service milestones of Ratnesh Patel across Bihar under Hindustani Awam Morcha (Secular).",
  openGraph: {
    title: "Political Journey | Ratnesh Patel",
    description:
      "Documented political journey and chronological organizational service milestones of Ratnesh Patel across Bihar under Hindustani Awam Morcha (Secular).",
  },
};

export default function PoliticalJourneyPage() {
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
              <span className="text-[var(--color-dark-text)] font-medium">Political Journey</span>
            </div>

            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Chronology &amp; Service Record
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)]">
                Political Journey
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
                Chronological record of organizational appointments, leadership responsibilities, and public advocacy under Hindustani Awam Morcha (Secular).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Vertical Timeline Section */}
      <Section variant="default">
        <Container size="wide">
          {politicalJourneyItems.length > 0 ? (
            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line through timeline */}
              <div
                className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-[var(--color-border-gray)]"
                aria-hidden="true"
              />

              <div className="space-y-8 sm:space-y-10">
                {politicalJourneyItems.map((item, index) => (
                  <div key={item.id} className="relative flex items-start gap-6 sm:gap-8 group">
                    {/* Timeline Node Icon */}
                    <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-white)] text-[var(--color-primary)] shadow-xs z-10 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    {/* Timeline Card */}
                    <Card className="flex-1 transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-xs">
                      <CardHeader className="p-5 pb-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <Badge variant="subtle" className="font-bold text-xs py-0.5">
                            {item.year}
                          </Badge>
                          {(item.is_current || index === 0) && (
                            <Badge variant="default" className="text-[10px]">
                              Current Office
                            </Badge>
                          )}
                        </div>

                        <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-dark-text)]">
                          {item.title}
                        </CardTitle>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-muted-text)] pt-1">
                          <span className="flex items-center gap-1.5 font-medium text-[var(--color-dark-text)]">
                            <Building2 className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                            <span>{item.organization}</span>
                          </span>
                          {item.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-[var(--color-muted-text)]" />
                              <span>{item.location}</span>
                            </span>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-5 pt-0 text-xs sm:text-sm text-[var(--color-dark-text)]/85 leading-relaxed">
                        <p>{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Verified Active Designation Card */}
              <Card className="border-[var(--color-primary-border)] bg-[var(--color-white)] shadow-xs">
                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="subtle" className="text-xs">
                      Active Leadership
                    </Badge>
                    <Badge variant="default" className="text-xs">
                      Present
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">Senior State Vice President, Bihar</CardTitle>
                  <CardDescription className="text-xs text-[var(--color-primary-dark)] font-semibold">
                    Hindustani Awam Morcha (Secular)
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed space-y-2">
                  <p>
                    Ratnesh Patel currently holds the official mandate of Senior State Vice President for the State of Bihar, overseeing organizational outreach, district committee engagement, and public advocacy.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center pt-4">
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    <span>Read Leadership Background</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
