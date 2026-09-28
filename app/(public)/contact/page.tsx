import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";
import { SocialLinks } from "@/components/shared/social-links";

export const metadata: Metadata = {
  title: "Contact Office",
  description:
    "Official constituent communication portal for submitting representations and public inquiries to Ratnesh Patel, Senior State Vice President, Bihar.",
  openGraph: {
    title: "Contact Office | Ratnesh Patel",
    description:
      "Official constituent communication portal for submitting representations and public inquiries to Ratnesh Patel, Senior State Vice President, Bihar.",
  },
};

export default function ContactPage() {
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
              <span className="text-[var(--color-dark-text)] font-medium">Contact</span>
            </div>

            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Constituent Correspondence
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)]">
                Contact the Office of Ratnesh Patel
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
                Citizens, community delegations, and party representatives across Bihar can submit official representations, public grievances, and communications through this secure portal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Form & Information Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-xl border border-[var(--color-border-gray)] bg-[var(--color-white)] p-6 sm:p-8 shadow-xs">
                <div className="border-b border-[var(--color-border-gray)] pb-4 mb-6">
                  <h2 className="text-xl font-bold text-[var(--color-dark-text)]">
                    Official Representation Form
                  </h2>
                  <p className="text-xs text-[var(--color-muted-text)] mt-1">
                    Please provide accurate details so your matter can be categorized and reviewed appropriately by the office.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* Information & Privacy Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Details Card */}
              <div className="rounded-xl border border-[var(--color-border-gray)] bg-[var(--color-white)] p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-[var(--color-border-gray)] pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary)] text-white font-bold text-sm">
                    RP
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--color-dark-text)] leading-tight">
                      Ratnesh Patel
                    </h3>
                    <p className="text-xs font-medium text-[var(--color-primary)]">
                      Senior State Vice President, Bihar
                    </p>
                    <p className="text-[11px] text-[var(--color-muted-text)] uppercase font-semibold">
                      Hindustani Awam Morcha (Secular)
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed">
                  <p>
                    This correspondence desk is dedicated to receiving formal public representations, community development petitions, and constituent coordination requests from all districts of Bihar.
                  </p>
                  <p>
                    Submissions are logged directly into our secure database and accessed solely by the office administration.
                  </p>
                </div>

                {/* Privacy Assurance Box */}
                <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[var(--color-dark-text)]">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
                    <span>Constituent Privacy Assurance</span>
                  </div>
                  <p className="text-[var(--color-muted-text)] leading-relaxed">
                    Personal contact details and representation texts submitted through this form are kept confidential for constituent correspondence. Public users cannot read submitted messages.
                  </p>
                </div>

                {/* Social Profiles */}
                <div className="pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-dark-text)] block mb-2.5">
                    Official Public Channels
                  </span>
                  <SocialLinks variant="default" size="md" showLabels />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
