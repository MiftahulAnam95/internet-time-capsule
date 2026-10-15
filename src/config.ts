/**
 * Single place to configure everything deployment- or author-specific.
 * Nothing here is fetched from a server — the archive is fully static.
 */
export const siteConfig = {
  name: "Internet Time Capsule",
  shortName: "ITC",
  tagline: "A journey through the digital memories that shaped us.",
  volume: "VOL. 001",
  headline: "Before everything was online, everything was new.",
  intro:
    "An interactive archive of the websites, technologies, games, and digital cultures that shaped our connected world.",

  /** Repository used in the header, About and footer. */
  github: {
    owner: "MiftahulAnam95",
    repo: "internet-time-capsule",
    get url() {
      return `https://github.com/${this.owner}/${this.repo}`;
    },
  },

  /** Relative base path used when the site is published under a repo URL,
   *  e.g. https://username.github.io/internet-time-capsule/
   *  All links are anchor-based, so no absolute paths are required. */
  basePath: "/",

  /** Image fallback policy — shown when a source file cannot be loaded. */
  imageFallbackLabel: "Curator's plate",

  contactEmail: "curator@internettimcapsule.example",
} as const;

/** Era definitions drive the timeline, filters and comparison views. */
export type EraId = "early" | "social" | "mobile" | "algo";

export interface Era {
  id: EraId;
  index: number;
  title: string;
  years: string;
  from: number;
  to: number;
  kicker: string;
  summary: string;
  /** Verified characteristics of the period, written for a wall label. */
  markers: { label: string; text: string }[];
  bandwidth: string;
  signature: string;
}

export const eras: Era[] = [
  {
    id: "early",
    index: 0,
    title: "The Early Web",
    years: "1989 – 1999",
    from: 1989,
    to: 1999,
    kicker: "Documents, directories and dial-up",
    summary:
      "The web began as a document system for physicists and grew into a public space. Pages were hand-written HTML, linked by hand into directories, and reached through a modem that announced itself with a burst of noise. Nobody had settled on a business model, a visual language, or an audience — which is exactly why the decade looks the way it does.",
    markers: [
      {
        label: "Access",
        text: "Dial-up modems over telephone lines; connections were metered by the minute and the line could not carry a phone call at the same time.",
      },
      {
        label: "Discovery",
        text: "Human-curated directories (Yahoo!) and early link-ranking search (Google, from 1998) were the two competing answers to 'how do I find anything'.",
      },
      {
        label: "Authorship",
        text: "Free hosting such as GeoCities put page-building in the hands of teenagers; personal sites were neighbourhoods, not profiles.",
      },
    ],
    bandwidth: "14.4 – 56 kbit/s",
    signature: "Under construction GIF",
  },
  {
    id: "social",
    index: 1,
    title: "The Social Web",
    years: "2000 – 2009",
    from: 2000,
    to: 2009,
    kicker: "Profiles, feeds and the browser wars",
    summary:
      "Broadband made the web permanent, and the subject of the web changed from documents to people. Profiles replaced home pages, timelines replaced directories, and the browser became the operating system. The same decade produced both the open wiki and the closed social network — two very different ideas about who is allowed to write things down.",
    markers: [
      {
        label: "Access",
        text: "Broadband (DSL and cable) spread through the 2000s, so being online stopped being an event you scheduled.",
      },
      {
        label: "Identity",
        text: "Real-name profiles, friend counts and status updates turned the web into a map of who you knew.",
      },
      {
        label: "Media",
        text: "YouTube (2005) made video uploadable by anyone; the iPod and iTunes moved music off the shelf and into the catalogue.",
      },
    ],
    bandwidth: "1 – 20 Mbit/s",
    signature: "Top 8 friends list",
  },
  {
    id: "mobile",
    index: 2,
    title: "The Mobile Era",
    years: "2010 – 2019",
    from: 2010,
    to: 2019,
    kicker: "The feed moves into your pocket",
    summary:
      "The screen shrank and the browser became one icon among many. Apps replaced sites, gestures replaced links, and the square photograph replaced the paragraph. Because the phone is always with you, the internet stopped being a place you visited and became a layer over the physical world — which is also when recommendation systems started deciding what you saw first.",
    markers: [
      {
        label: "Interface",
        text: "Touch, swipe, infinite scroll and the app grid; links were replaced by feeds you could not leave.",
      },
      {
        label: "Format",
        text: "Square photos (Instagram), six-second loops (Vine), and later vertical short video — formats built for a thumb, not a mouse.",
      },
      {
        label: "Place",
        text: "Pokémon GO (2016) put the internet on top of a map; mobile payments and messaging replaced SMS in many markets.",
      },
    ],
    bandwidth: "3G / 4G LTE",
    signature: "Infinite scroll",
  },
  {
    id: "algo",
    index: 3,
    title: "The Algorithmic Internet",
    years: "2020 – Present",
    from: 2020,
    to: 2025,
    kicker: "Ranking, recommendation and generated text",
    summary:
      "Two things define the current period: a feed you did not choose, assembled by a ranking model, and a machine that writes back. Generative systems moved from research demos to daily tools in 2022–2023, search began answering instead of listing, and the question 'who published this?' became harder than it had ever been. Decentralised networks reappeared as an answer to platforms changing their rules.",
    markers: [
      {
        label: "Ranking",
        text: "For-you feeds optimise for time spent; the chronological timeline is now an option you have to select.",
      },
      {
        label: "Generation",
        text: "ChatGPT launched in November 2022; within two years text, image and code generation were built into mainstream products.",
      },
      {
        label: "Ownership",
        text: "Fediverse services such as Mastodon use the ActivityPub protocol, so an account can outlive a single company's decisions.",
      },
    ],
    bandwidth: "5G / fibre",
    signature: "For You feed",
  },
];

export type CategoryId =
  | "web"
  | "social"
  | "gaming"
  | "devices"
  | "culture"
  | "design";

export interface Category {
  id: CategoryId;
  name: string;
  code: string;
  note: string;
}

export const categories: Category[] = [
  {
    id: "web",
    name: "Web & Browsers",
    code: "WEB",
    note: "Pages, browsers, directories and search.",
  },
  {
    id: "social",
    name: "Social Media",
    code: "SOC",
    note: "Profiles, feeds, messaging and community.",
  },
  {
    id: "gaming",
    name: "Gaming",
    code: "GAME",
    note: "Worlds, launches and play as a social space.",
  },
  {
    id: "devices",
    name: "Devices",
    code: "DEV",
    note: "Hardware that changed how the internet is reached.",
  },
  {
    id: "culture",
    name: "Digital Culture",
    code: "CUL",
    note: "Sharing, knowledge, machines that make things.",
  },
  {
    id: "design",
    name: "Design & Interface",
    code: "DES",
    note: "Interface inventions that became habits.",
  },
];

export const eraById = (id: EraId): Era =>
  eras.find((e) => e.id === id) ?? eras[0];

export const categoryById = (id: CategoryId): Category =>
  categories.find((c) => c.id === id) ?? categories[0];
