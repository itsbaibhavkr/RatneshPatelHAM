import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Political Journey",
  description:
    "Documented political journey and leadership timeline of Ratnesh Patel, Senior State Vice President, Bihar.",
};

export default function PoliticalJourneyPage() {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-dark-text)] font-medium">Political Journey</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 border-b border-[var(--color-border-gray)] pb-6">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Chronology &amp; Service Record
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-dark-text)]">
              Political Journey
            </h1>
            <p className="text-sm text-[var(--color-muted-text)] leading-relaxed">
              Chronological record of organizational service, party leadership responsibilities, and public advocacy milestones in Hindustani Awam Morcha (Secular).
            </p>
          </div>

          {/* Timeline Architecture Stub */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[var(--color-primary)] font-semibold">
                    <Calendar className="h-4 w-4" />
                    <span>Current Designation</span>
                  </div>
                  <Badge variant="default">Active Responsibility</Badge>
                </div>
                <CardTitle className="mt-2">
                  Senior State Vice President, Bihar
                </CardTitle>
                <CardDescription>
                  Hindustani Awam Morcha (Secular)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed">
                  Overseeing state-level organizational coordination, party outreach, and public policy communication across districts in Bihar.
                </p>
              </CardContent>
            </Card>

            {/* Architecture Notice */}
            <div className="rounded-lg border border-dashed border-[var(--color-border-dark)] bg-[var(--color-off-white)] p-6 text-center space-y-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] mx-auto">
                <Shield className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-sm text-[var(--color-dark-text)]">
                Timeline Architecture Configured
              </h4>
              <p className="text-xs text-[var(--color-muted-text)] max-w-md mx-auto">
                Additional chronological milestones and official service appointments will be synchronized via the database schema during upcoming content phases.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
