import { MetadataRoute } from "next";

const siteMap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://lgtm-generator-with-emoji.com';
  const lastModified = new Date();

  const staticPaths = [
    {
      url: `${baseUrl}`,
      lastModified,
    },
    {
      url: `${baseUrl}/create`,
      lastModified,
    },
    {
        url: `${baseUrl}/favorite`,
        lastModified,
    },
    {
        url: `${baseUrl}/notice`,
        lastModified,
    },
    {
        url: `${baseUrl}/privacy`,
        lastModified,
    },
  ];

  return staticPaths;
}

export default siteMap;