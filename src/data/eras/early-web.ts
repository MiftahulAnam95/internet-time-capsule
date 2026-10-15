import { wiki, type Artifact } from "../types";

/**
 * ERA I — THE EARLY WEB (1989–1999)
 * Documents, directories, dial-up. 14 catalogue entries.
 */
export const earlyWebArtifacts: Artifact[] = [
  {
    id: "world-wide-web",
    catalogId: "WEB-001",
    title: "The World Wide Web",
    year: "1989 – 1991",
    yearNum: 1991,
    era: "early",
    category: "web",
    blurb:
      "A proposal for linking documents across computers became the address space we still live in — and the first web page is still online.",
    story: [
      "In March 1989, Tim Berners-Lee, then a contract engineer at CERN, submitted a proposal for an information system that would connect the laboratory's documents with hyperlinks. His manager's now-famous margin note read: “Vague, but exciting.” Working with Robert Cailliau, Berners-Lee built the four pieces the web still runs on: HTML for documents, URLs for addresses, HTTP for transfer, and the first browser-editor, called WorldWideWeb, running on a NeXT computer.",
      "On 6 August 1991 he posted a summary of the project to the Usenet newsgroup alt.hypertext — the moment the web left the laboratory. The first server was the NeXT cube itself, kept running with a hand-written label warning: “This machine is a server. DO NOT POWER DOWN!!” On 30 April 1993 CERN announced that the web software would be made available for anyone to use, without licensing fee. That single decision is why there is no one to ask permission from.",
    ],
    significance:
      "The web separated publishing from gatekeeping. Any document could point at any other document, on any machine, without an intermediary — a design that made every later network effect possible.",
    impact: [
      {
        label: "Technology",
        text: "HTML, URLs and HTTP became open standards maintained first by the W3C and, for HTML, later by the WHATWG.",
      },
      {
        label: "Culture",
        text: "Publishing stopped being an institutional privilege; a page and an address were enough.",
      },
      {
        label: "Design",
        text: "The blue underlined hyperlink became the first and most durable interface element of the medium.",
      },
    ],
    facts: [
      { label: "Proposed", value: "March 1989, CERN, Geneva" },
      { label: "Inventor", value: "Tim Berners-Lee, with Robert Cailliau" },
      { label: "First public site", value: "info.cern.ch — 6 August 1991" },
      { label: "Released royalty-free", value: "30 April 1993" },
    ],
    image: {
      file: "First Web Server.jpg",
      alt: "The NeXT computer used by Tim Berners-Lee at CERN, the first web server, with a handwritten label reading 'This machine is a server. DO NOT POWER DOWN!!'",
      caption:
        "The first web server: a NeXT cube at CERN, labelled in handwriting so that nobody would switch it off.",
      credit: "Photo: Coolcaesar",
      license: "CC BY-SA 3.0, via Wikimedia Commons",
      fit: "cover",
    },
    sources: [
      wiki("World Wide Web"),
      {
        label: "The birth of the Web",
        publisher: "CERN",
        url: "https://home.cern/science/computing/birth-web",
      },
      {
        label: "The first web page (restored)",
        publisher: "CERN / info.cern.ch",
        url: "http://info.cern.ch/hypertext/WWW/TheProject.html",
      },
    ],
  },
  {
    id: "ncsa-mosaic",
    catalogId: "WEB-002",
    title: "NCSA Mosaic",
    year: "1993",
    yearNum: 1993,
    era: "early",
    category: "web",
    blurb:
      "The browser that put pictures inside the page — and made the web legible to people who were not physicists.",
    story: [
      "Mosaic was written at the National Center for Supercomputing Applications at the University of Illinois, principally by Marc Andreessen and Eric Bina. Earlier browsers such as Berners-Lee's WorldWideWeb, ViolaWWW and Erwise already displayed graphics, but Mosaic combined inline images, clickable links, bookmarks and a history list in one program that ordinary desktop machines could run.",
      "Its 1993 releases for X Window System, Windows and Macintosh spread through universities and then offices. Distribution was free for non-commercial use, so adoption was fast and the interface conventions it set — a toolbar of back, forward, home and reload — were inherited by nearly every browser that followed.",
    ],
    significance:
      "Mosaic did not invent the web; it made the web visible. It also supplied the commercial lineage: licensed through Spyglass, its code became the basis of Microsoft's first browser.",
    impact: [
      {
        label: "Technology",
        text: "Popularised inline images and the <img> tag as the default way to design a page.",
      },
      {
        label: "Culture",
        text: "Turned 'surfing the internet' into a mainstream pastime in 1994–1995.",
      },
      {
        label: "Design",
        text: "Established the browser chrome vocabulary: toolbar, address field, home button.",
      },
    ],
    facts: [
      { label: "Developer", value: "NCSA, University of Illinois" },
      { label: "First release", value: "1993 (X, then Windows and Mac)" },
      { label: "Key authors", value: "Marc Andreessen, Eric Bina" },
      { label: "Development ended", value: "1997" },
    ],
    image: {
      file: "NCSA Mosaic Browser Screenshot.png",
      alt: "Screenshot of the NCSA Mosaic browser showing an early web page with inline images.",
      caption: "NCSA Mosaic displaying a page with inline images, the layout most people now recognise as 'a website'.",
      credit: "Screenshot: Charles Severance",
      license: "CC0, via Wikimedia Commons",
      fit: "cover",
    },
    sources: [
      wiki("NCSA Mosaic"),
      wiki("History of the web browser"),
    ],
  },
  {
    id: "netscape-navigator",
    catalogId: "WEB-003",
    title: "Netscape Navigator",
    year: "1994 – 2008",
    yearNum: 1994,
    era: "early",
    category: "web",
    blurb:
      "A startup shipped a faster browser, gave away JavaScript in ten days, and its 1995 stock listing announced the dot-com era.",
    story: [
      "Marc Andreessen left the NCSA and founded Mosaic Communications in 1994, soon renamed Netscape to settle a trademark dispute. The beta of Mosaic Netscape shipped in October 1994 and the product was renamed Navigator that December. It was noticeably faster than Mosaic, could download and render a page progressively, and supported tables, frames and background images — features designers immediately used to build more ambitious layouts.",
      "In 1995 Brendan Eich wrote the language that became JavaScript in a matter of days, and Netscape shipped it in Navigator 2.0 in December 1995; SSL, introduced in 1994, gave commerce a reason to exist online. Netscape's initial public offering on 9 August 1995 was one of the most closely watched stock debuts of the decade. The browser wars with Microsoft followed, then a 1998 antitrust case in which Netscape's bundling complaint was central.",
    ],
    significance:
      "Netscape proved the web was a commercial platform, and its decision to release its code as the Mozilla project in 1998 eventually produced Firefox — the reason the modern web has more than one dominant browser engine.",
    impact: [
      {
        label: "Technology",
        text: "JavaScript, cookies and SSL all reached the public through Navigator.",
      },
      {
        label: "Culture",
        text: "The IPO made 'internet company' a category of ambition for a generation of founders.",
      },
      {
        label: "Design",
        text: "Proprietary tags such as <blink> and <marquee> showed what uncoordinated standards do to a visual language.",
      },
    ],
    facts: [
      { label: "Company founded", value: "1994 (Mosaic Communications)" },
      { label: "Navigator 1.0", value: "December 1994" },
      { label: "IPO", value: "9 August 1995" },
      { label: "Browser support ended", value: "2008" },
    ],
    image: {
      file: "Netscape Navigator 9.png",
      alt: "Screenshot of Netscape Navigator 9 running on a desktop, the last version of the browser.",
      caption: "Netscape Navigator 9 (2007) — the final version of the browser that started the browser wars.",
      credit: "Screenshot: Upwinxp",
      license: "CC BY-SA 4.0, via Wikimedia Commons",
      fit: "cover",
    },
    sources: [wiki("Netscape Navigator"), wiki("Netscape")],
  },
  {
    id: "yahoo-directory",
    catalogId: "WEB-004",
    title: "Yahoo! Directory",
    year: "1994 – 2014",
    yearNum: 1994,
    era: "early",
    category: "web",
    blurb:
      "Before search could rank the web, humans filed it. Two doctoral students kept the index on paper, then in a database.",
    story: [
      "Jerry Yang and David Filo began compiling 'Jerry and David's Guide to the World Wide Web' in 1994 while procrastinating on their PhDs at Stanford. Renamed Yahoo!, the guide was a hierarchy of categories edited by people who looked at each site and decided where it belonged. It became the default front door for millions of new users who typed a destination rather than a question.",
      "The company incorporated in 1995 and went public in 1996, expanding into email, news, sports and chat. But a hand-edited directory cannot scale with an exponentially growing web. As automated ranking improved, browsing Yahoo!'s categories became a nostalgic habit rather than a necessity. The directory closed on 31 December 2014.",
    ],
    significance:
      "The directory represents the first answer to the internet's central problem — discovery — and its closure marks the point where algorithms replaced editorial judgement as the way we find things.",
    impact: [
      {
        label: "Technology",
        text: "Demonstrated the limits of human curation against exponential growth.",
      },
      {
        label: "Culture",
        text: "Made 'a portal' — one branded starting page — the goal of every web company.",
      },
      {
        label: "Design",
        text: "Dense blue link lists on grey backgrounds became the visual signature of 1990s information design.",
      },
    ],
    facts: [
      { label: "Started", value: "1994, Stanford University" },
      { label: "Founders", value: "Jerry Yang, David Filo" },
      { label: "Incorporated", value: "March 1995" },
      { label: "Directory closed", value: "31 December 2014" },
    ],
    sources: [wiki("Yahoo! Directory"), wiki("Yahoo!")],
  },
  {
    id: "geocities",
    catalogId: "WEB-005",
    title: "GeoCities",
    year: "1994 – 2009",
    yearNum: 1994,
    era: "early",
    category: "web",
    blurb:
      "Free hosting organised into imaginary neighbourhoods, where a page was built from guestbooks, hit counters and animated GIFs.",
    story: [
      "Founded in 1994 by David Bohnett and John Rezner as Beverly Hills Internet, the service was renamed GeoCities in 1995. Users chose a 'neighbourhood' — SiliconValley for computing, Hollywood for film, TimesSquare for gaming — and received an address that described the place rather than the person: a page might live at geocities.com/SiliconValley/Port/1234.",
      "The visual culture that followed was exuberant and unstandardised: tiled backgrounds, webrings, guestbooks, MIDI music that started without warning, and 'under construction' signs that were often sincere. Yahoo! acquired GeoCities in 1999 and shut it down on 26 October 2009, deleting millions of pages. Volunteer groups such as Archive Team rescued as much of it as they could before the servers went quiet.",
    ],
    significance:
      "GeoCities was the first mass platform for amateur publishing on the web. Its deletion is the founding case study in why web preservation matters — and the reason the Wayback Machine feels like essential infrastructure rather than a curiosity.",
    impact: [
      {
        label: "Technology",
        text: "Proved that free hosting plus advertising could fund millions of personal sites.",
      },
      {
        label: "Culture",
        text: "Created the web's first folk design language, made entirely by non-designers.",
      },
      {
        label: "Design",
        text: "The 'neighbourhood' address is an early, and arguably warmer, alternative to the profile URL.",
      },
    ],
    facts: [
      { label: "Founded", value: "1994 (as Beverly Hills Internet)" },
      { label: "Founders", value: "David Bohnett, John Rezner" },
      { label: "Acquired by Yahoo!", value: "1999" },
      { label: "Shut down", value: "26 October 2009" },
    ],
    image: {
      file: "GeoCities logo.svg",
      alt: "The GeoCities logotype: a stylised globe with the words GeoCities beneath it.",
      caption: "GeoCities logotype. The service organised free personal pages into themed 'neighbourhoods'.",
      credit: "Source: Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("GeoCities"),
      {
        label: "GeoCities archive project",
        publisher: "Archive Team",
        url: "https://www.archiveteam.org/index.php/GeoCities",
      },
    ],
  },
  {
    id: "windows-95",
    catalogId: "DEV-026",
    title: "Windows 95",
    year: "1995",
    yearNum: 1995,
    era: "early",
    category: "devices",
    blurb:
      "The operating system that taught hundreds of millions of people what a Start button was — and shipped the web as an accessory.",
    story: [
      "Released on 24 August 1995, Windows 95 replaced the program-manager view of Windows 3.x with a desktop metaphor: a Start button, a taskbar with running programs, long file names, and a Recycle Bin. It introduced the interface grammar most desktop users still rely on thirty years later, and it was launched with a marketing campaign built around the Rolling Stones' 'Start Me Up'.",
      "Its significance for this archive is the connection it carried. Microsoft Network (MSN) launched with the product as a dial-up service, and the Internet Explorer browser arrived in the Plus! add-on pack in 1995, then in later versions of the OS. For many households, 'getting on the internet' meant installing Windows 95, buying a modem, and typing a phone number into a dialog box.",
    ],
    significance:
      "Windows 95 made the internet a consumer feature rather than a specialist tool — and by tying a browser to an operating system, it set up the legal battles that defined the next decade of the web.",
    impact: [
      {
        label: "Technology",
        text: "32-bit preemptive multitasking and plug-and-play hardware moved the mass market forward.",
      },
      {
        label: "Culture",
        text: "Midnight launches and queueing outside electronics stores became a software ritual.",
      },
      {
        label: "Design",
        text: "The Start menu is one of the longest-lived interface inventions in computing.",
      },
    ],
    facts: [
      { label: "Released", value: "24 August 1995" },
      { label: "Developer", value: "Microsoft" },
      { label: "Introduced", value: "Start button, taskbar, long file names" },
      { label: "First-month sales", value: "Microsoft reported ~1 million copies in four days" },
    ],
    image: {
      file: "Windows95-4.0.302-Desktop, start button.png",
      alt: "The Windows 95 desktop with the Start menu open, showing the program list and the taskbar at the bottom of the screen.",
      caption: "Windows 95 desktop with the Start menu open — the interface pattern still in use today.",
      credit: "Screenshot: BetaWik",
      license: "Public domain, via Wikimedia Commons",
      fit: "cover",
    },
    sources: [wiki("Windows 95"), wiki("Start menu")],
  },
  {
    id: "internet-explorer",
    catalogId: "WEB-006",
    title: "Internet Explorer",
    year: "1995 – 2022",
    yearNum: 1995,
    era: "early",
    category: "web",
    blurb:
      "A browser licensed from Mosaic, bundled with Windows, and eventually retired with a public farewell.",
    story: [
      "Microsoft's first browser shipped in August 1995, built on code licensed from Spyglass, which had licensed NCSA Mosaic. From Internet Explorer 3 in 1996 the browser was distributed with Windows itself, which is how it overtook Netscape so quickly. By the early 2000s IE accounted for the overwhelming majority of measured browser use, and web developers increasingly built for one rendering engine and tested everywhere else.",
      "The United States v. Microsoft case, filed in 1998, centred partly on that bundling. Later versions stagnated while Firefox (2004), Chrome (2008) and mobile browsers moved faster on standards. Microsoft replaced IE with Edge in 2015 and retired Internet Explorer on 15 June 2022, keeping an 'IE mode' inside Edge for legacy corporate sites. Its end was marked online by a memorial page and a funeral-shaped cake in South Korea.",
    ],
    significance:
      "Internet Explorer is the clearest example of distribution winning a technology market — and of how a single dominant engine can slow down an entire open platform.",
    impact: [
      {
        label: "Technology",
        text: "Its proprietary extensions (VBScript, ActiveX, conditional comments) fragmented front-end development for years.",
      },
      {
        label: "Culture",
        text: "'Best viewed in Internet Explorer' badges are now period pieces of the browser wars.",
      },
      {
        label: "Design",
        text: "IE6's quirks mode forced a decade of layout hacks and gave rise to the profession of cross-browser testing.",
      },
    ],
    facts: [
      { label: "First release", value: "August 1995" },
      { label: "Origin", value: "Licensed from Spyglass Mosaic" },
      { label: "Final version", value: "Internet Explorer 11 (2013)" },
      { label: "Retired", value: "15 June 2022" },
    ],
    image: {
      file: "Internet Explorer 11 on Windows 8.1.png",
      alt: "Screenshot of Internet Explorer 11 running on Windows 8.1, the final version of the browser.",
      caption: "Internet Explorer 11 on Windows 8.1 — the last version before retirement in 2022.",
      credit: "Screenshot: Enterprise B",
      license: "Public domain, via Wikimedia Commons",
      fit: "cover",
    },
    sources: [wiki("Internet Explorer"), wiki("United States v. Microsoft Corp.")],
  },
  {
    id: "icq",
    catalogId: "SOC-010",
    title: "ICQ",
    year: "1996 – 2024",
    yearNum: 1996,
    era: "early",
    category: "social",
    blurb:
      "'I Seek You' invented presence: a list of people, online right now, who would answer if you typed.",
    story: [
      "ICQ was launched in November 1996 by Mirabilis, a small Israeli company founded by Arik Vardi, Yair Goldfinger, Sefi Vigiser and Amnon Amir. It brought real-time text messaging to the desktop: a buddy list that showed who was online, a distinctive notification sound, and a numeric user identifier — the UIN — that people exchanged like phone numbers.",
      "AOL acquired Mirabilis in 1998, and ICQ's ideas were absorbed into AOL Instant Messenger and MSN Messenger, then into every chat product since. The client survived ownership changes and reboots for nearly three decades before being discontinued on 26 June 2024.",
    ],
    significance:
      "ICQ's lasting invention is presence — the ambient sense of who is available. Every 'active now' dot, read receipt and typing indicator descends from that buddy list.",
    impact: [
      {
        label: "Technology",
        text: "Early always-on client-server messaging over dial-up connections.",
      },
      {
        label: "Culture",
        text: "Exchanging UINs became a form of friendship ritual among teenagers.",
      },
      {
        label: "Design",
        text: "The flower icon and the 'Uh-oh' sound are among the first recognisable pieces of software branding.",
      },
    ],
    facts: [
      { label: "Launched", value: "November 1996" },
      { label: "Developer", value: "Mirabilis (Israel)" },
      { label: "Acquired by AOL", value: "1998" },
      { label: "Discontinued", value: "26 June 2024" },
    ],
    image: {
      file: "Logo ICQ.svg",
      alt: "The ICQ logo: a green and yellow flower-like mark with the letters ICQ.",
      caption: "ICQ's flower mark — the first global instant-messaging identity.",
      credit: "Vector: Sebastian Wallroth",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("ICQ"), wiki("Instant messaging")],
  },
  {
    id: "macromedia-flash",
    catalogId: "DES-032",
    title: "Macromedia Flash",
    year: "1996 – 2020",
    yearNum: 1996,
    era: "early",
    category: "design",
    blurb:
      "Vector animation, games and whole websites inside a plugin — the loudest, most inventive layer of the early web.",
    story: [
      "FutureWave's FutureSplash Animator was acquired by Macromedia in late 1996 and rebranded Flash. Because it drew vectors rather than bitmaps, animation stayed small enough to stream over a modem, and because it ran in a plugin, it bypassed the limited HTML of the time. Sites gained sound, motion, full-screen intros and games.",
      "An entire amateur culture grew around it — Newgrounds, Homestar Runner, countless Flash games — and a generation of animators and interface designers learned their craft in the Flash authoring tool. The platform's problems were equally real: accessibility, text selection, deep linking and battery life all suffered. Apple declined to support Flash on the iPhone in 2007; Adobe bought Macromedia in 2005, announced Flash's end of life in 2017, and Flash Player stopped running content on 31 December 2020. Emulators such as Ruffle now preserve much of the catalogue.",
    ],
    significance:
      "Flash was the web's first rich-media runtime. It created a body of work that could not be expressed in HTML for another decade — and then most of it nearly disappeared when the plugin was withdrawn.",
    impact: [
      {
        label: "Technology",
        text: "Introduced the browser plugin as an application platform, later displaced by HTML5 video, canvas and WebGL.",
      },
      {
        label: "Culture",
        text: "Powered the first generation of user-made web animation and browser games.",
      },
      {
        label: "Design",
        text: "Motion design became a web discipline because Flash made timelines and tweens accessible.",
      },
    ],
    facts: [
      { label: "Origin", value: "FutureSplash Animator, FutureWave, 1996" },
      { label: "Acquired by Adobe", value: "2005" },
      { label: "End of life announced", value: "2017" },
      { label: "Player blocked", value: "31 December 2020" },
    ],
    image: {
      file: "Adobe Flash Player 32.svg",
      alt: "The Adobe Flash Player logo: a red square containing a stylised white lowercase f.",
      caption: "Flash Player mark. The plugin's removal in 2020 orphaned a huge amount of web culture.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("Adobe Flash"),
      {
        label: "Flash preservation with Ruffle",
        publisher: "Ruffle",
        url: "https://ruffle.rs/",
      },
    ],
  },
  {
    id: "google-search",
    catalogId: "WEB-007",
    title: "Google Search",
    year: "1998 – present",
    yearNum: 1998,
    era: "early",
    category: "web",
    blurb:
      "A ranking idea from a Stanford dorm room replaced the hand-edited directory with a single box and a list of ten blue links.",
    story: [
      "Larry Page and Sergey Brin began the BackRub research project at Stanford in 1996, exploring the insight that links are votes: a page that many important pages point to is probably important. That algorithm, PageRank, became Google, incorporated on 4 September 1998, operating first from a garage in Menlo Park, California.",
      "The interface was a deliberate refusal of the portal model. One input field, ten results, almost no advertising chrome at launch. As the index grew to billions of pages, the same box absorbed image, news, map and video search, and Google became the primary entry point to the web — a position that made search engine optimisation an industry and 'to google' a verb.",
    ],
    significance:
      "Search reorganised the web around relevance rather than hierarchy, and made ranking algorithms the most powerful editors in publishing history.",
    impact: [
      {
        label: "Technology",
        text: "Established large-scale distributed crawling, indexing and ranking as core infrastructure.",
      },
      {
        label: "Culture",
        text: "Created 'search-first' research habits and the expectation of an instant answer.",
      },
      {
        label: "Design",
        text: "The results page — ten blue links and a next button — became a template copied for two decades.",
      },
    ],
    facts: [
      { label: "Research project", value: "BackRub, Stanford, 1996" },
      { label: "Company incorporated", value: "4 September 1998" },
      { label: "Founders", value: "Larry Page, Sergey Brin" },
      { label: "Domain registered", value: "google.com, 15 September 1997" },
    ],
    image: {
      file: "Google 2015 logo.svg",
      alt: "The Google logotype in its 2015 sans-serif form, coloured blue, red, yellow and green.",
      caption: "Google's logotype. The product began as an academic ranking experiment in 1996.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("Google Search"),
      wiki("PageRank"),
      {
        label: "Google corporate history",
        publisher: "Google / Alphabet",
        url: "https://about.google/intl/en_us/company-history/",
      },
    ],
  },
  {
    id: "wayback-machine",
    catalogId: "WEB-008",
    title: "The Wayback Machine",
    year: "1996 / 2001 – present",
    yearNum: 1996,
    era: "early",
    category: "web",
    blurb:
      "An attempt to keep the web from disappearing: hundreds of billions of pages, crawled and timestamped, browsable as history.",
    story: [
      "Brewster Kahle founded the Internet Archive in 1996 with the argument that the web was becoming the dominant form of publication and that, unlike paper, it had no library keeping copies. Crawling began almost immediately; the public browsing interface, the Wayback Machine, opened in October 2001.",
      "The Archive now holds hundreds of billions of web pages plus software, audio, books and video. Anyone can request a snapshot with 'Save Page Now'. For historians, journalists and former web designers, it is the only way to see a deleted site — including the vanished neighbourhoods of GeoCities and the early interfaces of the platforms in this archive.",
    ],
    significance:
      "The Wayback Machine is the proof that the web is not permanent by default. Without deliberate archiving, most of its history would already be gone.",
    impact: [
      {
        label: "Technology",
        text: "Pioneered large-scale web crawling and the WARC storage format used by archives worldwide.",
      },
      {
        label: "Culture",
        text: "Made 'the old internet' a place people can actually visit, not just remember.",
      },
      {
        label: "Design",
        text: "Provides the reference material for studying how interface styles changed year by year.",
      },
    ],
    facts: [
      { label: "Archive founded", value: "May 1996" },
      { label: "Founder", value: "Brewster Kahle" },
      { label: "Wayback opened", value: "October 2001" },
      { label: "Access", value: "Free, no account required" },
    ],
    image: {
      file: "Wayback Machine logo 2010.svg",
      alt: "The Internet Archive Wayback Machine logo, showing a stylised clock-like arch.",
      caption: "Wayback Machine mark (2010). The service stores timestamped snapshots of the public web.",
      credit: "Source: Wikimedia Commons",
      license: "Public domain, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("Wayback Machine"),
      {
        label: "Internet Archive",
        publisher: "Internet Archive",
        url: "https://archive.org/web/",
      },
    ],
  },
  {
    id: "msn-messenger",
    catalogId: "SOC-011",
    title: "MSN Messenger",
    year: "1999 – 2014",
    yearNum: 1999,
    era: "early",
    category: "social",
    blurb:
      "Nudges, display pictures, away messages and the small cruelty of appearing offline to one person only.",
    story: [
      "Microsoft launched MSN Messenger Service in May 1999 to compete with AOL Instant Messenger. The two services briefly interoperated before AOL blocked third-party clients, a dispute that shows how early the industry understood that social graphs are the real asset.",
      "What followed was the definitive chat client for a generation: custom display pictures, away and busy statuses, winks and nudges that shook the other person's window, and long conversations left open all day in a school computer lab or an office. Renamed Windows Live Messenger in 2005, it was discontinued in 2014 as Microsoft consolidated messaging into Skype.",
    ],
    significance:
      "Messenger normalised continuous, ambient conversation online — the shift from 'logging on to talk' to simply being available, which social feeds and group chats would later inherit.",
    impact: [
      {
        label: "Technology",
        text: "Client-server instant messaging with presence became a standard feature of consumer software.",
      },
      {
        label: "Culture",
        text: "Status messages were an early, low-effort form of self-presentation.",
      },
      {
        label: "Design",
        text: "The nudge — a physical shake of the window — is still cited as a masterclass in expressive interaction design.",
      },
    ],
    facts: [
      { label: "Launched", value: "May 1999" },
      { label: "Developer", value: "Microsoft" },
      { label: "Renamed", value: "Windows Live Messenger, 2005" },
      { label: "Discontinued", value: "2014 (migrated to Skype)" },
    ],
    image: {
      file: "MSN messenger icon.png",
      alt: "The MSN Messenger icon: a stylised butterfly-like figure in blue and green.",
      caption: "MSN Messenger icon. The client defined online conversation for much of the 2000s.",
      credit: "Source: Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Windows Live Messenger"), wiki("MSN Messenger")],
  },
  {
    id: "napster",
    catalogId: "CUL-029",
    title: "Napster",
    year: "1999 – 2001",
    yearNum: 1999,
    era: "early",
    category: "culture",
    blurb:
      "Peer-to-peer file sharing turned a dorm-room program into the largest music library on earth — and a federal court case.",
    story: [
      "Shawn Fanning wrote the first version of Napster while a student at Northeastern University, and the service launched in June 1999 with Sean Parker. It indexed MP3 files stored on users' own computers: a central directory, but no central storage. Copying a song stopped being a purchase and became a transfer between two people.",
      "The recording industry sued in December 1999. In February 2001 the Ninth Circuit Court of Appeals largely upheld an injunction against the service, and Napster shut down its network in July 2001. The habits it created did not disappear — they moved into BitTorrent, then into the legal catalogues of iTunes and, eventually, streaming.",
    ],
    significance:
      "Napster was the first mass demonstration that distribution, not manufacture, was the music industry's real business. Every streaming service since is an answer to it.",
    impact: [
      {
        label: "Technology",
        text: "Popularised peer-to-peer architecture and exposed how little control copyright holders had over copies.",
      },
      {
        label: "Culture",
        text: "Made the unlimited shared library a normal expectation of media consumption.",
      },
      {
        label: "Design",
        text: "Its two-pane search-and-download interface became the template for a decade of file-sharing clients.",
      },
    ],
    facts: [
      { label: "Launched", value: "June 1999" },
      { label: "Creator", value: "Shawn Fanning, with Sean Parker" },
      { label: "Appeal ruling", value: "February 2001, Ninth Circuit" },
      { label: "Service shut down", value: "July 2001" },
    ],
    image: {
      file: "Napster logo.svg",
      alt: "The Napster logotype with the cat-with-headphones mark above it.",
      caption: "Napster's mark. The service operated for roughly two years before a court injunction ended it.",
      credit: "Vector: Jusore",
      license: "Source: Wikimedia Commons",
      fit: "contain",
    },
    sources: [wiki("Napster"), wiki("A&M Records, Inc. v. Napster, Inc.")],
  },
  {
    id: "emoji",
    catalogId: "DES-033",
    title: "Emoji",
    year: "1999 – present",
    yearNum: 1999,
    era: "early",
    category: "design",
    blurb:
      "176 twelve-by-twelve pixel drawings made for Japanese mobile phones became a global writing system.",
    story: [
      "Shigetaka Kurita designed the first emoji set in 1999 for NTT DoCoMo's i-mode mobile internet platform: 176 characters at 12×12 pixels, covering weather, traffic, moons, hearts and a few faces. The constraint was technical — a tiny screen and a tiny data allowance — and the result was a compact pictographic shorthand.",
      "The sets stayed incompatible between Japanese carriers until Unicode began encoding emoji in 2010, giving each character a code point that works everywhere. Apple exposed an emoji keyboard in iOS 5 in 2011, and adoption became global. In 2015 the Museum of Modern Art in New York acquired Kurita's original set, treating it as a design artefact rather than a novelty.",
    ],
    significance:
      "Emoji are the first writing system to be designed, standardised and adopted worldwide within a single human lifetime — an interface invention with the reach of punctuation.",
    impact: [
      {
        label: "Technology",
        text: "Cross-platform text required Unicode standardisation, completed from 2010 onward.",
      },
      {
        label: "Culture",
        text: "Gave tone and gesture back to plain text, changing how arguments, apologies and jokes read.",
      },
      {
        label: "Design",
        text: "Proved that meaning can be carried by very small, very constrained drawings.",
      },
    ],
    facts: [
      { label: "First set", value: "1999, 176 characters at 12×12 px" },
      { label: "Designer", value: "Shigetaka Kurita" },
      { label: "Platform", value: "NTT DoCoMo i-mode" },
      { label: "Unicode adoption", value: "From 2010" },
    ],
    image: {
      file: "Popular Emoji Groups Noto Color Emoji.svg",
      alt: "A grid of commonly used colour emoji rendered in Google's Noto emoji set.",
      caption: "A selection of standardised emoji. Kurita's original 1999 set contained 176 monochrome icons.",
      credit: "Noto Color Emoji, Google",
      license: "SIL Open Font License, via Wikimedia Commons",
      fit: "contain",
    },
    sources: [
      wiki("Emoji"),
      {
        label: "Emoji reference and history",
        publisher: "Emojipedia",
        url: "https://emojipedia.org/",
      },
    ],
  },
];

/** Yahoo! Directory intentionally has no image: its logotype is not
 *  verifiably free-licensed on Commons, so the archive renders a
 *  curator's plate for that entry instead of an unattributed file. */
