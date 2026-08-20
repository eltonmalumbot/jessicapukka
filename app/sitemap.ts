import type { MetadataRoute } from "next";
import { featuredMachines } from "@/data/machines";
const origin = "https://harmony-machines.elton-kalangi.chatgpt.site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/machines", "/industries", "/about", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${origin}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .8 })),
    ...featuredMachines.map((machine) => ({ url: `${origin}/machines/${machine.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
