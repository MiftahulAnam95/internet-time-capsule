import type { ArtifactImage } from "./types";

export interface CompareSide {
  label: string;
  years: string;
  title: string;
  artifactId?: string;
  image?: ArtifactImage;
  points: { label: string; value: string }[];
}

export interface Comparison {
  id: string;
  kicker: string;
  title: string;
  thesis: string;
  rows: { axis: string; then: string; now: string }[];
  then: CompareSide;
  now: CompareSide;
}

/** Then vs Now — six curated pairings. Each side links to a real catalogue entry. */
export const comparisons: Comparison[] = [
  {
    id: "front-door",
    kicker: "Pair 01",
    title: "Your place on the web",
    thesis:
      "In 1998 you built a page and told people where it lived. Today you fill in a profile and a system decides who sees it. The unit of personal publishing changed from a document you owned to an account you rent — and with it, so did the design of self-presentation.",
    rows: [
      {
        axis: "Publishing tool",
        then: "A text editor, an FTP client and whatever HTML you could copy from a neighbour's page.",
        now: "An app with a camera, templates and a composer; the underlying format is invisible.",
      },
      {
        axis: "Address",
        then: "A descriptive path inside a neighbourhood, e.g. geocities.com/SiliconValley/Port/1234.",
        now: "A handle on a platform, e.g. @name — portable only if the platform lets you leave.",
      },
      {
        axis: "Audience",
        then: "Whoever followed your link, joined your webring, or signed your guestbook.",
        now: "A ranked feed of people you may never have chosen, chosen for you.",
      },
      {
        axis: "Ownership",
        then: "Your files, on a host that could — and in 2009 did — delete them overnight.",
        now: "Your content, inside a database governed by terms of service and a moderation queue.",
      },
    ],
    then: {
      label: "Then",
      years: "1998",
      title: "The hand-built home page",
      artifactId: "geocities",
      points: [
        { label: "Made by", value: "The owner, character by character" },
        { label: "Design language", value: "Tiled backgrounds, hit counters, webrings" },
        { label: "Cost", value: "Free hosting, paid for with banner ads" },
      ],
    },
    now: {
      label: "Now",
      years: "2025",
      title: "The algorithmic profile",
      artifactId: "tiktok",
      points: [
        { label: "Made by", value: "The owner, filtered through the platform's tools" },
        { label: "Design language", value: "Full-screen vertical media, uniform across accounts" },
        { label: "Cost", value: "Free to use; attention and data are the payment" },
      ],
    },
  },
  {
    id: "finding-things",
    kicker: "Pair 02",
    title: "Finding anything at all",
    thesis:
      "Discovery moved from human judgement to statistical judgement and then to generated text. Each step made answers faster and less inspectable: you can read a directory category and disagree with it, but an answer that appears already written is much harder to argue with.",
    rows: [
      {
        axis: "Method",
        then: "Editors reviewed sites and filed them into a hierarchy of categories.",
        now: "A retrieval system reads the corpus and a language model summarises it.",
      },
      {
        axis: "What you receive",
        then: "A list of places to visit, ordered by category and editor judgement.",
        now: "A paragraph with citations, above a shorter list of places to visit.",
      },
      {
        axis: "Failure mode",
        then: "Out-of-date categories, dead links, and sites nobody filed.",
        now: "Confidently wrong answers, generated from sources that were never meant to be trusted.",
      },
      {
        axis: "Trust",
        then: "Placed in an institution — a named editorial team at a named company.",
        now: "Placed in a system whose ranking criteria are not published.",
      },
    ],
    then: {
      label: "Then",
      years: "1998",
      title: "The curated directory",
      artifactId: "yahoo-directory",
      points: [
        { label: "Entry point", value: "Browse categories, or type a keyword" },
        { label: "Scale limit", value: "Human editors cannot keep pace with growth" },
        { label: "Outcome", value: "Closed 31 December 2014" },
      ],
    },
    now: {
      label: "Now",
      years: "2024",
      title: "The generated overview",
      artifactId: "ai-overviews",
      points: [
        { label: "Entry point", value: "A question, in ordinary language" },
        { label: "Scale limit", value: "Provenance, copyright and accuracy" },
        { label: "Outcome", value: "Answer-first search, still being regulated" },
      ],
    },
  },
  {
    id: "presence",
    kicker: "Pair 03",
    title: "Being online with other people",
    thesis:
      "The early internet asked you to choose who to talk to, and then showed you whether they were available. The current one shows you content from strangers and lets you reply afterwards. Presence became broadcast, and the social graph became a recommendation graph.",
    rows: [
      {
        axis: "Direction",
        then: "You initiate: pick a name from a list you built, type, wait for a reply.",
        now: "The feed initiates: content arrives, and you respond to what was surfaced.",
      },
      {
        axis: "Visibility",
        then: "Explicit statuses — online, away, invisible — chosen by the person.",
        now: "Inferred engagement, measured by the platform and rarely shown to the user.",
      },
      {
        axis: "Group shape",
        then: "One-to-one windows, occasionally a small chat room.",
        now: "Persistent group channels and public comment threads at scale.",
      },
      {
        axis: "Record",
        then: "Ephemeral by default; logs lived on your own machine.",
        now: "Archived by default, searchable and citable years later.",
      },
    ],
    then: {
      label: "Then",
      years: "1996",
      title: "The buddy list",
      artifactId: "icq",
      points: [
        { label: "Signal", value: "Who is online, right now" },
        { label: "Sound", value: "A notification tone meant something" },
        { label: "Identity", value: "A number, chosen once, kept for years" },
      ],
    },
    now: {
      label: "Now",
      years: "2022",
      title: "The federated timeline",
      artifactId: "fediverse-mastodon",
      points: [
        { label: "Signal", value: "What your instances published, in order" },
        { label: "Sound", value: "Notifications ranked and batched" },
        { label: "Identity", value: "An account that can move between servers" },
      ],
    },
  },
  {
    id: "machine",
    kicker: "Pair 04",
    title: "The machine you use",
    thesis:
      "The desktop was a destination: a room, a chair, a scheduled session with a beginning and an end. The phone is a layer over everything else, which is why 'logging off' changed meaning — there is no longer a window to close.",
    rows: [
      {
        axis: "Session",
        then: "Dial in, work, disconnect. The line could not carry a phone call at the same time.",
        now: "Always connected; the session never formally begins or ends.",
      },
      {
        axis: "Input",
        then: "Keyboard and a two-button mouse, with menus and windows.",
        now: "Glass, gestures and a software keyboard; voice and camera as inputs.",
      },
      {
        axis: "Software",
        then: "Installed from disks, updated occasionally, mostly offline-capable.",
        now: "Continuously updated apps, mostly useless without a connection.",
      },
      {
        axis: "Speed",
        then: "Roughly 14.4–56 kbit/s over a telephone line.",
        now: "Mobile broadband and fibre, orders of magnitude faster, with video as the default payload.",
      },
    ],
    then: {
      label: "Then",
      years: "1995",
      title: "The desktop computer",
      artifactId: "windows-95",
      points: [
        { label: "Interface", value: "Start menu, taskbar, windows" },
        { label: "Connection", value: "A modem and a phone number" },
        { label: "Place", value: "A desk, in a room, at a set time" },
      ],
    },
    now: {
      label: "Now",
      years: "2007 →",
      title: "The pocket computer",
      artifactId: "iphone",
      points: [
        { label: "Interface", value: "Multi-touch glass, one button" },
        { label: "Connection", value: "Cellular data, Wi-Fi, seamless handover" },
        { label: "Place", value: "Wherever you are" },
      ],
    },
  },
  {
    id: "moving-pictures",
    kicker: "Pair 05",
    title: "Making and watching moving pictures",
    thesis:
      "First the web gained animation, drawn by hand inside a plugin. Then it gained video, uploaded by anyone with a camera. The creative bottleneck moved from skill and tools to attention — which is why the format kept shrinking.",
    rows: [
      {
        axis: "Format",
        then: "Vector animation and interactive scenes inside a browser plugin.",
        now: "Encoded video, streamed progressively, increasingly vertical and short.",
      },
      {
        axis: "Who could make it",
        then: "Anyone who learned the authoring tool — a real skill barrier, but a low financial one.",
        now: "Anyone with a phone; editing tools are built into the app that publishes.",
      },
      {
        axis: "Distribution",
        then: "Embedded on a page; the page had to load first.",
        now: "A feed of recommended clips, watched with no page in between.",
      },
      {
        axis: "Longevity",
        then: "Mostly lost: the plugin was withdrawn in 2020 and only emulation preserves the work.",
        now: "Preserved in platform databases, but subject to takedowns and account deletion.",
      },
    ],
    then: {
      label: "Then",
      years: "1996",
      title: "The plugin animation",
      artifactId: "macromedia-flash",
      points: [
        { label: "Medium", value: "Drawn vectors, timelines and ActionScript" },
        { label: "Home", value: "Portals such as Newgrounds" },
        { label: "Fate", value: "Player blocked 31 December 2020" },
      ],
    },
    now: {
      label: "Now",
      years: "2005 →",
      title: "The uploaded video",
      artifactId: "youtube",
      points: [
        { label: "Medium", value: "Encoded video with a thumbnail grid" },
        { label: "Home", value: "A single global platform and its short-form rivals" },
        { label: "Fate", value: "Largest archive of amateur footage in existence" },
      ],
    },
  },
  {
    id: "music",
    kicker: "Pair 06",
    title: "Getting the music",
    thesis:
      "Two answers to the same problem arrived within eighteen months of each other: take the copies that already exist and share them, or build a legal database and sell access. The second won, and the idea of owning a collection quietly became optional.",
    rows: [
      {
        axis: "Acquisition",
        then: "Copy a file from another person's hard drive over a peer-to-peer index.",
        now: "Stream from a licensed catalogue, or buy a download, inside one application.",
      },
      {
        axis: "The object",
        then: "A file on your disk, yours to keep and to move.",
        now: "A row in a subscription that ends when the payment does.",
      },
      {
        axis: "Legal status",
        then: "Contested — ended by injunction in 2001.",
        now: "Licensing agreements with rights holders, negotiated country by country.",
      },
      {
        axis: "Curation",
        then: "Handmade: playlists as files in folders, mixtapes as gifts.",
        now: "Generated: recommendation playlists assembled from listening history.",
      },
    ],
    then: {
      label: "Then",
      years: "1999",
      title: "The shared file",
      artifactId: "napster",
      points: [
        { label: "Model", value: "Central index, distributed storage" },
        { label: "Payment", value: "None" },
        { label: "Outcome", value: "Shut down July 2001" },
      ],
    },
    now: {
      label: "Now",
      years: "2001 →",
      title: "The portable library",
      artifactId: "ipod",
      points: [
        { label: "Model", value: "Sync a library, then stream a catalogue" },
        { label: "Payment", value: "Per track, then per month" },
        { label: "Outcome", value: "Access replaced ownership for most listeners" },
      ],
    },
  },
];
