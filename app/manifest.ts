import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.shortName} | Professional Staffing Solutions`,
    short_name: SITE.shortName,
    description: SITE.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#1a1a1a",
    lang: "en-SG",
    icons: [
      {
        src: "/logo-transparent.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
