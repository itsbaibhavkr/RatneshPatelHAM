import * as React from "react";
import Link from "next/link";
import { ShieldAlert, ExternalLink, Mail, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/shared/social-links";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--color-border-gray)] bg-[var(--color-off-white)] text-[var(--color-dark-text)] overflow-hidden">
      {/* Official Disclaimer Banner */}
      <div className="border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-5">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-lg border border-[var(--color-primary-border)] bg-[var(--color-primary-subtle)] p-4 text-xs">
            <ShieldAlert className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-[var(--color-dark-text)] leading-relaxed flex-1">
              <strong className="font-semibold text-[var(--color-primary-dark)]">
                Important Disclaimer:
              </strong>{" "}
              This is the official personal and public-profile website of{" "}
              <strong>Ratnesh Patel</strong>, Senior State Vice President, Bihar,
              Hindustani Awam Morcha (Secular). This website serves as a personal public
              archive and direct communication portal. It is <strong>NOT</strong> the official central website of the Hindustani Awam Morcha (Secular) political party.
            </div>
            <a
              href="https://ham.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--color-primary)] text-white font-medium text-xs hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
            >
              <span>ham.org.in</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Identity Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-primary)] text-white font-bold text-lg shadow-xs">
                  RP
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-dark-text)] leading-none">
                    Ratnesh Patel
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[var(--color-primary)]">
                    Senior State Vice President, Bihar
                  </p>
                  <p className="text-[11px] text-[var(--color-muted-text)] font-semibold uppercase tracking-wider">
                    Hindustani Awam Morcha (Secular)
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed max-w-md">
                Representing leadership coordination, public representations, and community advocacy across Bihar under the banner of Hindustani Awam Morcha (Secular).
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-dark-text)] block mb-2.5">
                  Official Channels
                </span>
                <SocialLinks variant="footer" size="md" />
              </div>
            </div>

            {/* Navigation Column (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-dark-text)] border-b border-[var(--color-border-gray)] pb-2">
                Public Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {MAIN_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--color-border-dark)]" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Party & Contact Information (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-dark-text)] border-b border-[var(--color-border-gray)] pb-2">
                Official Party &amp; Office
              </h4>

              {/* HAM Official Website Link Card */}
              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-[var(--color-dark-text)]">
                    Official HAM(S) Portal
                  </span>
                  <span className="text-[10px] text-[var(--color-primary)] font-bold uppercase tracking-wider bg-[var(--color-primary-subtle)] px-2 py-0.5 rounded">
                    Central Party
                  </span>
                </div>
                <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
                  For central party announcements, policy resolutions, and official organizational notices, visit the central party website:
                </p>
                <a
                  href="https://ham.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline pt-1"
                >
                  <span>https://ham.org.in/</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Office Contact Note */}
              <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-[var(--color-dark-text)]">
                  <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Constituent Office Representation</span>
                </div>
                <p className="text-[var(--color-muted-text)] leading-relaxed">
                  Submit formal representations, queries, and district representations via the official communication desk.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-primary)] hover:underline pt-1"
                >
                  <span>Submit Public Representation</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Strip */}
          <div className="mt-12 pt-6 border-t border-[var(--color-border-gray)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted-text)]">
            <p>
              &copy; {currentYear} Ratnesh Patel. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Official Public Profile</span>
              <span>&bull;</span>
              <Link
                href="/ham"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                HAM (Secular) Role
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
