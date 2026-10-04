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
  Building2,
  Sparkles,
  PhoneCall,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/shared/social-links";
import { PoliticalTimeline } from "@/components/sections/political-timeline";
import { ProfileImageRotator } from "@/components/sections/profile-image-rotator";
import { GalleryMarqueeSection } from "@/components/sections/gallery-marquee-section";
import { profile } from "@/data/profile";
import { politicalJourneyItems } from "@/data/political-journey";

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
        <div className="absolute top-0 right-1/4 - z-10 h-96 w-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 - z-10 h-80 w-80 rounded-full bg-amber-50/50 blur-2xl pointer-events-none" />

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
                  <strong>Ratnesh Patel</strong> brings over 30 years of dedicated political leadership -  from grassroots organizational building in Muzaffarpur to serving as State Vice President of Hindustani Awam Morcha (Secular) and NDA Election Incharge for the 2024 Lok Sabha Elections.
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
                      - हिंदुस्तानी अवाम मोर्चा (सेक्युलर) संकल्प
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold shadow-sm hover:shadow-md px-6 py-3 rounded-xl gap-2 transition-all cursor-pointer"
                  >
                    <span>जन संवाद / Connect Desk</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="#journey">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-semibold px-5 py-3 rounded-xl gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Political History</span>
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Profile Image Rotator (Auto-cycles through Ratnesh Patel's profile photos) */}
            <div className="lg:col-span-5 flex justify-center">
              <ProfileImageRotator
                intervalMs={10000}
                initialIndex={0}
                randomize={false}
                footerVariant="hero"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. LEADERSHIP IMPACT STATS BAR (Red Background) */}
      <section className="bg-[var(--color-primary)] border-y border-red-700/80 py-8 sm:py-10 text-white shadow-inner">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20 backdrop-blur-xs shadow-xs">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">30+ Years</div>
                <div className="text-xs text-red-100 font-medium">Public Career (1995&ndash;Present)</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20 backdrop-blur-xs shadow-xs">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">28 Districts</div>
                <div className="text-xs text-red-100 font-medium">Tirhut Division &amp; Bihar</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20 backdrop-blur-xs shadow-xs">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">HAM(S)</div>
                <div className="text-xs text-red-100 font-medium">State Vice President, Bihar</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20 backdrop-blur-xs shadow-xs">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">जन संवाद</div>
                <div className="text-xs text-red-100 font-medium">Open Constituent Redressal</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ABOUT SECTION (Integrated Editorial Profile with Auto-Rotating Profile Photos) */}
      <section id="about" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Rotating Profile Images & Credentials */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ProfileImageRotator
                  intervalMs={6000}
                  initialIndex={1}
                  randomize={false}
                  footerVariant="about"
                />
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

      {/* 5. PARTY IDEOLOGY & LEADERSHIP (HAM Secular Official Showcase with Prominent Party Logo) */}
      <section id="ham" className="scroll-mt-20 bg-slate-900 border-b border-slate-800 py-16 sm:py-20 text-white">
        <Container size="wide">
          <div className="rounded-2xl bg-gradient-to-r from-red-950 via-red-900 to-slate-900 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden relative border border-red-900/50">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Narrative & Leadership Info */}
              <div className="lg:col-span-8 space-y-6">
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
                    <Button size="lg" className="bg-white hover:bg-slate-100 text-red-950 font-bold shadow-md rounded-xl cursor-pointer">
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

              {/* Right Column: Prominently Showcase HAM Party Logo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 border border-white/15 shadow-xl flex flex-col items-center text-center space-y-4 max-w-xs w-full">
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 drop-shadow-lg">
                    <Image
                      src="/HAMLogo.png"
                      alt="Hindustani Awam Morcha (Secular) Official Logo"
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                      Hindustani Awam Morcha
                    </h3>
                    <p className="text-xs text-red-200 font-semibold tracking-wider uppercase mt-0.5">
                      Secular &bull; Bihar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. PHOTO GALLERY & PUBLIC MOMENTS (Continuous Smooth Slider) */}
      <GalleryMarqueeSection />

      {/* 7. DIRECT CONSTITUENT CONNECT (जन संवाद केंद्र - Executive Red Banner Card) */}
      <section id="contact" className="scroll-mt-20 py-12 sm:py-16 bg-slate-50/70 border-t border-slate-200/80">
        <Container size="wide">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#D0141D] via-[#B8111A] to-[#A30D15] border border-red-500/40 p-7 sm:p-9 lg:p-11 shadow-xl shadow-red-950/20 max-w-6xl mx-auto overflow-hidden">
            {/* Tone-on-tone crimson background curves */}
            <svg
              className="absolute bottom-0 left-0 right-0 w-full h-20 sm:h-28 pointer-events-none"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,45 C200,95 400,10 600,60 C800,105 1000,30 1200,50 L1200,120 L0,120 Z" fill="#88070D" fillOpacity="0.45" />
              <path d="M0,75 C320,125 640,40 960,85 C1080,100 1140,70 1200,80 L1200,120 L0,120 Z" fill="#6E050A" fillOpacity="0.35" />
            </svg>

            {/* Main Content Layout */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-10">
              {/* Left Side: Party Logo + Headings & Text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 flex-1">
                {/* Official Party Emblem with clean white circular border */}
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 shrink-0 rounded-full bg-white p-1 ring-4 ring-white/90 shadow-xl drop-shadow-md transition-transform hover:scale-105 duration-300">
                  <Image
                    src="/HAMLogo.png"
                    alt="हम (से.) पार्टी - Hindustani Awam Morcha"
                    fill
                    sizes="112px"
                    priority
                    className="object-contain rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  {/* Frosted Pill Badge matching reference */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/25 shadow-xs">
                    <Users className="h-3.5 w-3.5 text-white" />
                    <span>जन संवाद केंद्र &bull; Direct Outreach</span>
                  </div>

                  {/* Hindi & English Headings matching reference */}
                  <div className="space-y-0.5">
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
                      जन संवाद केंद्र
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                      Direct Connect
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-lg">
                    Citizens, party workers, and community representatives across Bihar are welcome to submit representations, district development proposals, or public concerns directly.
                  </p>
                </div>
              </div>

              {/* Vertical Divider (Desktop) */}
              <div className="hidden lg:block h-28 w-px bg-white/25 shrink-0 self-center" />

              {/* Right Side: Submit Button + Official Social Links Below */}
              <div className="flex flex-col items-center sm:items-start lg:items-center gap-4 shrink-0 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-white hover:bg-slate-50 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-white/60 flex items-center justify-center gap-2.5"
                  >
                    <Send className="h-4 w-4 text-[var(--color-primary)] fill-[var(--color-primary)] rotate-45 -translate-y-0.5 shrink-0" />
                    <span>Submit Representation / आवेदन भेजें</span>
                    <ArrowRight className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                  </Button>
                </Link>

                {/* Divider Line with 'OFFICIAL SOCIALS' in the center */}
                <div className="flex items-center justify-center gap-3 w-full max-w-xs pt-1">
                  <div className="h-px flex-1 bg-white/25" />
                  <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase whitespace-nowrap">
                    OFFICIAL SOCIALS
                  </span>
                  <div className="h-px flex-1 bg-white/25" />
                </div>

                {/* Official Brand Logos in their authentic colors only */}
                <div className="flex items-center justify-center gap-3.5 sm:gap-4">
                  {/* Facebook: Official Blue */}
                  <a
                    href="https://www.facebook.com/RatneshPatelHAM/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ratnesh Patel on Facebook"
                    aria-label="Ratnesh Patel on Facebook"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-transform cursor-pointer ring-2 ring-white/20"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Instagram: Official Instagram Gradient */}
                  <a
                    href="https://www.instagram.com/ratneshpatelham"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ratnesh Patel on Instagram"
                    aria-label="Ratnesh Patel on Instagram"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-transform cursor-pointer ring-2 ring-white/20"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* X (Twitter): Official Black */}
                  <a
                    href="https://x.com/ratneshpatelham"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ratnesh Patel on X (Twitter)"
                    aria-label="Ratnesh Patel on X"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-transform cursor-pointer ring-1 ring-white/40"
                  >
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
