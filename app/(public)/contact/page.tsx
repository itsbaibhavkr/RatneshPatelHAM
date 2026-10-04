import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, MapPin, Mail, Phone, Clock, MessageSquareQuote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";
import { SocialLinks } from "@/components/shared/social-links";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact Office | Ratnesh Patel",
  description:
    "Official constituent communication desk for submitting representations, grievances, and public inquiries to Ratnesh Patel, Senior State Vice President, Bihar.",
  openGraph: {
    title: "Contact Office | Ratnesh Patel",
    description:
      "Official constituent communication desk for submitting representations, grievances, and public inquiries to Ratnesh Patel, Senior State Vice President, Bihar.",
  },
};

export default function ContactPage() {
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
              <span className="text-slate-900 font-semibold">जन संवाद / Contact</span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  जन संवाद केंद्र &bull; Constituent Outreach
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Connect with the Office of Ratnesh Patel
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Citizens, party workers, and community delegations from across all 28 districts of Bihar are welcome to submit representations, district development proposals, or public concerns directly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Form & Information Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    जन संवाद / Representation Form
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide your contact information and representation subject. The office reviews all submissions and coordinates necessary follow-ups.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* Information Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Leader Profile Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[var(--color-primary)] shadow-xs bg-slate-100 shrink-0">
                    <Image
                      src="/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp"
                      alt="Ratnesh Patel"
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 leading-tight">
                      Ratnesh Patel
                    </h3>
                    <p className="text-xs font-bold text-[var(--color-primary)] mt-0.5">
                      Senior State Vice President, Bihar
                    </p>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                      Hindustani Awam Morcha (Secular)
                    </p>
                  </div>
                </div>

                {/* Office Info Details */}
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 text-slate-700">
                    <MapPin className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Office Location</strong>
                      <span>Patna, Bihar &bull; Statewide Outreach Across 28 Districts</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-slate-700">
                    <Mail className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Direct Email</strong>
                      <span>contact@ratneshpatel.in</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-slate-700">
                    <Clock className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Public Meeting Hours</strong>
                      <span>Constituent delegations met regularly during scheduled district and state office tours.</span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-3">
                    Connect on Verified Social Media
                  </span>
                  <SocialLinks variant="default" size="md" showLabels />
                </div>
              </div>

              {/* Guiding Quote Card */}
              <div className="rounded-2xl border border-red-200/90 bg-red-50/60 p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                  <MessageSquareQuote className="h-4 w-4" />
                  <span>हम (से.) जनसेवा संकल्प</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                  &ldquo;जनता के अधिकारों, सामाजिक न्याय एवं हर वर्ग के सम्मान के लिए हमारी प्रतिबद्धता अटूट है।&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
