import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";

import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Hindustani Awam Morcha (Secular) | Party Leadership & Vision",
  description:
    "Official overview and leadership of Hindustani Awam Morcha (Secular) in Bihar. Founded by former CM Shri Jitan Ram Manjhi (Union Minister MSME) and led by National President Dr. Santosh Kumar Suman (Cabinet Minister, Bihar).",
  alternates: {
    canonical: "/ham",
  },
  openGraph: {
    title: "Hindustani Awam Morcha (Secular) | Party Leadership & Vision | Ratnesh Patel",
    description:
      "Official overview and leadership of Hindustani Awam Morcha (Secular) in Bihar. Founded by former CM Shri Jitan Ram Manjhi and led by National President Dr. Santosh Kumar Suman.",
    url: "/ham",
    type: "website",
    images: [
      {
        url: "/images/ham/Hindustani%20Awam%20Morcha%20(Secular).png",
        width: 1200,
        height: 1200,
        alt: "Hindustani Awam Morcha (Secular) Official Party Emblem",
      },
    ],
  },
};

export default function HamPage() {
  return (
    <div className="space-y-0">
      {/* Search Engine Breadcrumb Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "HAM(S) Party", url: "/ham" },
        ]}
      />

      {/* Clean Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-stone-100/30 py-10 sm:py-14 text-center">
        <Container size="narrow">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                पार्टी दायित्व &bull; Party Mandate
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hindustani Awam Morcha (Secular)
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Organizational mandate, party ideology, and leadership initiatives of Hindustani Awam Morcha (Secular).
            </p>
          </div>
        </Container>
      </section>

      {/* Main Party Presentation: Three Dedicated Sections */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <Container size="wide">
          <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
            {/* 1. Party Introduction Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square drop-shadow-md">
                  <Image
                    src="/images/ham/Hindustani Awam Morcha (Secular).png"
                    alt="Hindustani Awam Morcha (Secular) Official Party Emblem"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Hindustani Awam Morcha (Secular), abbreviated HAM(S), is an Indian political party with a presence in Bihar. In Bihar, this party is also a natural Allies of National Democratic Alliance (NDA). It was launched formally on 8 May 2015 by former Chief Minister of Bihar, Shri Jitan Ram Manjhi.
                  </p>
                  <p>
                    In July 2015, the Election Commission recognised HAM(S) as a political party. The election symbol of the party is a wok.
                  </p>
                  <p>
                    The party won four seats in the 2020 Bihar Legislative Assembly election and Shri Santosh Suman was made a minister in Nitish Kumar’s cabinet.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Section Separator */}
            <hr className="border-t border-slate-200" />

            {/* 2. Shri Jitan Ram Manjhi Ji Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Red Name Tag Banner */}
              <div className="w-full bg-[#BE1B0F] py-2.5 sm:py-3 px-4 text-center shadow-xs rounded-lg sm:rounded-xl">
                <h2 className="font-serif font-bold text-white text-lg sm:text-xl lg:text-2xl tracking-wide">
                  Shri Jitan Ram Manjhi
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="md:col-span-5">
                  <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-50">
                    <Image
                      src="/images/ham/Jitan-Ram-Manjhi.png"
                      alt="Shri Jitan Ram Manjhi - Founder Hindustani Awam Morcha (Secular) & Union Minister (MSME)"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                    Minister of Micro, Small and Medium Enterprises
                  </h3>
                  <div className="h-0.5 w-full bg-[#8B2323]/30" />
                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                    <p>
                      Jitan Ram Manjhi (born 6 October 1944) is an Indian politician, serving as the Minister of Micro, Small and Medium Enterprises since 2024. He is currently a Member of Parliament from Gaya constituency and was Bihar’s 23rd Chief Minister from 20 May 2014 to 20 February 2015.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Section Separator */}
            <hr className="border-t border-slate-200" />

            {/* 3. National President: Shri Santosh Kumar Suman Ji Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Red Name Tag Banner */}
              <div className="w-full bg-[#BE1B0F] py-2.5 sm:py-3 px-4 text-center shadow-xs rounded-lg sm:rounded-xl">
                <h2 className="font-serif font-bold text-white text-lg sm:text-xl lg:text-2xl tracking-wide">
                  Shri Santosh Kumar Suman
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="md:col-span-7 space-y-3 order-2 md:order-1">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                    Cabinet Minister of Minor water resources in Government of Bihar
                  </h3>
                  <div className="h-0.5 w-full bg-[#8B2323]/30" />
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                    <p>
                      Dr. Santosh Kumar Suman (born 10 February 1975) is an Indian politician from Bihar. He currently serves as the Minister of minor water resources in the Government of Bihar.
                    </p>
                    <p>
                      Santosh Kumar Suman was Minister of Minor Irrigation and SC/ST Welfare in Government of Bihar from 16 Nov. 2020 to 9 August 2022.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-50">
                    <Image
                      src="/images/ham/Santosh-Suman.png"
                      alt="Dr. Santosh Kumar Suman - National President HAM(S) & Cabinet Minister, Bihar"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
