import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Wheat,
  GraduationCap,
  Scale,
  ShieldCheck,
  Building2,
  Sparkles,
  PhoneCall,
  ExternalLink,
  Award,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/shared/social-links";
import { PoliticalTimeline } from "@/components/sections/political-timeline";
import { profile } from "@/data/profile";
import { politicalJourneyItems } from "@/data/political-journey";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Ratnesh Patel | Senior State Vice President, Bihar | HAM (Secular)",
  description:
    "Official leadership website of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular). 30+ years of grassroots service, farmer welfare, and social justice.",
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
                  <strong>Ratnesh Patel</strong> brings over 30 years of dedicated political leadership - from grassroots organizational building in Muzaffarpur to serving as State Vice President of Hindustani Awam Morcha (Secular) and NDA Election Incharge for the 2024 Lok Sabha Elections.
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
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold shadow-sm hover:shadow-md px-6 py-3 rounded-xl gap-2 transition-all"
                  >
                    <span>जन संवाद / Connect Desk</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="#about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-semibold px-5 py-3 rounded-xl gap-1.5 transition-all"
                  >
                    <span>About Ratnesh Patel</span>
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </Button>
                </a>
                <a href="#journey">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-semibold px-5 py-3 rounded-xl gap-1.5 transition-all"
                  >
                    <span>Political History</span>
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </Button>
                </a>
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
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">NDA 2024 Election Incharge</div>
                    <div className="text-[11px] text-slate-500">Muzaffarpur &amp; Vaishali</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. LEADERSHIP IMPACT STATS BAR */}
      <section className="border-b border-slate-200 bg-white py-8 sm:py-10">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">30+ Years</div>
                <div className="text-xs text-slate-500 font-medium">Public Career (1995&ndash;Present)</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">38 Districts</div>
                <div className="text-xs text-slate-500 font-medium">Tirhut Division &amp; Bihar</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--color-primary)]">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">HAM(S)</div>
                <div className="text-xs text-slate-500 font-medium">State Vice President, Bihar</div>
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

      {/* 3. ABOUT SECTION (Integrated Editorial Profile & Focus Areas) */}
      <section id="about" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Portrait & Credentials */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-2xl border-2 border-white bg-white p-3 shadow-xl ring-1 ring-slate-200 space-y-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/ratnesh-patel/profile/ratnesh-patel.webp"
                    alt="Ratnesh Patel standing in official attire"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="px-2 pb-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-base text-slate-900">
                      Ratnesh Patel
                    </span>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                      Since 1995
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--color-primary)]">
                    Senior State Vice President, Bihar &bull; HAM(S)
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Rooted in Kudhani, Muzaffarpur with active executive leadership spanning the Tirhut division and the entire state of Bihar.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Biography & 4 Core Priorities */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                    About Ratnesh Patel &bull; व्यक्तित्व एवं नेतृत्व
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Three Decades of Grassroots Leadership &amp; Public Commitment
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong>Ratnesh Patel</strong> is an experienced political leader with a distinguished career in election management, organizational leadership, and grassroots mobilization across Bihar.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Starting his public journey in <strong>1995 with the Samata Party</strong>, he went on to serve as Block Vice President in Kudhani and Youth District Vice President under <strong>Janata Dal (2005&ndash;2015)</strong>. Since the founding of <strong>Hindustani Awam Morcha (Secular)</strong> in 2015, he has served as State Secretary and currently as <strong>State Vice President, Bihar</strong>. In the <strong>2024 Lok Sabha Elections</strong>, he served as the Election Incharge for the NDA across the Muzaffarpur and Vaishali constituencies.
                </p>
              </div>

              {/* 4 Core Pillars of Public Service */}
              <div className="space-y-4 pt-2">
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                  Core Pillars of Public Advocacy &bull; प्रमुख प्राथमिकताएं
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pillar 1 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-2xs hover:border-[var(--color-primary)] transition-all">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-slate-900">
                      <Scale className="h-4 w-4 text-[var(--color-primary)]" />
                      <span>सामाजिक न्याय एवं समरसता</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Social justice, equality, and welfare delivery for Dalit, Mahadalit, and marginalized communities.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-2xs hover:border-[var(--color-primary)] transition-all">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-slate-900">
                      <Wheat className="h-4 w-4 text-[var(--color-primary)]" />
                      <span>किसान कल्याण एवं सिंचाई</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Advocating for regular canal irrigation, fair crop pricing, timely compensation, and rural development.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-2xs hover:border-[var(--color-primary)] transition-all">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-slate-900">
                      <GraduationCap className="h-4 w-4 text-[var(--color-primary)]" />
                      <span>युवा रोज़गार एवं शिक्षा</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Encouraging career opportunities, technical skill development, and youth mobilization across Bihar.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-2xs hover:border-[var(--color-primary)] transition-all">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-slate-900">
                      <Users className="h-4 w-4 text-[var(--color-primary)]" />
                      <span>पारदर्शी जन संवाद</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      An accessible bridge between everyday citizens and administrative officers for rapid grievance redressal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Jump to Journey CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a href="#journey">
                  <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-xl gap-2 shadow-xs">
                    <span>View Political Journey / कार्य काल</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link href="/contact" className="text-xs font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                  Submit a Representation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. POLITICAL JOURNEY / HISTORY SECTION (Professional Left-Right Timeline Tree) */}
      <section id="journey" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <Container size="wide">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                राजनीतिक यात्रा &bull; 1995 to Present
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Political History &amp; Leadership Milestones
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A chronological progression of organizational responsibilities, grassroots leadership, and major election management roles across Bihar over the past three decades.
            </p>
          </div>

          {/* Left-Right Alternating Tree Timeline Component */}
          <PoliticalTimeline items={politicalJourneyItems} />
        </Container>
      </section>

      {/* 5. PARTY IDEOLOGY & LEADERSHIP (HAM Secular Authentic Mission) */}
      <section id="ham" className="scroll-mt-20 bg-slate-900 border-b border-slate-800 py-16 sm:py-20 text-white">
        <Container size="wide">
          <div className="rounded-2xl bg-gradient-to-r from-red-950 via-red-900 to-slate-900 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden relative border border-red-900/50">
            {/* Background watermark */}
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

      {/* 6. PHOTO GALLERY & MOMENTS */}
      <section id="gallery" className="scroll-mt-20 bg-white border-b border-slate-200 py-16 sm:py-20">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  तस्वीरें एवं मीडिया &bull; Moments
                </span>
              </div>
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
      <section id="contact" className="scroll-mt-20 py-16 sm:py-20 bg-slate-50/60">
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
      </section>
    </>
  );
}
