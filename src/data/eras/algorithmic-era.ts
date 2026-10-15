import { wiki, type Artifact } from "../types";

/**
 * ERA IV — THE ALGORITHMIC INTERNET (2020 – PRESENT)
 * Ranking, recommendation and generated text. 3 catalogue entries.
 */
export const algorithmicEraArtifacts: Artifact[] = [
  {
    id: "generative-ai",
    catalogId: "CUL-031",
    title: "Generative AI assistants",
    year: "2022 – present",
    yearNum: 2022,
    era: "algo",
    category: "culture",
    blurb:
      "The first time the internet answered back: a text box that produces prose, code and images on request.",
    story: [
      "OpenAI released ChatGPT on 30 November 2022, built on the generative pre-trained transformer line of models the company had published from 2018 onward, with GPT-3 in 2020 and GPT-4 in March 2023. Earlier generative work — large language models, image synthesis with DALL·E and Stable Diffusion, code completion — moved from research demonstrations into consumer products within roughly two years.",
      "Adoption was unusually fast: ChatGPT reached 100 million monthly active users about two months after release. Assistants were then embedded in search, office suites, browsers, phones and image editors. The consequences are still being negotiated — over training data and copyright, over reliability and confidently wrong answers, and over what 'authored' means when a text has no single author.",
    ],
    significance:
      "Generative assistants changed the web from a thing you search to a thing that responds. They also made provenance a design requirement: watermarks, disclosures and source attribution are now interface features.",
    impact: [
      {
        label: "Technology",
        text: "Shifted computing effort toward inference, and made natural language the general-purpose interface.",
      },
      {
        label: "Culture",
        text: "Introduced a public debate about synthetic content, authorship and trust in what you read.",
      },
      {
        label: "Design",
        text: "The chat box returned as the dominant interaction pattern, thirty years after the command line.",
      },
    ],
    facts: [
      { label: "ChatGPT released", value: "30 November 2022" },
      { label: "Developer", value: "OpenAI" },
      { label: "GPT-3 paper", value: "2020" },
      { label: "Adoption", value: "100 million monthly users within two months of release" },
    ],
    image: {
      file: "ChatGPT logo.svg",
      alt: "The ChatGPT logotype: a hexagonal knot-like mark above the words ChatGPT.",
      caption: "ChatGPT's mark. Its November 2022 launch is the conventional start date of the current period.",
      credit: "Vector: Zhing Za",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("ChatGPT"),
      wiki("Generative pre-trained transformer"),
      {
        label: "OpenAI research announcements",
        publisher: "OpenAI",
        url: "https://openai.com/news/",
      },
    ],
  },
  {
    id: "fediverse-mastodon",
    catalogId: "SOC-021",
    title: "Mastodon & the Fediverse",
    year: "2016 / 2022 – present",
    yearNum: 2022,
    era: "algo",
    category: "social",
    blurb:
      "A social network with no owner: thousands of independently run servers, connected by one open protocol.",
    story: [
      "Eugen Rochko released Mastodon in 2016 as free, open-source software for running a microblogging server. Individual servers — instances — federate with each other using ActivityPub, a W3C protocol that became a recommendation in January 2018, so an account on one instance can follow and reply to accounts on any other.",
      "Mastodon had several surges in adoption, the largest beginning in 2022 as users left Twitter after its change of ownership and moderation policy. The trade-off is structural: there is no central company to appeal to, no single algorithmic feed, and moderation is decided server by server, which means both real community standards and real fragmentation.",
    ],
    significance:
      "The Fediverse is the working alternative to platform ownership. It demonstrates that a social graph can be portable, that ranking need not be commercial, and that the cost of that freedom is coordination.",
    impact: [
      {
        label: "Technology",
        text: "ActivityPub turned interoperability into a published standard other products can adopt.",
      },
      {
        label: "Culture",
        text: "Revived the early-web idea that a community can host its own space.",
      },
      {
        label: "Design",
        text: "Chronological timelines and visible moderation tools are deliberate design positions, not defaults.",
      },
    ],
    facts: [
      { label: "First release", value: "2016, by Eugen Rochko" },
      { label: "Protocol", value: "ActivityPub (W3C Recommendation, January 2018)" },
      { label: "Structure", value: "Federated, independently moderated instances" },
      { label: "Largest adoption surge", value: "From 2022" },
    ],
    image: {
      file: "Mastodon homepage – 28 June 2025.png",
      alt: "Screenshot of the Mastodon web homepage showing the project description and a preview of the interface.",
      caption: "Mastodon's project page. Each server runs its own instance; the protocol connects them.",
      credit: "Screenshot via Wikimedia Commons",
      license: "AGPL-licensed software, screenshot via Wikimedia Commons",
      fit: "cover",
    },
    sources: [
      wiki("Mastodon (social network)"),
      {
        label: "ActivityPub",
        publisher: "W3C",
        url: "https://www.w3.org/TR/activitypub/",
      },
    ],
  },
  {
    id: "ai-overviews",
    catalogId: "WEB-009",
    title: "AI Overviews",
    year: "2024 – present",
    yearNum: 2024,
    era: "algo",
    category: "web",
    blurb:
      "The answer arrived before the links. Twenty-six years of ten blue links replaced by a generated paragraph.",
    story: [
      "Google tested generative summaries inside search as the Search Generative Experience through its Labs programme in 2023, and began rolling the feature out to users in the United States in May 2024 under the name AI Overviews. A generated paragraph, with citations, appears above the results list.",
      "The change cut both ways. Widely shared incorrect and absurd answers in the first weeks of the rollout — several traceable to satirical or low-quality source pages — led Google to reduce the feature's reach for some categories of query. Publishers, meanwhile, observed traffic patterns shifting as answers were delivered on the results page itself, which revived an older argument about who benefits when a search engine summarises someone else's work.",
    ],
    significance:
      "AI Overviews mark the end of the list as the default shape of an answer. The archive of the web is now often consulted through a summary, which makes provenance and citation the central design problem of search.",
    impact: [
      {
        label: "Technology",
        text: "Retrieval plus generation became a standard architecture for consumer search products.",
      },
      {
        label: "Culture",
        text: "Made hallucination a household word and citation a consumer expectation.",
      },
      {
        label: "Design",
        text: "Answer-first layouts reduce the need to click, and therefore change how publishers are funded.",
      },
    ],
    facts: [
      { label: "Predecessor experiment", value: "Search Generative Experience, 2023" },
      { label: "Public rollout", value: "May 2024, United States" },
      { label: "Operator", value: "Google" },
      { label: "Format", value: "Generated summary with citations above results" },
    ],
    image: {
      file: "Google Search screenshot in 2026 (EN).png",
      alt: "Screenshot of a Google Search results page in English showing a generated answer summary above the list of links.",
      caption: "A contemporary Google results page: a generated overview above the traditional list of links.",
      credit: "Screenshot via Wikimedia Commons",
      fit: "cover",
    },
    sources: [
      wiki("AI Overviews"),
      {
        label: "Google Search",
        publisher: "Google",
        url: "https://www.google.com/search",
      },
    ],
  },
];
