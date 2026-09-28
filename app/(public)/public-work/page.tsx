import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Calendar, MapPin, Video } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { publicWorkItems } from "@/data/public-work";

export const metadata: Metadata = {
  title: "Public Work & Initiatives",
  description:
    "Constituent representation, civic outreach programs, and community initiatives of Ratnesh Patel across Bihar.",
  openGraph: {
    title: "Public Work & Initiatives | Ratnesh Patel",
    description:
      "Constituent representation, civic outreach programs, and community initiatives of Ratnesh Patel across Bihar.",
  },
};

export default function PublicWorkPage() {
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
              <span className="text-[var(--color-dark-text)] font-medium">Public Work</span>
            </div>

            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Civic Initiatives &amp; Service
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)]">
                Public Work &amp; Engagements
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
                Documenting constituent representations, community outreach programs, and civic service activities undertaken in Bihar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <Section variant="default">
        <Container size="wide">
          {publicWorkItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicWorkItems.map((item) => (
                <Card
                  key={item.id}
                  className="flex flex-col justify-between overflow-hidden hover:border-[var(--color-primary)] transition-all hover:shadow-xs"
                >
                  {item.image && (
                    <div className="relative aspect-video w-full bg-[var(--color-light-gray)] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="subtle" className="text-[11px]">
                        {item.category}
                      </Badge>
                      {item.date && (
                        <span className="text-xs text-[var(--color-muted-text)] flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{item.date}</span>
                        </span>
                      )}
                    </div>

                    <CardTitle className="text-base sm:text-lg font-bold text-[var(--color-dark-text)]">
                      {item.title}
                    </CardTitle>

                    {item.location && (
                      <span className="text-xs text-[var(--color-muted-text)] flex items-center gap-1 pt-1">
                        <MapPin className="h-3 w-3 text-[var(--color-primary)]" />
                        <span>{item.location}</span>
                      </span>
                    )}

                    <CardDescription className="text-xs text-[var(--color-dark-text)]/80 mt-2 line-clamp-3 leading-relaxed">
                      {item.short_description || item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-5 pt-0">
                    <div className="pt-3 border-t border-[var(--color-border-gray)] flex items-center justify-between text-xs text-[var(--color-primary)] font-medium">
                      <span>Constituent Initiative</span>
                      {item.video_url && (
                        <span className="flex items-center gap-1 text-[var(--color-muted-text)]">
                          <Video className="h-3.5 w-3.5" />
                          <span>Video Available</span>
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-6">
              <EmptyState
                icon={Briefcase}
                title="No Public Work Items Published Yet"
                description="Verified constituent outreach records, community representations, and civic initiatives will appear here as they are published by the office administration."
                action={{
                  label: "Submit a Public Representation",
                  href: "/contact",
                }}
              />

              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-6 space-y-2 text-center text-xs text-[var(--color-muted-text)]">
                <span className="font-semibold text-[var(--color-dark-text)] block">
                  Public Representation Inquiries
                </span>
                <p>
                  To submit a civic concern or constituent representation from your district for review by Ratnesh Patel, use the verified contact portal.
                </p>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
