import { wiki, type Artifact } from "../types";

/**
 * ERA II — THE SOCIAL WEB (2000–2009)
 * Profiles, feeds and the browser wars. 12 catalogue entries.
 */
export const socialWebArtifacts: Artifact[] = [
  {
    id: "wikipedia",
    catalogId: "CUL-030",
    title: "Wikipedia",
    year: "2001 – present",
    yearNum: 2001,
    era: "social",
    category: "culture",
    blurb:
      "An encyclopaedia that anyone may edit, and the largest experiment in open collaborative writing ever attempted.",
    story: [
      "Jimmy Wales and Larry Sanger launched Wikipedia on 15 January 2001 as a complement to Nupedia, an expert-written encyclopaedia that was moving too slowly. The wiki format let any visitor revise any article immediately, with every change recorded in a public history. Sanger is credited with combining 'wiki' and 'encyclopedia' for the name.",
      "The premise was controversial: quality through volume, argument and citation rather than through credentials. It worked well enough that the English edition passed one million articles in 2006, and language editions now number in the hundreds. Governance arrived in the form of policies — neutral point of view, verifiability, no original research — enforced by volunteers and, increasingly, by automated tools.",
    ],
    significance:
      "Wikipedia demonstrated that a large, unpaid, anonymous crowd could produce a reference work of usable quality, provided the process left visible traces of every disagreement.",
    impact: [
      {
        label: "Technology",
        text: "Made version control, diffs and talk pages ordinary consumer features.",
      },
      {
        label: "Culture",
        text: "Established citation and 'verifiability' as public values in online argument.",
      },
      {
        label: "Design",
        text: "Its deliberately plain layout, stable since 2002, became a benchmark for readable information design.",
      },
    ],
    facts: [
      { label: "Launched", value: "15 January 2001" },
      { label: "Founders", value: "Jimmy Wales, Larry Sanger" },
      { label: "Model", value: "Open editing with public revision history" },
      { label: "Operator", value: "Wikimedia Foundation (from 2003)" },
    ],
    image: {
      file: "Wikipedia-logo-v2-en.svg",
      alt: "The Wikipedia logo: a globe assembled from jigsaw pieces covered in glyphs from many writing systems.",
      caption: "Wikipedia's puzzle globe. Each piece carries a character from a different writing system.",
      credit: "Logo design: David Friedland and others",
      license: "CC BY-SA 3.0, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("Wikipedia"),
      {
        label: "Wikipedia — current edition",
        publisher: "Wikimedia Foundation",
        url: "https://www.wikipedia.org/",
      },
    ],
  },
  {
    id: "ipod",
    catalogId: "DEV-027",
    title: "iPod & the digital library",
    year: "2001 – 2022",
    yearNum: 2001,
    era: "social",
    category: "devices",
    blurb:
      "A hard drive, a click wheel and a sync cable: the collection of music you owned became a portable database.",
    story: [
      "Apple released the first iPod on 10 November 2001, ten months after iTunes for Macintosh. Its pitch was simple — a large capacity drive in a pocket-sized device, marketed with the claim of a thousand songs — and its scroll wheel made browsing a long list with one thumb practical for the first time.",
      "The iTunes Store opened in April 2003, selling individual tracks rather than albums and legitimising paid digital music after Napster. Syncing a library to a computer also introduced a new weekly ritual and a new object of attachment. Apple discontinued the iPod line on 10 May 2022, after an estimated 450 million units sold and more than twenty years on the market.",
    ],
    significance:
      "The iPod moved media from shelf to database and prepared people to accept that a personal collection could be licensed, streamed, and eventually gone.",
    impact: [
      {
        label: "Technology",
        text: "Sync-plus-store became the model that streaming later replaced with on-demand access.",
      },
      {
        label: "Culture",
        text: "The white earbud cable became a visible signal that someone was elsewhere.",
      },
      {
        label: "Design",
        text: "The click wheel remains a canonical example of interface matched to task: one input, thousands of items.",
      },
    ],
    facts: [
      { label: "First released", value: "10 November 2001" },
      { label: "Manufacturer", value: "Apple" },
      { label: "iTunes Store opened", value: "April 2003" },
      { label: "Line discontinued", value: "10 May 2022" },
    ],
    image: {
      file: "IPod family.png",
      alt: "Several generations of iPod arranged together, from the original click-wheel model to the iPod nano and shuffle.",
      caption: "The iPod family across two decades of hardware revisions.",
      credit: "Photo: Kyro",
      license: "CC BY 3.0, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("IPod"), wiki("ITunes Store")],
  },
  {
    id: "friendster",
    catalogId: "SOC-012",
    title: "Friendster",
    year: "2002 – 2015",
    yearNum: 2002,
    era: "social",
    category: "social",
    blurb:
      "The first social network most people used: profiles, friend requests, and testimonials written by other people about you.",
    story: [
      "Jonathan Abrams founded Friendster and opened it to the public in March 2002. The core mechanic was already recognisable — a profile, a list of confirmed friends, and the ability to browse outward through their connections — but the site was designed around dating and discovering bands, events and hobbies rather than around a news feed.",
      "Growth outran the infrastructure. Page-load problems during 2003–2004 are widely blamed for the audience that drifted to MySpace, and the company later pivoted to social gaming in Southeast Asia before shutting down as a social network in 2015. Friendster is remembered less for what it kept than for the template it handed to everyone else.",
    ],
    significance:
      "Friendster established the social-graph model: your account is defined by explicit, reciprocal connections to named people. Every network that followed inherited that assumption.",
    impact: [
      {
        label: "Technology",
        text: "Early lesson in how quickly a social graph can outgrow a database design.",
      },
      {
        label: "Culture",
        text: "'Testimonials' — public comments from friends — prefigured the endorsement and the reaction.",
      },
      {
        label: "Design",
        text: "Two-column profile layouts with a photo, a status and a friend list became standard.",
      },
    ],
    facts: [
      { label: "Launched", value: "March 2002" },
      { label: "Founder", value: "Jonathan Abrams" },
      { label: "Later pivot", value: "Social gaming, June 2011" },
      { label: "Social network closed", value: "2015" },
    ],
    image: {
      file: "Friendster logo.svg",
      alt: "The Friendster logotype, rendered in blue.",
      caption: "Friendster's mark. The network launched in March 2002 and popularised the explicit friend list.",
      credit: "Source: Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Friendster"), wiki("History of social networking")],
  },
  {
    id: "myspace",
    catalogId: "SOC-013",
    title: "MySpace",
    year: "2003 – 2009",
    yearNum: 2003,
    era: "social",
    category: "social",
    blurb:
      "Editable HTML, auto-playing music and a Top 8. The first social network to be designed by its users.",
    story: [
      "MySpace launched on 1 August 2003 and became the largest social network in the world between 2005 and 2009. News Corporation bought it in July 2005 for $580 million; by June 2006 it was reported as the most visited website in the United States, ahead of Google Search.",
      "What made it distinct was permission: users could edit the HTML and CSS of their profiles, embed music players, and rearrange their eight ranked friends. Bands used it as a distribution channel, and the site played an early role in YouTube's growth and in launching platform companies such as Zynga. The redesign that stripped away profile customisation in 2006 is usually cited as the beginning of the decline.",
    ],
    significance:
      "MySpace is the strongest historical argument that personalisation drives attachment. It gave users the tools to make a place, and it was the first network whose visual identity was made by teenagers rather than by a design team.",
    impact: [
      {
        label: "Technology",
        text: "Demonstrated the commercial value of a social graph — and the cost of uncontrolled HTML.",
      },
      {
        label: "Culture",
        text: "Made the ranked Top 8 a public social statement, and self-published music normal.",
      },
      {
        label: "Design",
        text: "The clash between user-made pages and a corporate shell is a standing lesson in platform design.",
      },
    ],
    facts: [
      { label: "Launched", value: "1 August 2003" },
      { label: "Acquired by News Corp.", value: "July 2005, $580 million" },
      { label: "Most visited US site", value: "June 2006" },
      { label: "Largest social network", value: "2005 – 2009" },
    ],
    image: {
      file: "Myspace.svg",
      alt: "The MySpace logotype, with a lowercase 'my' followed by a space symbol.",
      caption: "MySpace wordmark. Between 2005 and 2009 it was the largest social network in the world.",
      credit: "Vector: ZyMOS",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Myspace"), wiki("Top 8")],
  },
  {
    id: "facebook",
    catalogId: "SOC-014",
    title: "Facebook",
    year: "2004 – present",
    yearNum: 2004,
    era: "social",
    category: "social",
    blurb:
      "A campus directory that required a real name, opened to the public in 2006, and became the infrastructure of social identity.",
    story: [
      "Mark Zuckerberg launched thefacebook.com on 4 February 2004 for Harvard students, with Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes. Expansion to other universities, then to high schools and finally, in September 2006, to anyone over thirteen with an email address turned a closed network into a public utility.",
      "The News Feed arrived in September 2006 to loud objection, then became the default way people read the internet. The platform API in 2007 made third-party applications possible; the Like button arrived in February 2009. Facebook's scale brought both network effects and sustained scrutiny over data handling, election interference and content moderation, particularly after 2018.",
    ],
    significance:
      "Facebook made the real-name social graph the organising principle of the commercial web, and the news feed the dominant reading format — both decisions with consequences that are still being negotiated.",
    impact: [
      {
        label: "Technology",
        text: "Popularised the algorithmically ordered feed and the open platform API for social apps.",
      },
      {
        label: "Culture",
        text: "Turned events, announcements and arguments into public, quantified performances.",
      },
      {
        label: "Design",
        text: "The two-column blue-and-white profile became the most copied layout on the web.",
      },
    ],
    facts: [
      { label: "Launched", value: "4 February 2004, Harvard University" },
      { label: "Opened to the public", value: "September 2006" },
      { label: "News Feed introduced", value: "September 2006" },
      { label: "Renamed parent company", value: "Meta Platforms, 2021" },
    ],
    image: {
      file: "Facebook Logo (2019).svg",
      alt: "The Facebook logotype: white lowercase letters on a blue rounded square.",
      caption: "Facebook's mark. The service began as a Harvard campus directory in February 2004.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Facebook"), wiki("News Feed"), wiki("History of Facebook")],
  },
  {
    id: "youtube",
    catalogId: "SOC-015",
    title: "YouTube",
    year: "2005 – present",
    yearNum: 2005,
    era: "social",
    category: "social",
    blurb:
      "The first video site that ordinary people could actually upload to — starting with nineteen seconds at a zoo.",
    story: [
      "Chad Hurley, Steve Chen and Jawed Karim founded YouTube in February 2005 and opened it publicly in December; Karim's clip 'Me at the zoo', uploaded on 23 April 2005, is still the site's first video. What made it work was mundane: Flash Video encoding in the browser meant no plugin hunting, no codecs and no waiting, so anyone with a camera could publish.",
      "Google acquired the company in November 2006 for $1.65 billion in stock. Partnership revenue sharing from 2007 created a professional class of creators; live streaming, mobile uploads and short-form video followed. YouTube is now the largest archive of amateur footage in existence, and a primary source for the visual history of the last twenty years.",
    ],
    significance:
      "YouTube separated video publishing from broadcasting. It created the creator economy and made the moving image the default form of online expression.",
    impact: [
      {
        label: "Technology",
        text: "Browser-based transcoding and streaming made user video practical on mid-2000s connections.",
      },
      {
        label: "Culture",
        text: "Introduced the full-time online creator, and the comment section as a cultural form.",
      },
      {
        label: "Design",
        text: "The thumbnail grid is now the standard interface for browsing video libraries.",
      },
    ],
    facts: [
      { label: "Founded", value: "February 2005" },
      { label: "First video", value: "'Me at the zoo', 23 April 2005" },
      { label: "Acquired by Google", value: "November 2006, $1.65 billion" },
      { label: "Founders", value: "Chad Hurley, Steve Chen, Jawed Karim" },
    ],
    image: {
      file: "Youtube interface, showing search results of Burger Recipe.png",
      alt: "A screenshot of the YouTube website showing a grid of search results with thumbnails, durations and channel names.",
      caption: "YouTube's search results today — a thumbnail grid that began as a single-page upload tool in 2005.",
      credit: "Screenshot via Wikimedia Commons",
      fit: "cover",
    },
    sources: [wiki("YouTube"), wiki("Me at the zoo")],
  },
  {
    id: "twitter",
    catalogId: "SOC-016",
    title: "Twitter",
    year: "2006 – present",
    yearNum: 2006,
    era: "social",
    category: "social",
    blurb:
      "140 characters, a public timeline, and an accidental invention: the hashtag.",
    story: [
      "Twitter grew out of the podcasting company Odeo and launched publicly on 21 March 2006, built by Jack Dorsey, Biz Stone and Evan Williams, with Noah Glass an early and often uncredited contributor. The length limit was inherited from SMS; the reply syntax (@) and the retweet began as user conventions before the company implemented them.",
      "The hashtag was proposed by Chris Messina in August 2007 as a way to group messages about a shared event, and became the mechanism by which breaking news, protests and memes self-organised. Twitter covered the 2008 US election and the 2011 uprisings in ways that made it a subject of study. The service was renamed X in 2023 after its acquisition by Elon Musk in 2022, and the original bird mark was retired.",
    ],
    significance:
      "Twitter made public, real-time, short-form conversation a mass medium — and showed how much of a platform's most important features can be invented by its users rather than its designers.",
    impact: [
      {
        label: "Technology",
        text: "Pushed real-time infrastructure: streams, firehoses and rapid public search.",
      },
      {
        label: "Culture",
        text: "Made 'viral' measurable and turned breaking news into a first-person account.",
      },
      {
        label: "Design",
        text: "The reverse-chronological timeline remained the reference model long after feeds became algorithmic.",
      },
    ],
    facts: [
      { label: "Launched", value: "21 March 2006" },
      { label: "Origin", value: "Odeo side project" },
      { label: "Hashtag proposed", value: "August 2007, by Chris Messina" },
      { label: "Renamed", value: "X, July 2023" },
    ],
    image: {
      file: "Twitter bird logo.svg",
      alt: "The Twitter bird logo in blue, retired after the service was renamed X in 2023.",
      caption: "The Twitter bird, retired in 2023 — a mark that once indicated the live edge of the internet.",
      credit: "Vector via Wikimedia Commons",
      license: "CC BY-SA 4.0, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Twitter"), wiki("Hashtag"), wiki("Chris Messina")],
  },
  {
    id: "tumblr",
    catalogId: "SOC-017",
    title: "Tumblr",
    year: "2007 – present",
    yearNum: 2007,
    era: "social",
    category: "social",
    blurb:
      "A dashboard for reblogging: the network that made fandom, aesthetic and long-form internet weirdness portable.",
    story: [
      "David Karp founded Tumblr in 2007 with Marco Arment as lead developer, launching in February of that year as a microblogging platform that combined the ease of a feed with the permanence of a blog. Reblogging — reposting another person's content onto your own blog with commentary — became its defining mechanic, and chains of reblogs functioned as a distributed conversation.",
      "Tumblr became the home of fandom communities, GIF sets, aesthetic blogs and subcultures that mainstream networks ignored. Yahoo! acquired it in 2013 for about $1.1 billion; Automattic bought it in 2019, the same year a content-policy change removed adult material and prompted a visible exodus. The platform continues to operate with a much smaller, devoted population.",
    ],
    significance:
      "Tumblr proved that a social network could be organised around taste and community rather than around a real-name identity — and that such networks are fragile when ownership changes.",
    impact: [
      {
        label: "Technology",
        text: "Reblogging modelled attribution as a first-class feature of sharing.",
      },
      {
        label: "Culture",
        text: "Fandom vocabulary, GIF culture and 'aesthetic' curation spread from Tumblr to every later platform.",
      },
      {
        label: "Design",
        text: "Its single-column, mixed-media dashboard anticipated the mobile feed layout.",
      },
    ],
    facts: [
      { label: "Launched", value: "February 2007" },
      { label: "Founder", value: "David Karp, with Marco Arment" },
      { label: "Acquired by Yahoo!", value: "2013" },
      { label: "Acquired by Automattic", value: "2019" },
    ],
    image: {
      file: "Tumblr Logo.svg",
      alt: "The Tumblr logotype: a lowercase white 't' in a dark rounded square.",
      caption: "Tumblr's mark. The platform made reblogging the dominant way to share taste online.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Tumblr"), wiki("Reblogging")],
  },
  {
    id: "iphone",
    catalogId: "DEV-028",
    title: "iPhone",
    year: "2007 – present",
    yearNum: 2007,
    era: "social",
    category: "devices",
    blurb:
      "A multi-touch screen, a real browser, and a decision to have no stylus — the interface that moved the internet into a pocket.",
    story: [
      "Steve Jobs introduced the iPhone on 9 January 2007 as 'an iPod, a phone and an internet communicator' in one device, and it went on sale in the United States on 29 June 2007. The significant part for this archive is not the phone but the browser: a full web renderer, driven by pinch-to-zoom and flick scrolling on a multi-touch glass surface.",
      "The App Store opened on 10 July 2008 with around five hundred applications, replacing carrier-controlled handsets with a software marketplace. Native apps quickly displaced the mobile web for everyday tasks, and the phone's sensors — GPS, camera, accelerometer — gave the internet a location and a point of view.",
    ],
    significance:
      "The iPhone made the internet a physical object you carried. It also decided the next decade of design: touch-first, app-first, portrait-first.",
    impact: [
      {
        label: "Technology",
        text: "Multi-touch input and an app distribution model replaced the carrier-controlled handset.",
      },
      {
        label: "Culture",
        text: "Always-on connectivity became ambient rather than scheduled.",
      },
      {
        label: "Design",
        text: "Responsive web design exists largely because sites had to survive a 320-pixel-wide touchscreen.",
      },
    ],
    facts: [
      { label: "Announced", value: "9 January 2007" },
      { label: "First release", value: "29 June 2007 (United States)" },
      { label: "App Store", value: "10 July 2008" },
      { label: "Manufacturer", value: "Apple" },
    ],
    image: {
      file: "IPhone 1st Gen.svg",
      alt: "An illustration of the original iPhone seen from the front, showing the screen and the single circular home button.",
      caption: "The original iPhone (2007). One button below the glass; everything else was the interface.",
      credit: "Illustration: Rafael Fernandez",
      license: "CC BY-SA 4.0, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("IPhone (original)"), wiki("App Store (Apple)")],
  },
  {
    id: "minecraft",
    catalogId: "GAME-022",
    title: "Minecraft",
    year: "2009 / 2011 – present",
    yearNum: 2009,
    era: "social",
    category: "gaming",
    blurb:
      "A world made of blocks, no instructions, and a generation that learned to build, host servers and watch other people play.",
    story: [
      "Markus 'Notch' Persson released the first public build of Minecraft in May 2009, developed in Java and sold directly from a website before any publisher was involved. Alpha and beta versions spread through word of mouth and through early YouTube videos of players narrating what they had built. The full release came on 18 November 2011.",
      "There is no objective: the game gives you materials, a day-night cycle and other players. That openness produced servers, mods, texture packs, redstone computers built inside the game world, and a cottage industry of video and streaming content. Microsoft acquired Mojang in September 2014 for $2.5 billion, and Minecraft remains the best-selling video game of all time.",
    ],
    significance:
      "Minecraft turned the internet's audience into builders. It is the clearest case of a game becoming a platform for creativity, education and community-run infrastructure.",
    impact: [
      {
        label: "Technology",
        text: "Sold direct from a developer's website, proving a distribution path outside publishers and stores.",
      },
      {
        label: "Culture",
        text: "Let's-play video and community servers became the main way people experienced the game together.",
      },
      {
        label: "Design",
        text: "A deliberately unpolished voxel aesthetic showed that fidelity is not what makes a world convincing.",
      },
    ],
    facts: [
      { label: "First public build", value: "May 2009" },
      { label: "Creator", value: "Markus 'Notch' Persson" },
      { label: "Full release", value: "18 November 2011" },
      { label: "Mojang acquired by Microsoft", value: "September 2014, $2.5 billion" },
    ],
    image: {
      file: "Minecraft Logo-en.svg",
      alt: "The Minecraft logotype, built from blocky letters that resemble stone and wood textures.",
      caption: "Minecraft's block logotype, mirroring the game's own material vocabulary.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Minecraft"), wiki("Markus Persson")],
  },
  {
    id: "farmville",
    catalogId: "GAME-023",
    title: "FarmVille",
    year: "2009 – 2020",
    yearNum: 2009,
    era: "social",
    category: "gaming",
    blurb:
      "The social game that turned a news feed into a farm, and made 'request spam' a design problem worth solving.",
    story: [
      "Zynga released FarmVille on Facebook in June 2009 as a Flash game. Its loop was deliberately short — plough, plant, harvest, collect — and its growth mechanism was social: gifts and requests appeared in your friends' feeds, and helping each other was the fastest way to progress.",
      "For a few years it was the largest game on Facebook by a wide margin and it introduced tens of millions of people who had never bought a video game to the idea of playing one. The design also produced its own backlash: feed spam prompted Facebook to restrict application posts, and the end of Flash in December 2020 retired the original browser version.",
    ],
    significance:
      "FarmVille showed that a game could be distributed through a social graph rather than a store — and how quickly that leverage becomes noise when it is optimised without restraint.",
    impact: [
      {
        label: "Technology",
        text: "Browser-based Flash gaming at social-network scale, with virtual goods purchased inside the app.",
      },
      {
        label: "Culture",
        text: "Brought casual and older players into online gaming for the first time.",
      },
      {
        label: "Design",
        text: "Energy timers and social obligations became standard mechanics — and standard criticisms.",
      },
    ],
    facts: [
      { label: "Launched on Facebook", value: "June 2009" },
      { label: "Developer", value: "Zynga" },
      { label: "Platform", value: "Adobe Flash, in-browser" },
      { label: "Original browser version ended", value: "31 December 2020" },
    ],
    sources: [wiki("FarmVille"), wiki("Zynga")],
  },
  {
    id: "like-button",
    catalogId: "DES-034",
    title: "The Like Button",
    year: "2009 – present",
    yearNum: 2009,
    era: "social",
    category: "design",
    blurb:
      "One click replaced one sentence. The smallest interface invention with the largest measurable effect on behaviour.",
    story: [
      "Facebook introduced the Like button in February 2009 after internal debate about whether a single positive signal was enough. It solved a real problem: most people will not write a comment, but many will click. Engagement became countable, and counts became feedback.",
      "Every major platform followed with an equivalent — the heart, the star, the upvote — and the number attached to it became a legible measure of social worth. Researchers and former employees have since argued that visible counts shape what people post and how they feel afterwards, which is why several products have experimented with hiding them.",
    ],
    significance:
      "The Like button converted conversation into signal. It is the point at which the social web began optimising for measurable reaction rather than for exchange.",
    impact: [
      {
        label: "Technology",
        text: "Gave ranking systems a cheap, abundant training signal for every post on the network.",
      },
      {
        label: "Culture",
        text: "Made approval quantified and public, with well-documented effects on self-presentation.",
      },
      {
        label: "Design",
        text: "A single-tap gesture is the most reduced interaction possible — and the hardest to take back.",
      },
    ],
    facts: [
      { label: "Introduced", value: "February 2009, by Facebook" },
      { label: "Predecessors", value: "Digg's 'digg' vote (2004), Reddit's upvote (2005)" },
      { label: "Later variants", value: "Reactions, 2016" },
      { label: "Counterparts", value: "Heart (Instagram, Twitter), upvote (Reddit)" },
    ],
    image: {
      file: "Like button.png",
      alt: "A screenshot of a like button showing a thumbs-up icon and a count of likes.",
      caption: "The like control, reduced to an icon and a number.",
      credit: "Screenshot: Lord Belbury",
      license: "CC BY-SA 4.0, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Like button"), wiki("Facebook")],
  },
];
