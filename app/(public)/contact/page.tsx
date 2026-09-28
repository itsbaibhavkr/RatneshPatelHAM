import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Send, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Office",
  description:
    "Official constituent communication portal for Ratnesh Patel, Senior State Vice President, Bihar.",
};

export default function ContactPage() {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-dark-text)] font-medium">Contact</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 border-b border-[var(--color-border-gray)] pb-6">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Constituent Correspondence
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-dark-text)]">
              Contact the Office of Ratnesh Patel
            </h1>
            <p className="text-sm text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
              Citizens, constituent delegations, and party workers may submit official representations, public grievances, and communication through this verified channel.
            </p>
          </div>

          {/* Disclaimer Banner */}
          <div className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-xs text-[var(--color-muted-text)] flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
            <span>
              All communications submitted through this form are logged in the secure Supabase administrative database for review by the office.
            </span>
          </div>

          {/* Contact Form Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Submit Representation or Inquiry</CardTitle>
                  <CardDescription className="text-xs">
                    Please provide accurate contact details so the office can respond effectively.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold text-[var(--color-dark-text)]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full rounded-md border border-[var(--color-border-gray)] bg-white px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-[var(--color-dark-text)]"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full rounded-md border border-[var(--color-border-gray)] bg-white px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold text-[var(--color-dark-text)]"
                        >
                          Contact Number (Optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-md border border-[var(--color-border-gray)] bg-white px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="subject"
                          className="block text-xs font-semibold text-[var(--color-dark-text)]"
                        >
                          Subject *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="Purpose of representation"
                          className="w-full rounded-md border border-[var(--color-border-gray)] bg-white px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-[var(--color-dark-text)]"
                      >
                        Message / Representation *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Write your representation or query in detail..."
                        className="w-full rounded-md border border-[var(--color-border-gray)] bg-white px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="button" variant="default" className="w-full sm:w-auto">
                        <Send className="h-4 w-4" />
                        <span>Submit Representation</span>
                      </Button>
                      <p className="mt-2 text-[11px] text-[var(--color-muted-text)]">
                        Form architecture connected to `contact_messages` table schema.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info Side */}
            <div className="md:col-span-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Office Designation</CardTitle>
                  <CardDescription className="text-xs">
                    State Leadership Office
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-xs text-[var(--color-muted-text)] leading-relaxed">
                  <div>
                    <span className="font-semibold text-[var(--color-dark-text)] block">
                      Ratnesh Patel
                    </span>
                    <span>Senior State Vice President</span>
                    <span className="block text-[var(--color-primary)] font-medium">
                      Bihar, Hindustani Awam Morcha (Secular)
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[var(--color-border-gray)]">
                    <span className="font-semibold text-[var(--color-dark-text)] block">
                      Scope:
                    </span>
                    <span>State-level Public Coordination &amp; Constituent Redressal</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
