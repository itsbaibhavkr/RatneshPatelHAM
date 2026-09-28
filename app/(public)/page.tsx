import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  Briefcase,
  MapPin,
  Share2,
  Users,
  Wheat,
  GraduationCap,
  Scale,
  ShieldCheck,
  Building2,
  Sparkles,
  PhoneCall,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/shared/social-links";
import { profile } from "@/data/profile";
import { politicalJourneyItems } from "@/data/political-journey";
import { publicWorkItems } from "@/data/public-work";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
  description:
    "Official leadership website of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular). Dedicated to grassroots service, farmer welfare, and social justice.",
  openGraph: {
    title: "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
    description:
      "Official leadership website of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (High-Impact Modern Leadership Hero) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-stone-100/40 border-b border-slate-200/80 pt-10 pb-16 sm:py-20 lg:py-24">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-amber-50/50 blur-2xl pointer-events-none" />

        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Official Status Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/80 px-3.5 py-1.5 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)] tracking-wide">
                  वरिष्ठ प्रदेश उपाध्यक्ष, बिहार &bull; HAM (Secular)
                </span>
              </div>

              {/* Master Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
                  जनसेवा, सामाजिक न्याय एवं{" "}
                  <span className="text-[var(--color-primary)] block sm:inline">
                    बिहार के समग्र विकास
                  </span>{" "}
                  को समर्पित
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl pt-1">
                  <strong>Ratnesh Patel</strong> is dedicated to grassroots empowerment, farmer prosperity, youth welfare, and strengthening democratic representation across all 38 districts of Bihar under the leadership of Hindustani Awam Morcha (Secular).
                </p>
              </div>

              {/* Authentic Leadership Slogan Banner */}
              <div className="rounded-xl border border-red-200/80 bg-white/90 p-4 shadow-2xs max-w-xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 italic">
                      &ldquo;हम का एक ही लक्ष्य एवं एक ही सपना, स्वस्थ एवं विकसित बिहार हो अपना !!&rdquo;
                    </p>
                    <span className="text-xs text-slate-500 font-medium">
                      — हिंदुस्तानी अवाम मोर्चा (सेक्युलर) संकल्प
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold shadow-sm hover:shadow-md px-6 py-3 rounded-xl gap-2 transition-all"
                  >
                    <span>जन संवाद / Connect Desk</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/political-journey">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl transition-all"
                  >
                    <span>Political Journey</span>
                  </Button>
                </Link>
                <Link href="/about" className="text-xs font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors underline-offset-4 hover:underline ml-1">
                  View Full Profile &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Portrait Presentation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border frame */}
                <div className="relative rounded-2xl border-2 border-white bg-white p-3 shadow-xl overflow-hidden ring-1 ring-slate-200">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src="/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp"
                      alt="Ratnesh Patel - Senior State Vice President, Bihar"
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, 400px"
                      className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Identification Card at Bottom of Frame */}
                  <div className="mt-3.5 px-2 pb-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-slate-900 leading-tight">
                        {profile.name}
                      </h2>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded">
                        <ShieldCheck className="h-3 w-3" />
                        <span>State Leadership</span>
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[var(--color-primary-dark)]">
                      {profile.designation}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Hindustani Awam Morcha (Secular), Bihar
                    </p>
                  </div>
                </div>

                {/* Floating Grassroots Badge */}
                <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-slate-200 shadow-lg rounded-xl p-3 items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[var(--color-primary)] font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">38 Districts</div>
                    <div className="text-[11px] text-slate-500">Grassroots Cadre Outreach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. LEADERSHIP IMPACT HIGHLIGHTS (Clean Stat Bar) */}
      <section className="border-b border-slate-200 bg-white py-8 sm:py-10">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">15+ Years</div>
                <div className="text-xs text-slate-500 font-medium">Public &amp; Social Service</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">38 Districts</div>
                <div className="text-xs text-slate-500 font-medium">Statewide Bihar Reach</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">HAM(S)</div>
                <div className="text-xs text-slate-500 font-medium">Senior State Leadership</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">जन संवाद</div>
                <div className="text-xs text-slate-500 font-medium">Open Constituent Redressal</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE LEADERSHIP PILLARS (सेवा और संकल्प - Authentic Political Focus) */}
      <Section variant="surface">
        <Container size="wide">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <Badge variant="subtle" className="text-xs font-bold uppercase tracking-wider">
              सेवा एवं संकल्प &bull; Core Focus
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Vision &amp; Priorities for Bihar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Guided by the progressive ideals of Hindustani Awam Morcha (Secular), Ratnesh Patel actively champions the causes of everyday citizens across four foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  सामाजिक न्याय एवं वंचित उत्थान
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Empowering Dalit, Mahadalit, and backward communities through equitable access to welfare schemes, education, and social dignity.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-[var(--color-primary)]">
                Social Equity &rarr;
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Wheat className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  किसान कल्याण एवं सिंचाई सुविधा
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fighting for regular canal irrigation, fair MSP realizations, prompt flood/drought compensation, and rural agricultural infrastructure.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-[var(--color-primary)]">
                Rural Prosperity &rarr;
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  युवा रोज़गार एवं कौशल संवर्धन
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Advocating for transparent recruitment exams, career counseling, technical skills training, and local industrial job opportunities for youth.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-[var(--color-primary)]">
                Youth Empowerment &rarr;
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  पारदर्शी शासन एवं जनसुनवाई
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Providing a reliable bridge between citizens and administrative bodies to resolve civic grievances, land records, and welfare delays.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-[var(--color-primary)]">
                Public Redressal &rarr;
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. PARTY IDEOLOGY & LEADERSHIP (HAM Secular Authentic Mission) */}
      <section className="bg-white border-y border-slate-200 py-14 sm:py-20">
        <Container size="wide">
          <div className="rounded-2xl bg-gradient-to-r from-red-950 via-red-900 to-stone-900 text-white p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
              <Image
                src="/images/ham/logo/ham-logo.svg"
                alt="HAM Logo Watermark"
                width={400}
                height={400}
              />
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-red-200 border border-white/10">
                <span>पार्टी विचारधारा एवं नेतृत्व</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Hindustani Awam Morcha (Secular)
              </h2>

              <p className="text-sm sm:text-base text-red-100/90 leading-relaxed">
                Founded under the visionary leadership of <strong>Shri Jitan Ram Manjhi</strong> (Former Chief Minister of Bihar) and led by National President <strong>Dr. Santosh Kumar Suman</strong>, HAM(S) is dedicated to social harmony, uplifting the underprivileged, and building an empowered, self-reliant Bihar.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/ham">
                  <Button size="lg" className="bg-white hover:bg-slate-100 text-red-950 font-bold shadow-md rounded-xl">
                    <span>Party Role &amp; Mandate</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </Link>
                <a
                  href="https://ham.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white hover:underline transition-colors py-2 px-3"
                >
                  <span>Visit Central Party Portal (ham.org.in)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. PUBLIC INITIATIVES & ENGAGEMENT (Real Public Works) */}
      <Section variant="surface">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs font-bold uppercase tracking-wider">
                जनहित कार्य &bull; Initiatives
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Public Initiatives &amp; Civic Engagements
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Documented representations, district conventions, and welfare advocacy drives led by Ratnesh Patel.
              </p>
            </div>
            <Link href="/public-work" className="shrink-0">
              <Button variant="outline" size="sm" className="font-semibold gap-1.5 rounded-lg border-slate-300">
                <span>View All Initiatives</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicWorkItems.slice(0, 3).map((work) => (
              <div
                key={work.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="subtle" className="text-[11px] font-semibold">
                      {work.category}
                    </Badge>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {work.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {work.short_description || work.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[var(--color-primary)]" />
                    <span>{work.location}</span>
                  </span>
                  <Link
                    href="/public-work"
                    className="font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. PHOTO GALLERY & LEADERSHIP MOMENTS */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs font-bold uppercase tracking-wider">
                तस्वीरें एवं मीडिया &bull; Moments
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Media &amp; Public Moments
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Photographic moments from party conventions, public delegations, and state leadership events.
              </p>
            </div>
            <Link href="/gallery" className="shrink-0">
              <Button variant="outline" size="sm" className="font-semibold gap-1.5 rounded-lg border-slate-300">
                <span>View Full Gallery</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 3).map((photo) => (
              <div
                key={photo.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.alt || photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {photo.title}
                  </h3>
                  {photo.caption && (
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. DIRECT CONSTITUENT CONNECT (जन संवाद केंद्र) */}
      <Section variant="surface">
        <Container size="narrow">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm text-center space-y-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[var(--color-primary)] mx-auto shadow-2xs">
              <PhoneCall className="h-7 w-7" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                जन संवाद केंद्र / Direct Connect
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Citizens, party workers, and community representatives across Bihar are welcome to submit representations, district development proposals, or public concerns directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold shadow-sm hover:shadow-md px-6 py-3 rounded-xl gap-2 transition-all"
                >
                  <span>Submit Representation / आवेदन भेजें</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Connect on Social Channels:
              </span>
              <SocialLinks variant="default" size="sm" showLabels />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
