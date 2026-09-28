import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Official profile of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
};

export default function AboutPage() {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb / Category */}
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-dark-text)] font-medium">About</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 border-b border-[var(--color-border-gray)] pb-6">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Leadership Profile
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-dark-text)]">
              About Ratnesh Patel
            </h1>
            <p className="text-base text-[var(--color-primary)] font-medium">
              Senior State Vice President, Bihar &bull; Hindustani Awam Morcha (Secular)
            </p>
          </div>

          {/* Content & Portrait Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <ImagePlaceholder
                category="profile"
                aspectRatio="3:4"
                title="Ratnesh Patel Portrait"
                description="High-resolution verified portrait slot."
              />
            </div>

            <div className="md:col-span-7 space-y-4 text-sm text-[var(--color-dark-text)] leading-relaxed">
              <p>
                <strong>Ratnesh Patel</strong> serves as the{" "}
                <strong>Senior State Vice President</strong> for Bihar in the{" "}
                <strong>Hindustani Awam Morcha (Secular)</strong>.
              </p>
              <p className="text-[var(--color-muted-text)]">
                In this key organizational capacity, he works actively on state-level party coordination, public representation, and constituent advocacy across Bihar.
              </p>

              {/* Architecture Ready Notice */}
              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-5 space-y-2 mt-6">
                <div className="flex items-center gap-2 font-semibold text-xs text-[var(--color-primary)]">
                  <Shield className="h-4 w-4" />
                  <span>Section Architecture Ready</span>
                </div>
                <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
                  Verified biographical records, organizational portfolios, and verified leadership background will be populated during the content integration phase.
                </p>
              </div>

              <div className="pt-4 flex gap-3">
                <Link href="/political-journey">
                  <Button size="sm" variant="default">
                    <span>Political Journey</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" variant="outline">
                    Contact Office
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
