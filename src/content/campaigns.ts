// src/content/campaigns.ts

export type CampaignPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow?: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  audienceTagline?: string;
  bullets: string[];
  proof: {
    heading: string;
    body: string;
  }[];
  ctaLabel: string;
  ctaHref: string;
};

export const campaigns: Record<string, CampaignPage> = {
  "fall-risk": {
    slug: "fall-risk",
    metaTitle: "Reduce fall risk with quiet, continuous monitoring | Lares Care",
    metaDescription:
      "Lares Care helps families spot early changes in balance, activity, and sleep—before a fall becomes a crisis.",
    heroEyebrow: "For families worried about falls",
    heroTitle: "Spot the small changes that often come before a fall.",
    heroSubtitle:
      "Lares Care watches how your parent's movement and steadiness are changing over time, so you don't have to wait for an emergency to know something is wrong.",
    heroImage: "/images/hero-elder-family.jpg",
    audienceTagline: "Ideal for adult children supporting a parent living alone.",
    bullets: [
      "See early shifts in activity, steadiness, and sleep from Apple Watch and iPhone data.",
      "Get clear, plain-language summaries—not dashboards or medical jargon.",
      "Receive gentle alerts when trends suggest increased fall risk.",
    ],
    proof: [
      {
        heading: "Built for aging in place, not hospital workflows",
        body: "Lares is designed around everyday life at home, not billing codes. It's a quiet layer of awareness that helps you act sooner without overwhelming anyone with alarms.",
      },
      {
        heading: "Uses devices your parent already has",
        body: "We start with Apple Watch and iPhone. No hubs, no extra boxes on the counter, no new gadgets to learn.",
      },
    ],
    ctaLabel: "Join the fall risk pilot",
    ctaHref: "/contact",
  },

  // Example second campaign; you can add more entries like this
  "loneliness-checkins": {
    slug: "loneliness-checkins",
    metaTitle: "Support an aging parent who feels alone | Lares Care",
    metaDescription:
      "Lares Care combines subtle activity signals with thoughtful check-ins to support elders who spend too much time alone.",
    heroEyebrow: "For families worried about loneliness",
    heroTitle: "When 'I'm fine' isn't enough of an answer anymore.",
    heroSubtitle:
      "Lares helps you notice when your parent's routines are getting quieter—fewer outings, less movement, more time alone—so you can step in with connection before it becomes a crisis.",
    heroImage: "/images/hero-elder-family.jpg",
    audienceTagline: "For adult children who can't be there every day.",
    bullets: [
      "Track patterns in movement and daily activity that may suggest isolation.",
      "Get nudges when things look unusually quiet for your parent.",
      "Use insights to plan visits, calls, or extra support at the right time.",
    ],
    proof: [
      {
        heading: "A gentle layer of awareness",
        body: "We're not measuring your parent's worth in steps or sleep hours. We're giving you another way to notice when something might be off.",
      },
      {
        heading: "Respects independence",
        body: "Your parent stays in control. You get better context for when and how to help.",
      },
    ],
    ctaLabel: "Join the early access list",
    ctaHref: "/contact",
  },
};
