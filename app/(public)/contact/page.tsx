import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  ShieldCheck,
  Building2,
  Navigation,
  ArrowRight,
  MessageSquareQuote,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SOCIAL_PROFILES } from "@/components/shared/social-links";

export const metadata: Metadata = {
  title: "Connect with Office | Ratnesh Patel",
  description:
    "Official contact details of Ratnesh Patel, Senior State Vice President, Bihar, and Hindustani Awam Morcha (Secular) party headquarters.",
  openGraph: {
    title: "Connect with Office | Ratnesh Patel",
    description:
      "Official contact details of Ratnesh Patel, Senior State Vice President, Bihar, and Hindustani Awam Morcha (Secular) party headquarters.",
  },
};

export default function ContactPage() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Surya+Bhawan,+Anant+Kamatual,+Kudhani,+Muzaffarpur,+Bihar+844120";

  return (
    <div className="space-y-0">
      {/* 1. Clean Subhero Header (Consistent with Gallery & Ham subheros) */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-stone-100/30 py-10 sm:py-14 text-center">
        <Container size="narrow">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                जन संवाद केंद्र &bull; Official Contact Desk
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Connect with Office
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Direct communication desk for Ratnesh Patel&apos;s personal leadership office and the official headquarters of Hindustani Awam Morcha (Secular).
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Contact Cards Section */}
      <Section variant="default" className="py-10 sm:py-14 lg:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* ========================================================
                CARD 1: PERSONAL CONTACT DETAILS (Ratnesh Patel)
                ======================================================== */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6 sm:space-y-7">
                {/* Header with Portrait & Designation */}
                <div className="border-b border-slate-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[11px] font-bold text-[var(--color-primary)] mb-3">
                    <Sparkles className="h-3 w-3" />
                    <span>Personal Contact Details &bull; व्यक्तिगत संपर्क</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-primary)] shadow-sm bg-slate-100">
                      <Image
                        src="/images/ratnesh-patel/profile/ratnesh-patel.webp"
                        alt="Ratnesh Patel"
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                        Ratnesh Patel
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-[var(--color-primary)] mt-0.5">
                        Senior State Vice President, Bihar
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                        Hindustani Awam Morcha (Secular)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Items */}
                <div className="space-y-5">
                  {/* Mobile Number */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[var(--color-primary)]">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                            Mobile Number (Call / WhatsApp)
                          </span>
                          <a
                            href="tel:9504211461"
                            className="text-base sm:text-lg font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors inline-block mt-0.5"
                          >
                            +91 95042 11461
                          </a>
                        </div>
                      </div>
                      <a
                        href="tel:9504211461"
                        className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto rounded-lg bg-[var(--color-primary)] px-3.5 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[var(--color-primary)]">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                            Personal &amp; Office Email
                          </span>
                          <a
                            href="mailto:ratneshpatelham@gmail.com"
                            className="text-sm sm:text-base font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors break-all inline-block mt-0.5"
                          >
                            ratneshpatelham@gmail.com
                          </a>
                        </div>
                      </div>
                      <a
                        href="mailto:ratneshpatelham@gmail.com"
                        className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto shrink-0 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-colors cursor-pointer"
                      >
                        <Mail className="h-3.5 w-3.5 text-slate-500" />
                        <span>Send Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Home Address */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[var(--color-primary)] mt-0.5">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                            Home Address &amp; Camp Office
                          </span>
                          <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            Surya Bhawan, Anant Kamatual
                          </p>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium">
                            Kudhani, Muzaffarpur, Bihar &ndash; 844120
                          </p>
                        </div>
                      </div>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto shrink-0 rounded-lg border border-red-200 bg-red-50/80 px-3.5 py-2 text-xs font-bold text-[var(--color-primary)] hover:bg-red-100 transition-colors cursor-pointer"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>Google Maps</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Links Section */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-3">
                    Connect on Verified Social Media
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {SOCIAL_PROFILES.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.platform}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${item.brandClass}`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{item.label}</span>
                          <ExternalLink className="h-3 w-3 opacity-80" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Verified Direct Leadership Desk &bull; Tirhut Division &amp; Bihar</span>
              </div>
            </div>

            {/* ========================================================
                CARD 2: PARTY OFFICIAL CONTACT DETAILS (HAM Secular)
                ======================================================== */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6 sm:space-y-7">
                {/* Header with Party Logo in PNG */}
                <div className="border-b border-slate-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-700 mb-3">
                    <Building2 className="h-3 w-3 text-[var(--color-primary)]" />
                    <span>Party Official Contact Details &bull; पार्टी मुख्यालय</span>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Official Party Logo in PNG */}
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 flex items-center justify-center p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <Image
                        src="/HAMLogo.png"
                        alt="Hindustani Awam Morcha (Secular) Official Logo"
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                        Hindustani Awam Morcha (Secular)
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-[var(--color-primary)] mt-0.5">
                        Central Headquarters &bull; HAM(S)
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                        Recognized State Political Party &bull; Bihar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Items */}
                <div className="space-y-5">
                  {/* Official Website */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[var(--color-primary)]">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                            Official Party Website
                          </span>
                          <a
                            href="https://ham.org.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors break-all inline-block mt-0.5"
                          >
                            https://ham.org.in/
                          </a>
                        </div>
                      </div>
                      <a
                        href="https://ham.org.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto shrink-0 rounded-lg bg-[var(--color-primary)] px-3.5 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>Visit Website</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Official Party Email */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[var(--color-primary)]">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                            Official Party Email
                          </span>
                          <a
                            href="mailto:hampartyofficial@gmail.com"
                            className="text-sm sm:text-base font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors break-all inline-block mt-0.5"
                          >
                            hampartyofficial@gmail.com
                          </a>
                        </div>
                      </div>
                      <a
                        href="mailto:hampartyofficial@gmail.com"
                        className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto shrink-0 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-colors cursor-pointer"
                      >
                        <Mail className="h-3.5 w-3.5 text-slate-500" />
                        <span>Write to Party</span>
                      </a>
                    </div>
                  </div>

                  {/* Party State Headquarters Location */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[var(--color-primary)] mt-0.5">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                          Party Central &amp; State Headquarters
                        </span>
                        <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          Hindustani Awam Morcha (Secular)
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">
                          Patna, Bihar, India &bull; National Democratic Alliance (NDA)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Party Leadership & Ideology Highlight */}
                <div className="rounded-xl border border-red-200/90 bg-red-50/60 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                      <MessageSquareQuote className="h-4 w-4" />
                      <span>पार्टी मार्गदर्शक व नेतृत्व</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-red-200 shadow-2xs">
                      चुनाव चिन्ह: कड़ाही
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under the patron guidance of <strong>Shri Jitan Ram Manjhi Ji</strong> (Founder HAM(S) &amp; Union Minister, MSME) and leadership of <strong>Dr. Santosh Kumar Suman Ji</strong> (National President &amp; Cabinet Minister, Bihar).
                  </p>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Know more about the party</span>
                <Link
                  href="/ham"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors group cursor-pointer"
                >
                  <span>Party Profile &amp; History</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* 3. Constituent Access & Redressal Information Banner */}
          <div className="mt-10 sm:mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-[var(--color-primary)] shadow-2xs">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Jan Seva &amp; Constituent Redressal Commitment &bull; जन सेवा संकल्प
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                  Citizens, party workers, and delegations from across all 28 districts of Bihar are welcome to submit representations or schedule a meeting with Shri Ratnesh Patel during regular district tours and office sessions. Please reach out via phone or email for advance coordination.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
