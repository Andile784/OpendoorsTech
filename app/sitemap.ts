import type { MetadataRoute } from "next";

const baseUrl = "https://www.opendoorstech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/architecture",
    "/integrations",
    "/integrations/hubspot",
    "/use-cases",
    "/about",
    "/contact",
    "/contact/success",
    "/book"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
