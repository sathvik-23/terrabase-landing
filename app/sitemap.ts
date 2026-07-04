import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/migrate", "/pricing", "/docs", "/about", "/status"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
