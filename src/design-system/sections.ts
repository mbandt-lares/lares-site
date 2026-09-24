/** Stable DOM IDs for the new landing. Figma node mapping: docs/redesign/figma-source.json.
 * These are migration contracts; they are not attached to the legacy page markup yet.
 */
export const landingSections = {
  home: {
    hero: "home-hero",
    conversation: "home-conversation",
    signals: "home-signals",
    family: "home-family",
    independence: "home-independence",
    faq: "home-faq",
    pilot: "pilot",
  },
  howItWorks: {
    hero: "how-it-works-hero",
    process: "how-it-works-process",
    context: "how-it-works-context",
    conversation: "how-it-works-conversation",
    family: "how-it-works-family",
    pilot: "how-it-works-pilot",
  },
  about: {
    hero: "about-hero",
    conversation: "about-conversation",
    connection: "about-connection",
    independence: "about-independence",
    pilot: "about-pilot",
  },
  shared: { header: "site-header", footer: "site-footer" },
} as const;

export const landingNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Why LaresCare" },
  { href: "/how-it-works", label: "How it works" },
] as const;

export const pilotHref = `/#${landingSections.home.pilot}` as const;
