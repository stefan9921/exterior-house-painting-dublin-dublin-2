import type { MetadataRoute } from "next";
import { services, areas, business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const now = new Date();

  const staticPaths = [
    "/",
    "/about/",
    "/contact/",
    "/faq/",
    "/services/",
    "/areas/",
    "/privacy-policy/",
    "/terms/",
  ];

  const servicePaths = services.map((s) => `/services/${s.slug}/`);
  const areaPaths = areas.map((a) => `/areas/${a.slug}/`);

  return [...staticPaths, ...servicePaths, ...areaPaths].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      p === "/"
        ? 1
        : p === "/services/" || p === "/areas/"
        ? 0.9
        : p.startsWith("/services/") || p.startsWith("/areas/")
        ? 0.8
        : 0.6,
  }));
}
