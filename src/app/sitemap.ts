import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = new URL(SITE.url).origin;

  const routes = ["", "/about"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return routes;
}
