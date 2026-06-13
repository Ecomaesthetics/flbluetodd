import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flbluetodd.com";
  
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/accident-insurance",
    "/travel-insurance",
    "/dental-insurance",
    "/medicare-advantage-plans",
    "/medicare-supplement-plans",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
