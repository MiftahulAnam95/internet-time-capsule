import { wiki, type Artifact } from "../types";

/**
 * ERA III — THE MOBILE ERA (2010–2019)
 * The feed moves into your pocket. 5 catalogue entries.
 */
export const mobileEraArtifacts: Artifact[] = [
  {
    id: "instagram",
    catalogId: "SOC-018",
    title: "Instagram",
    year: "2010 – present",
    yearNum: 2010,
    era: "mobile",
    category: "social",
    blurb:
      "A square photograph, a filter, and a feed that replaced the written status update with an image of your day.",
    story: [
      "Kevin Systrom and Mike Krieger launched Instagram for iOS on 6 October 2010, having stripped an earlier check-in app down to one action: take a photo, apply a filter, share it. The fixed square crop and the deliberately low-fidelity filters turned poor phone cameras into an aesthetic rather than a limitation.",
      "The Android version arrived in April 2012, and Facebook agreed to buy the company days later for roughly $1 billion in cash and stock — at a time when it had about thirteen employees. Stories, launched in August 2016, added the disappearing-format mechanic pioneered by Snapchat; Reels followed in 2020 as short vertical video became the dominant form.",
    ],
    significance:
      "Instagram made the image the primary unit of social communication and normalised the curated, filter-processed self-portrait as everyday publishing.",
    impact: [
      {
        label: "Technology",
        text: "Mobile-first photography pipelines: filters, compression and square crops were engineering decisions with visual consequences.",
      },
      {
        label: "Culture",
        text: "Created influencer marketing, food and travel photography as genres, and a documented pressure around appearance.",
      },
      {
        label: "Design",
        text: "The grid profile page turned a personal history into a designed composition.",
      },
    ],
    facts: [
      { label: "Launched (iOS)", value: "6 October 2010" },
      { label: "Android release", value: "April 2012" },
      { label: "Acquired by Facebook", value: "April 2012, ~$1 billion" },
      { label: "Stories added", value: "August 2016" },
    ],
    image: {
      file: "Instagram 2009.svg",
      alt: "The original Instagram app icon: a retro camera shape in brown and blue tones.",
      caption: "Instagram's original camera icon, before the 2016 redesign — the mark of the square-photo era.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Instagram"), wiki("Instagram Stories")],
  },
  {
    id: "vine",
    catalogId: "SOC-019",
    title: "Vine",
    year: "2013 – 2017",
    yearNum: 2013,
    era: "mobile",
    category: "social",
    blurb:
      "Six looping seconds. The shortest format in the archive, and the reason short-form video looks the way it does.",
    story: [
      "Rus Yusupov, Dom Hofmann and Colin Kroll founded Vine in June 2012; Twitter acquired the company four months later for a reported $30 million. The iOS app launched on 24 January 2013 with one strict rule: recordings stopped at six seconds and looped forever. You filmed by holding your finger on the screen, which made timing a physical skill.",
      "The constraint produced a distinct comedy grammar — hard cuts, punchlines that landed on the loop point, and a generation of performers who later became the first wave of platform-native celebrities. Vine passed 200 million registered users by December 2015. Twitter announced its wind-down in October 2016 and the app stopped working in January 2017; the archive of loops survives largely in re-uploads.",
    ],
    significance:
      "Vine proved that extreme brevity does not limit expression — it concentrates it. TikTok, Reels and Shorts are its direct descendants, with the timer relaxed and the loop kept.",
    impact: [
      {
        label: "Technology",
        text: "Showed that tiny video files could stream instantly on mobile networks.",
      },
      {
        label: "Culture",
        text: "Its catchphrases and looping gags spread faster than any written meme of the period.",
      },
      {
        label: "Design",
        text: "Hold-to-record is a rare example of an interface where the control is also the constraint.",
      },
    ],
    facts: [
      { label: "Founded", value: "June 2012" },
      { label: "Acquired by Twitter", value: "October 2012, reported $30 million" },
      { label: "iOS launch", value: "24 January 2013" },
      { label: "Shut down", value: "January 2017" },
    ],
    image: {
      file: "Vine wordmark.svg",
      alt: "The Vine wordmark in green, the logo of the six-second video service.",
      caption: "Vine's wordmark. The service ran for four years and shaped the format of everything that followed.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Vine (service)"), wiki("Short-form video")],
  },
  {
    id: "pokemon-go",
    catalogId: "GAME-024",
    title: "Pokémon GO",
    year: "2016 – present",
    yearNum: 2016,
    era: "mobile",
    category: "gaming",
    blurb:
      "The summer the internet went outside: a map, a camera and a reason to walk to a specific fountain at 11pm.",
    story: [
      "Niantic released Pokémon GO in July 2016, using a map dataset and location technology developed from its earlier project Ingress, in partnership with Nintendo and The Pokémon Company. Gameplay layered creatures onto real streets through the phone's camera and GPS, with gyms and PokéStops attached to actual landmarks.",
      "The launch was a physical event. Parks filled with players, local businesses reported foot traffic from nearby gyms, and news coverage focused as much on trespassing, accidents and server failures as on the game itself. It became one of the most downloaded apps of 2016, with more than 500 million downloads by the end of that year, and it has continued to operate since.",
    ],
    significance:
      "Pokémon GO was the first consumer demonstration that an online layer could reliably change offline behaviour — where people walk, gather and spend money.",
    impact: [
      {
        label: "Technology",
        text: "Proved location-based augmented reality could work at global scale on ordinary handsets.",
      },
      {
        label: "Culture",
        text: "Produced a rare shared public experience across ages, and a wave of civic discussion about screens in public space.",
      },
      {
        label: "Design",
        text: "Turned the map interface into a game board, with real geography as the level design.",
      },
    ],
    facts: [
      { label: "Released", value: "July 2016" },
      { label: "Developer", value: "Niantic, with Nintendo and The Pokémon Company" },
      { label: "Origin technology", value: "Niantic's Ingress location platform" },
      { label: "Downloads in 2016", value: "Over 500 million" },
    ],
    image: {
      file: "Pokémon GO logo.svg",
      alt: "The Pokémon GO logotype, with the word Pokémon in blue and GO in yellow.",
      caption: "Pokémon GO's mark. The 2016 launch made location-based play a mainstream phenomenon.",
      credit: "Vector: EEIM",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Pokémon Go"), wiki("Niantic")],
  },
  {
    id: "fortnite",
    catalogId: "GAME-025",
    title: "Fortnite",
    year: "2017 – present",
    yearNum: 2017,
    era: "mobile",
    category: "gaming",
    blurb:
      "A battle royale with a building mechanic, cross-platform play, and concerts held inside the game.",
    story: [
      "Epic Games released Fortnite in 2017; the free-to-play Battle Royale mode followed in September of that year, dropping up to one hundred players onto a shrinking island. Its construction mechanic — building ramps and walls in seconds from gathered materials — gave it a skill ceiling no competitor matched, and its bright, cartoon-like art style made it acceptable to a much wider age range.",
      "Fortnite became the test case for cross-platform play, letting console, PC and mobile users share a match, and for the seasonal live-operations model in which the map and story change on a schedule. In April 2020 Epic staged an in-game concert by Travis Scott, attended simultaneously by millions of players — an event format that turned a game world into a venue.",
    ],
    significance:
      "Fortnite redefined a game as a persistent, continuously updated social space — closer to a venue than a product — and forced the industry to accept cross-platform play.",
    impact: [
      {
        label: "Technology",
        text: "Cross-play, live seasonal updates and a free-to-play model funded by cosmetics.",
      },
      {
        label: "Culture",
        text: "Dances, skins and in-game events entered mainstream pop culture and legal disputes alike.",
      },
      {
        label: "Design",
        text: "Battle-pass progression became the dominant monetisation pattern across the industry.",
      },
    ],
    facts: [
      { label: "Released", value: "2017" },
      { label: "Battle Royale mode", value: "September 2017" },
      { label: "Developer", value: "Epic Games" },
      { label: "In-game concert", value: "April 2020, Travis Scott" },
    ],
    image: {
      file: "Fortnite logo padded.svg",
      alt: "The Fortnite logotype in white blocky letters on a dark background.",
      caption: "Fortnite's mark. The game pioneered seasonal live events inside a persistent online world.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Fortnite"), wiki("Fortnite Battle Royale")],
  },
  {
    id: "tiktok",
    catalogId: "SOC-020",
    title: "TikTok",
    year: "2017 – present",
    yearNum: 2017,
    era: "mobile",
    category: "social",
    blurb:
      "A vertical feed assembled entirely by a recommendation model, where follower count stopped mattering.",
    story: [
      "ByteDance launched Douyin in China in September 2016 and released TikTok for markets outside China in September 2017, merging it with the lip-sync app Musical.ly in August 2018. The format is vertical, full-screen short video, recorded and edited with in-app tools, sounds and effects, and it is consumed almost entirely through a swipe.",
      "The decisive difference is distribution. TikTok's For You feed ranks content largely without reference to who you follow, so an unknown account can reach millions with a first upload. It passed two billion mobile downloads in April 2020, and its mechanics reshaped every competitor: Instagram added Reels, YouTube added Shorts. It has also become a persistent subject of national-security and data-governance disputes.",
    ],
    significance:
      "TikTok completed the shift from a social graph to a recommendation graph — the audience is chosen by a model, not assembled by the person publishing.",
    impact: [
      {
        label: "Technology",
        text: "Real-time recommendation over engagement signals, delivered at global scale on mobile networks.",
      },
      {
        label: "Culture",
        text: "Sound-first virality: audio clips became the unit of the meme, driving music charts and dance trends.",
      },
      {
        label: "Design",
        text: "Full-screen vertical video with a single upward swipe removed the interface almost entirely.",
      },
    ],
    facts: [
      { label: "Douyin launched", value: "September 2016 (China)" },
      { label: "TikTok launched", value: "September 2017 (international)" },
      { label: "Musical.ly merged", value: "August 2018" },
      { label: "Two billion downloads", value: "April 2020" },
    ],
    image: {
      file: "Tiktok icon.svg",
      alt: "The TikTok app icon: a white musical-note glyph with red and cyan offsets on a black background.",
      caption: "TikTok's icon. The note shape reflects the platform's origin in sound-driven short video.",
      credit: "Vector: Editantpv",
      license: "CC0, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("TikTok"), wiki("Douyin"), wiki("Recommender system")],
  },
];
