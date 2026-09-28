import type { GalleryCategory, GalleryItem } from "@/types/gallery";

/**
 * Gallery categories for photo filtering.
 */
export const galleryCategories: GalleryCategory[] = [
  { id: "all", name: "All Photographs", slug: "all" },
  { id: "public-meetings", name: "Public Meetings", slug: "public-meetings" },
  { id: "party-conventions", name: "Party Conventions", slug: "party-conventions" },
  { id: "constituent-outreach", name: "Constituent Outreach", slug: "constituent-outreach" },
];

/**
 * Official photographic documentation archive.
 * ALL gallery images must come exclusively from /public/images/ratnesh-patel/gallery/
 *
 * Example structure:
 * {
 *   id: "gallery-001",
 *   title: "Public Meeting",
 *   image: "/images/ratnesh-patel/gallery/public-meeting-01.jpg",
 *   alt: "Ratnesh Patel at a public meeting",
 *   category: "public-meetings",
 *   caption: "Addressing constituent delegates in Bihar."
 * }
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-001",
    title: "HAM(S) Leadership & Visionary Mission",
    image: "/images/ratnesh-patel/hero/hero1.webp",
    alt: "HAM(S) Party Vision with Shri Jitan Ram Manjhi and Ratnesh Patel",
    category: "party-conventions",
    caption: "हम का एक ही लक्ष्य एवं एक ही सपना, स्वस्थ एवं विकसित बिहार हो अपना !!",
  },
  {
    id: "gallery-002",
    title: "Senior State Leadership Portrait",
    image: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
    alt: "Official portrait of Ratnesh Patel, Senior State Vice President, Bihar",
    category: "public-meetings",
    caption: "Ratnesh Patel, Senior State Vice President, Bihar — Hindustani Awam Morcha (Secular).",
  },
  {
    id: "gallery-003",
    title: "Statewide Fight for Bihar's Development",
    image: "/images/ratnesh-patel/hero/hero2.webp",
    alt: "Dr. Santosh Kumar Suman addressing leadership address",
    category: "party-conventions",
    caption: "हैं तैयार हम, आपकी लड़ाई लड़ने को, बिहार को विकसित बनाने को ! - डॉ. संतोष कुमार सुमन",
  },
  {
    id: "gallery-004",
    title: "Vision of Shri Jitan Ram Manjhi",
    image: "/images/ratnesh-patel/hero/hero3.webp",
    alt: "Shri Jitan Ram Manjhi, Founder & Patron of HAM(S)",
    category: "party-conventions",
    caption: "हमारा लक्ष्य: बेहतर बिहार, विकसित बिहार - जीतन राम मांझी",
  },
  {
    id: "gallery-005",
    title: "Grassroots Public Dedication",
    image: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    alt: "Ratnesh Patel in official attire",
    category: "constituent-outreach",
    caption: "Standing dedicated to the welfare of the people of Bihar.",
  },
];
