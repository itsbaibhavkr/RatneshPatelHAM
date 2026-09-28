import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Public Work",
  description:
    "Constituent representation, civic outreach, and public service activities of Ratnesh Patel.",
};

const WORK_CATEGORIES = [
  {
    title: "Constituency Grievance & Redressal",
    category: "Constituent Outreach",
    description:
      "Facilitating formal constituent representations, citizen petitions, and administrative coordination.",
  },
  {
    title: "Community Outreach & Public Assemblies",
    category: "Civic Engagement",
    description:
      "Public meetings with grassroots communities, social workers, and district representatives in Bihar.",
  },
  {
    title: "Party Organization & State Conclaves",
    category: "Organizational Leadership",
    description:
      "Participating in Hindustani Awam Morcha (Secular) state-level leadership dialogues and conferences.",
  },
];

export default function PublicWorkPage() {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-dark-text)] font-medium">Public Work</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 border-b border-[var(--color-border-gray)] pb-6">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Service Documentation
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-dark-text)]">
              Public Work &amp; Engagements
            </h1>
            <p className="text-sm text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
              Documenting civic engagements, grassroots constituency interactions, and organizational initiatives undertaken in public service across Bihar.
            </p>
          </div>

          {/* Category Cards Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_CATEGORIES.map((item, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="mb-3">
                    <ImagePlaceholder
                      category="public-work"
                      aspectRatio="16:9"
                      title={item.category}
                      description="Photographic slot for public service record."
                    />
                  </div>
                  <Badge variant="outline" className="w-fit text-[11px] mb-2">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="text-[11px] font-medium text-[var(--color-muted-text)]">
                    Architecture Configured &bull; Supabase Ready
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Architecture Ready Notice */}
          <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary-subtle)] text-[var(--color-primary)] shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[var(--color-dark-text)]">
                  Public Work Module Architecture Ready
                </h4>
                <p className="text-xs text-[var(--color-muted-text)]">
                  The PostgreSQL database schema `public_work` is prepared for authenticated administration.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-xs font-semibold text-[var(--color-primary)] hover:underline shrink-0"
            >
              Submit Constituent Matter &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
