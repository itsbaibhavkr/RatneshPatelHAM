import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About Ratnesh Patel",
  description:
    "Official leadership profile, organizational responsibilities, and public advocacy record of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  openGraph: {
    title: "About Ratnesh Patel | Senior State Vice President, Bihar",
    description:
      "Official leadership profile, organizational responsibilities, and public advocacy record of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Editorial Profile Header */}
      <section className="border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
              <Link href="/" className="hover:text-[var(--color-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--color-dark-text)] font-medium">About</span>
            </div>

            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Leadership Profile
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)]">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[var(--color-primary)]">
                {profile.designation}
              </p>
              <p className="text-sm font-semibold tracking-wide text-[var(--color-muted-text)] uppercase">
                {profile.party}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Image + Text Editorial Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Official Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-4 shadow-xs">
                {profile.profile_image ? (
                  <div className="relative aspect-3/4 w-full overflow-hidden rounded-md">
                    <Image
                      src={profile.profile_image}
                      alt={`Portrait of ${profile.name}`}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    category="profile"
                    aspectRatio="3:4"
                    title={`Official Portrait of ${profile.name}`}
                    description="Official portrait slot configured for verified high-resolution photography."
                  />
                )}

                <div className="mt-4 pt-3 border-t border-[var(--color-border-gray)] space-y-1 text-xs">
                  <div className="font-semibold text-[var(--color-dark-text)]">
                    {profile.name}
                  </div>
                  <div className="text-[var(--color-primary)] font-medium">
                    {profile.designation}
                  </div>
                  <div className="text-[var(--color-muted-text)]">
                    {profile.party}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Profile & Organizational Context */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[var(--color-dark-text)] leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-dark-text)] border-b border-[var(--color-border-gray)] pb-3">
                  Public Profile &amp; Responsibilities
                </h2>

                <p className="leading-relaxed">
                  <strong>{profile.name}</strong> serves as the{" "}
                  <strong>Senior State Vice President</strong> for Bihar in the{" "}
                  <strong>{profile.party}</strong>.
                </p>

                <p className="text-[var(--color-dark-text)]/90 leading-relaxed">
                  {profile.biography}
                </p>

                <p className="text-[var(--color-dark-text)]/90 leading-relaxed">
                  He is entrusted with overseeing constituent outreach, participating in state leadership conclaves, and ensuring that public grievances from various districts in Bihar receive appropriate attention.
                </p>
              </div>

              {/* Factual Portfolio Highlights */}
              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-6 space-y-4">
                <h3 className="font-bold text-sm text-[var(--color-dark-text)] uppercase tracking-wider">
                  Key Organizational Purview
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong>State Executive Coordination:</strong> Working in party leadership at the state committee level in Bihar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong>Constituent Redressal:</strong> Receiving and forwarding public representations and community petitions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong>Organizational Outreach:</strong> Engaging district-level party workers, community representatives, and social workers.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Verified Contact Channels */}
              <div className="border-t border-[var(--color-border-gray)] pt-6 space-y-3">
                <h3 className="font-bold text-sm text-[var(--color-dark-text)]">
                  Public Communication
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted-text)]">
                  Formal constituent correspondence, delegations, and media inquiries may be submitted through the official portal contact desk.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="/political-journey">
                    <Button variant="default" size="sm">
                      <span>View Political Journey</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      <span>Submit Representation</span>
                      <Mail className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
