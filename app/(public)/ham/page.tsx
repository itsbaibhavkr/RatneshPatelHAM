import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hindustani Awam Morcha (Secular)",
  description:
    "Party affiliation context of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
};

export default function HamPage() {
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
            <span className="text-[var(--color-dark-text)] font-medium">
              HAM (Secular)
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3 border-b border-[var(--color-border-gray)] pb-6">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Party Affiliation Context
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-dark-text)]">
              Hindustani Awam Morcha (Secular)
            </h1>
            <p className="text-base text-[var(--color-primary)] font-medium">
              Organizational Role: Senior State Vice President, Bihar
            </p>
          </div>

          {/* Prominent Mandatory Clarification Banner */}
          <div className="rounded-lg border border-[var(--color-primary-border)] bg-[var(--color-primary-subtle)] p-5 text-xs text-[var(--color-dark-text)] flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-sm font-semibold text-[var(--color-primary-dark)]">
                Important Organizational Clarification:
              </strong>
              <p className="text-xs leading-relaxed">
                This webpage is part of the personal public-profile website of <strong>Ratnesh Patel</strong> and documents his official capacity and activities as Senior State Vice President, Bihar. This is <strong>NOT</strong> the official portal or central website of Hindustani Awam Morcha (Secular).
              </p>
            </div>
          </div>

          {/* Affiliation Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>State Leadership</span>
                </div>
                <CardTitle className="text-lg">Organizational Mandate</CardTitle>
                <CardDescription>
                  Representing the party at the state level across Bihar.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-[var(--color-muted-text)] leading-relaxed space-y-2">
                <p>
                  As Senior State Vice President, Ratnesh Patel is actively involved in strengthening organizational coordination, constituent dialogue, and community outreach in Bihar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] mb-1">
                  <Building2 className="h-4 w-4" />
                  <span>Constituent Representation</span>
                </div>
                <CardTitle className="text-lg">Public Service Engagement</CardTitle>
                <CardDescription>
                  Addressing regional concerns and grassroots representations.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-[var(--color-muted-text)] leading-relaxed space-y-2">
                <p>
                  Connecting public representations with party leadership and state authorities to address public issues across constituencies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Office Call to action */}
          <div className="pt-4 flex items-center justify-between border-t border-[var(--color-border-gray)]">
            <Link href="/about">
              <Button size="sm" variant="outline">
                &larr; About Ratnesh Patel
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" variant="default">
                <span>Contact Office</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
