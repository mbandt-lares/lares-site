import { headers } from "next/headers";

export const socialImage = {
  url: "/social/larescare-lar.png",
  width: 1200,
  height: 630,
  alt: "LaresCare — A little company. A brighter day. Meet Lar, your everyday AI companion.",
};

export async function socialMetadataBase(): Promise<URL> {
  // A local preview may be shared through a tunnel. Crawlers need its public
  // origin, not localhost. Production stays statically rendered.
  if (process.env.NODE_ENV === "development") {
    const requestHeaders = await headers();
    const host = requestHeaders.get("host") || "localhost:3100";
    const protocol = /^(localhost|127\.0\.0\.1)(:|$)/.test(host) ? "http" : "https";
    return new URL(`${protocol}://${host}`);
  }

  const previewHost = process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
  if (process.env.VERCEL_ENV === "preview" && previewHost) {
    return new URL(`https://${previewHost}`);
  }
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://larescare.io");
}
