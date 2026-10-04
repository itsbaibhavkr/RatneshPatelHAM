import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/shared/social-links";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 overflow-hidden">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Identity Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3.5">
                {/* Party logo without red circle */}
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src="/HAMLogo.png"
                    alt="Hindustani Awam Morcha (Secular) Party Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white leading-tight">
                    Ratnesh Patel
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-red-400">
                    Senior State Vice President, Bihar
                  </p>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    Hindustani Awam Morcha (Secular)
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                Dedicated to grassroots leadership, farmer prosperity, social justice, and constituent advocacy across all 28 districts of Bihar.
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                  Connect on Social Media
                </span>
                <SocialLinks variant="footer" size="md" />
              </div>
            </div>

            {/* Navigation Column (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {MAIN_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Party Information (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
                Party &amp; Public Desk
              </h4>

              {/* HAM Official Website Link Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-white">
                    Hindustani Awam Morcha (S)
                  </span>
                  <span className="text-[10px] text-red-300 font-bold uppercase tracking-wider bg-red-950/80 border border-red-800 px-2 py-0.5 rounded">
                    Central Party
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For party resolutions, central announcements, and national guidelines:
                </p>
                <a
                  href="https://ham.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors pt-1"
                >
                  <span>https://ham.org.in/</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Strip -  Centered */}
          <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            <p>
              &copy; {currentYear} Ratnesh Patel &bull; Senior State Vice President, Bihar. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
