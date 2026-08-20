import type { MetadataRoute } from "next";
import { featuredMachines } from "@/data/machines";
import { siteUrl } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/machines", "/industries", "/about", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .8 })),
    ...featuredMachines.map((machine) => ({ url: `${siteUrl}/machines/${machine.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
