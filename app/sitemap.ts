import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ratneshpatel.in";
  const now = new Date();

  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
      images: [
        `${baseUrl}/images/ratnesh-patel/profile/RatneshPatel4.JPG`,
        `${baseUrl}/images/ratnesh-patel/profile/ratnesh-patel.webp`,
        `${baseUrl}/HAMLogo.png`,
      ],
    },
    {
      path: "/ham",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [
        `${baseUrl}/images/ham/Hindustani%20Awam%20Morcha%20(Secular).png`,
        `${baseUrl}/images/ham/Jitan-Ram-Manjhi.png`,
        `${baseUrl}/images/ham/Santosh-Suman.png`,
        `${baseUrl}/HAMLogo.png`,
      ],
    },
    {
      path: "/gallery",
      priority: 0.8,
      changeFrequency: "weekly" as const,
      images: [
        `${baseUrl}/images/Gallery/Gallery1.jpg`,
        `${baseUrl}/images/Gallery/Gallery2.jpg`,
        `${baseUrl}/images/Gallery/Gallery3.jpg`,
        `${baseUrl}/images/Gallery/Gallery4.jpg`,
      ],
    },
    {
      path: "/contact",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [
        `${baseUrl}/images/ratnesh-patel/profile/ratnesh-patel.webp`,
        `${baseUrl}/HAMLogo.png`,
      ],
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images,
  }));
}
