import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  Briefcase,
  Image as ImageIcon,
  ExternalLink,
  Mail,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/ui/empty-state";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SocialLinks } from "@/components/shared/social-links";
import {
  getProfile,
  getPoliticalJourney,
  getPublicWork,
  getGalleryItems,
} from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
  description:
    "Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
};

export default async function HomePage() {
  const [profile, journeyItems, publicWorkItems, galleryItems] =
    await Promise.all([
      getProfile(),
      getPoliticalJourney(),
      getPublicWork(),
      getGalleryItems(),
    ]);

  return (
    <>
      {/* 1. HERO SECTION (Editorial Split Layout) */}
      <section className="relative overflow-hidden border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-14 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="subtle" className="text-xs uppercase tracking-wider py-1 px-3">
                  Official Public Profile
                </Badge>
                <span className="text-xs text-[var(--color-muted-text)] font-medium">
                  State of Bihar
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)] leading-tight">
                  {profile.name}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[var(--color-primary)]">
                  {profile.designation}
                </p>
                <p className="text-sm font-semibold tracking-wide text-[var(--color-muted-text)] uppercase">
                  {profile.party}
                </p>
              </div>

              <p className="text-base text-[var(--color-dark-text)]/80 leading-relaxed max-w-2xl">
                {profile.biography ||
                  "Welcome to the official personal communication and public documentation portal of Ratnesh Patel. Dedicated to transparent public service, constituent coordination, and organizational responsibilities across Bihar."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/contact">
                  <Button size="lg" variant="default" className="font-medium">
                    <span>Contact Office</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="font-medium">
                    Profile Overview
                  </Button>
                </Link>
                <Link href="/political-journey">
                  <Button size="lg" variant="secondary" className="font-medium">
                    Political Journey
                  </Button>
                </Link>
              </div>

              {/* Factual Trust Indicators */}
              <div className="pt-6 border-t border-[var(--color-border-gray)] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-2 text-[var(--color-dark-text)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  <span>Verified Public Portal</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-dark-text)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  <span>State Leadership, Bihar</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-dark-text)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  <span>Constituent Office</span>
                </div>
              </div>
            </div>

            {/* Right Column: Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-4 shadow-xs">
                  {profile.profile_image_url ? (
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-md">
                      <Image
                        src={profile.profile_image_url}
                        alt={`Official portrait of ${profile.name}`}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      category="profile"
                      aspectRatio="4:3"
                      title="Official Portrait of Ratnesh Patel"
                      description="Slot configured for verified high-resolution photography."
                      className="w-full"
                    />
                  )}
                  <div className="mt-4 pt-3 border-t border-[var(--color-border-gray)] flex items-center justify-between text-xs text-[var(--color-muted-text)]">
                    <span className="font-semibold text-[var(--color-dark-text)]">
                      {profile.name}
                    </span>
                    <span>Senior State Vice President</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ABOUT PREVIEW (Image + Text Layout) */}
      <Section variant="surface">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-3 shadow-xs">
                <ImagePlaceholder
                  category="profile"
                  aspectRatio="3:4"
                  title="Ratnesh Patel"
                  description="Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Leadership Profile
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-dark-text)]">
                About Ratnesh Patel
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-dark-text)]/90 leading-relaxed">
                Ratnesh Patel serves as the <strong>Senior State Vice President, Bihar</strong> in the <strong>Hindustani Awam Morcha (Secular)</strong>. In this role, he coordinates state-level organizational activities, public delegations, and constituent representations across Bihar.
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed">
                His public service emphasizes grassroots constituent communication, transparent governance advocacy, and community outreach under the party leadership.
              </p>
              <div className="pt-2">
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    <span>Read Full Profile Information</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. POLITICAL JOURNEY PREVIEW (Vertical Timeline Layout) */}
      <Section variant="default">
        <Container size="wide">
          <SectionHeading
            badge="Chronology"
            title="Political Journey Milestones"
            description="Documented milestones of organizational service and public responsibilities across Bihar."
          />

          {journeyItems.length > 0 ? (
            <div className="max-w-3xl mx-auto space-y-6">
              {journeyItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-[var(--color-border-gray)]"
                >
                  <div className="absolute left-1.5 top-2 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-primary)] bg-white" />
                  <Card className="hover:border-[var(--color-primary)] transition-colors">
                    <CardHeader className="p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-[var(--color-primary)] flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{item.year}</span>
                        </span>
                        {item.location && (
                          <span className="text-[11px] text-[var(--color-muted-text)]">
                            {item.location}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-base font-semibold">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {item.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-5 sm:pt-0">
                      <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <Card className="text-center p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center mx-auto">
                  <Calendar className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-sm text-[var(--color-dark-text)]">
                  Active Designation: Senior State Vice President, Bihar
                </h4>
                <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
                  Additional chronological journey milestones will be displayed here as official party records are synchronized with the database.
                </p>
              </Card>
            </div>
          )}

          <div className="text-center mt-8">
            <Link href="/political-journey">
              <Button variant="default" size="sm">
                <span>View Full Journey Timeline</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. PUBLIC WORK (Cards Layout) */}
      <Section variant="surface">
        <Container size="wide">
          <SectionHeading
            badge="Public Service"
            title="Public Work &amp; Civic Initiatives"
            description="Constituent representation, civic outreach programs, and community coordination in Bihar."
          />

          {publicWorkItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicWorkItems.slice(0, 3).map((work) => (
                <Card key={work.id} className="flex flex-col justify-between hover:border-[var(--color-primary)] transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-[11px]">
                        {work.category}
                      </Badge>
                      {work.date && (
                        <span className="text-[11px] text-[var(--color-muted-text)]">
                          {work.date}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-base">{work.title}</CardTitle>
                    <CardDescription className="text-xs line-clamp-3">
                      {work.short_description || work.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-xs font-semibold text-[var(--color-primary)] inline-flex items-center gap-1">
                      <span>View details</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Briefcase}
              title="No Public Work Items Published Yet"
              description="Documented constituent activities and civic projects will appear here as they are published via the portal administration."
              action={{
                label: "Visit Public Work Section",
                href: "/public-work",
              }}
            />
          )}

          {publicWorkItems.length > 0 && (
            <div className="text-center mt-8">
              <Link href="/public-work">
                <Button variant="outline" size="sm">
                  <span>Explore All Public Work</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          )}
        </Container>
      </Section>

      {/* 5. GALLERY PREVIEW (Editorial Grid) */}
      <Section variant="default">
        <Container size="wide">
          <SectionHeading
            badge="Photographic Archive"
            title="Media &amp; Gallery"
            description="Official photographic documentation from public meetings, conventions, and state sessions."
          />

          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryItems.slice(0, 4).map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-lg border border-[var(--color-border-gray)] bg-white overflow-hidden shadow-xs hover:border-[var(--color-primary)] transition-all"
                >
                  <div className="relative aspect-4/3 bg-[var(--color-light-gray)]">
                    {photo.image_url ? (
                      <Image
                        src={photo.thumbnail_url || photo.image_url}
                        alt={photo.alt_text || photo.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[var(--color-muted-text)]">
                        <ImageIcon className="h-8 w-8 opacity-40" />
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-xs text-[var(--color-dark-text)] truncate">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "State Executive Committee Conclave",
                "Constituent Outreach & Assembly",
                "District Leadership Delegation",
              ].map((title, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[var(--color-border-gray)] bg-white p-3 shadow-xs"
                >
                  <ImagePlaceholder
                    category="gallery"
                    aspectRatio="16:9"
                    title={title}
                    description="Official photography slot."
                    className="w-full"
                  />
                  <div className="mt-2 text-xs font-medium text-[var(--color-dark-text)] text-center">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button variant="outline" size="sm">
                <span>View Full Photo Archive</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 6. SOCIAL MEDIA CHANNELS (Dedicated Section) */}
      <Section variant="surface">
        <Container size="wide">
          <div className="rounded-xl border border-[var(--color-border-gray)] bg-[var(--color-white)] p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)]">
                  <Share2 className="h-4 w-4" />
                  <span>Verified Public Channels</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-dark-text)]">
                  Connect on Official Social Media
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed">
                  Follow official public statements, organizational notifications, and constituent updates directly on verified social platforms.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <SocialLinks variant="default" size="md" showLabels />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. HAM(S) BRANDED INFORMATION SECTION */}
      <Section variant="default">
        <Container size="wide">
          <div className="rounded-xl border border-[var(--color-primary-border)] bg-[var(--color-primary-subtle)] p-8 sm:p-12 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--color-primary-border)]">
              <div className="flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  HAM
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-dark-text)]">
                    Hindustani Awam Morcha (Secular)
                  </h3>
                  <p className="text-xs text-[var(--color-primary-dark)] font-semibold">
                    State Leadership &bull; Senior State Vice President, Bihar
                  </p>
                </div>
              </div>

              <a
                href="https://ham.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-primary)] text-white text-xs font-semibold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0 shadow-xs"
              >
                <span>Visit Official Party Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[var(--color-dark-text)] leading-relaxed">
              <p>
                Ratnesh Patel represents the party across Bihar as Senior State Vice President. His work connects grassroots constituent priorities with state-level organizational advocacy.
              </p>
              <div className="rounded-md bg-white p-4 border border-[var(--color-primary-border)] space-y-1 text-xs">
                <strong className="text-[var(--color-primary-dark)] font-semibold block">
                  Important Distinction:
                </strong>
                <p className="text-[var(--color-muted-text)]">
                  This website is the official personal portal of Ratnesh Patel. Central party resolutions and national announcements are published at{" "}
                  <a
                    href="https://ham.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] font-semibold underline"
                  >
                    ham.org.in
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/ham">
                <Button size="sm" variant="outline">
                  <span>Learn More About Party Role</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. CONTACT CTA */}
      <Section variant="surface">
        <Container size="narrow">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <div className="h-12 w-12 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center mx-auto">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark-text)]">
              Submit a Constituent Representation
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed">
              Have a public matter, constituent concern, or administrative grievance to bring forward? Reach out through the official office correspondence portal.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button size="lg" variant="default" className="font-medium">
                  <span>Open Contact Office Form</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
