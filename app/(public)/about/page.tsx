import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, MapPin, Award, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About Ratnesh Patel | Senior State Vice President, Bihar",
  description:
    "Leadership biography, vision, and organizational purview of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  openGraph: {
    title: "About Ratnesh Patel | Senior State Vice President, Bihar",
    description:
      "Leadership biography, vision, and organizational purview of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Editorial Profile Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/70 py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">About</span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  Leadership Profile &bull; Hindustani Awam Morcha (Secular)
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Ratnesh Patel
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                {profile.designation}
              </p>
              <p className="text-sm font-semibold tracking-wider text-slate-600 uppercase">
                {profile.party}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Narrative Editorial Section */}
      <Section variant="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Official Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-2xl border-2 border-white bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={profile.profile_image || "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp"}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 px-2 space-y-1">
                  <div className="font-extrabold text-slate-900 text-base">
                    {profile.name}
                  </div>
                  <div className="text-[var(--color-primary)] font-semibold text-xs">
                    {profile.designation}
                  </div>
                  <div className="text-slate-500 text-xs font-medium">
                    {profile.party}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Profile & Organizational Context */}
            <div className="lg:col-span-7 space-y-8 text-slate-700 leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-b border-slate-200 pb-3">
                  Dedicated to Bihar&apos;s Grassroots Progress
                </h2>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                  <strong>Ratnesh Patel</strong> serves as the <strong>Senior State Vice President, Bihar</strong> in the <strong>Hindustani Awam Morcha (Secular)</strong>. Throughout his public career, he has been deeply rooted in the soil of Bihar, dedicating his efforts to the social upliftment of marginalized sections, farmer advocacy, and building strong organizational cohesion across all 38 districts.
                </p>

                <p className="leading-relaxed text-sm sm:text-base">
                  Guided by the social justice philosophy of HAM(S) Founder <strong>Shri Jitan Ram Manjhi</strong> and National President <strong>Dr. Santosh Kumar Suman</strong>, Ratnesh Patel regularly convenes grassroots party workers, resolves constituent petitions, and represents community delegations before state authorities.
                </p>
              </div>

              {/* Pillars of Leadership Service */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-5">
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Key Leadership Responsibilities</span>
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">State Committee Leadership:</strong> Guiding strategic organizational planning, district committee meetings, and policy resolutions across Bihar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Direct Constituent Redressal:</strong> Personally hearing civic grievances, administrative issues, and community concerns through an active open-door policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Farmer &amp; Rural Advocacy:</strong> Championing regular canal irrigation, timely crop insurance, fertilizer availability, and rural economic welfare.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Youth Mobilization:</strong> Encouraging educational advancement, vocational skills training, and political participation for Bihar&apos;s youth.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <h3 className="font-bold text-base text-slate-900">
                  Connect &amp; Engage
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Have a community matter, developmental proposal, or district representation? Reach out directly through the official communication desk.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/contact">
                    <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-xl gap-2 shadow-xs">
                      <span>जन संवाद / Contact Desk</span>
                      <Mail className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/political-journey">
                    <Button variant="outline" className="border-slate-300 font-semibold rounded-xl gap-2">
                      <span>Explore Political Journey</span>
                      <ArrowRight className="h-4 w-4" />
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
