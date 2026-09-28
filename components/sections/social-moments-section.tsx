"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, Heart, MessageCircle, Share2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { socialPosts, type SocialPost } from "@/data/social-posts";

export function SocialMomentsSection() {
  const [filter, setFilter] = React.useState<"all" | "facebook" | "instagram">("all");

  const filteredPosts = React.useMemo(() => {
    if (filter === "all") return socialPosts;
    return socialPosts.filter((post) => post.platform === filter);
  }, [filter]);

  return (
    <section id="gallery" className="scroll-mt-20 bg-slate-50/60 border-b border-slate-200 py-16 sm:py-20">
      <Container size="wide">
        {/* Header with Title and Social Channel Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                सोशल मीडिया &bull; Public Moments
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Social Media &amp; Public Moments
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Real-time leadership updates, grassroots constituent outreach, and public addresses from Ratnesh Patel&apos;s verified social platforms.
            </p>
          </div>

          {/* Social Channel Follow Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://www.facebook.com/RatneshPatelHAM/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white px-3.5 py-2 text-xs font-bold shadow-xs transition-all hover:shadow"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span>Facebook</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <a
              href="https://www.instagram.com/ratneshpatelham"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white px-3.5 py-2 text-xs font-bold shadow-xs transition-all hover:shadow"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              <span>Instagram</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            All Moments ({socialPosts.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("facebook")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === "facebook"
                ? "bg-[#1877F2] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-[#1877F2] border border-slate-200"
            }`}
          >
            <span>Facebook</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter("instagram")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === "instagram"
                ? "bg-[#DD2A7B] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-[#DD2A7B] border border-slate-200"
            }`}
          >
            <span>Instagram</span>
          </button>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const isFb = post.platform === "facebook";
            return (
              <article
                key={post.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group"
              >
                {/* Post Author Card Header */}
                <div className="p-4 pb-3 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-sm text-slate-900 leading-tight">
                          {post.author.name}
                        </span>
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 fill-blue-100" />
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {post.date} &bull; {post.author.handle}
                      </p>
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isFb
                        ? "bg-blue-50 text-[#1877F2] border border-blue-200"
                        : "bg-pink-50 text-[#DD2A7B] border border-pink-200"
                    }`}
                  >
                    {isFb ? "Facebook" : "Instagram"}
                  </span>
                </div>

                {/* Post Photo */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden block"
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </a>

                {/* Post Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {post.content}
                  </p>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-red-700 bg-red-50/80 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Strip */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                        <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500/20" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                        <MessageCircle className="h-3.5 w-3.5 text-blue-500" />
                        <span>{post.comments}</span>
                      </span>
                      {post.shares && (
                        <span className="inline-flex items-center gap-1 text-slate-600 font-medium hidden sm:inline-flex">
                          <Share2 className="h-3.5 w-3.5 text-slate-400" />
                          <span>{post.shares}</span>
                        </span>
                      )}
                    </div>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-xs text-[var(--color-primary)] hover:underline"
                    >
                      <span>{isFb ? "View on Facebook" : "View on Instagram"}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
