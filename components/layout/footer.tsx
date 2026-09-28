import * as React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--color-border-gray)] bg-[var(--color-off-white)] text-[var(--color-dark-text)]">
      {/* Disclaimer Section */}
      <div className="border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-6">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-lg border border-[var(--color-primary-border)] bg-[var(--color-primary-subtle)] p-4 text-xs">
            <ShieldAlert className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-[var(--color-dark-text)] leading-relaxed">
              <strong className="font-semibold text-[var(--color-primary-dark)]">
                Official Disclaimer:
              </strong>{" "}
              This is the official personal and public-profile website of{" "}
              <strong>Ratnesh Patel</strong>, Senior State Vice President, Bihar,
              Hindustani Awam Morcha (Secular). This website serves as a public
              communication portal and personal public archive. It is{" "}
              <strong>NOT</strong> the official website of the Hindustani Awam Morcha
              (Secular) political party.
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Identity Column */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-primary)] text-white font-bold text-sm">
                  RP
                </div>
                <div>
                  <h4 className="font-bold text-base text-[var(--color-dark-text)]">
                    Ratnesh Patel
                  </h4>
                  <p className="text-xs text-[var(--color-muted-text)]">
                    Senior State Vice President, Bihar
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--color-muted-text)] leading-relaxed max-w-md">
                Dedicated to public engagement, civic responsibility, and transparent public service across the State of Bihar representing Hindustani Awam Morcha (Secular).
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h5 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-dark-text)] mb-3">
                Public Sections
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/about"
                    className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    About Ratnesh Patel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/political-journey"
                    className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Political Journey
                  </Link>
                </li>
                <li>
                  <Link
                    href="/public-work"
                    className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Public Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Media & Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ham"
                    className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Hindustani Awam Morcha (S)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Portal Architecture & Admin Access */}
            <div>
              <h5 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-dark-text)] mb-3">
                Constituent Portal
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/contact"
                    className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                  >
                    <span>Contact Office</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/admin/login"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-primary)] hover:underline"
                  >
                    <span>Administrative Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-6 border-t border-[var(--color-border-gray)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted-text)]">
            <p>
              &copy; {currentYear} Ratnesh Patel. All rights reserved.
            </p>
            <p className="text-[11px]">
              Foundation Architecture Phase &bull; Next.js & Supabase
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
