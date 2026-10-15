import type { Artifact } from "@/data/types";
import type { ArtifactIdText, Lang } from "./types";
import { earlyWebTextId } from "./records/early-web";
import { socialWebTextId } from "./records/social-web";
import { mobileEraTextId } from "./records/mobile-era";
import { algorithmicEraTextId } from "./records/algorithmic-era";

/**
 * Full Indonesian text for every catalogue record.
 *
 * The era files under `./records` hold the complete translation — blurb,
 * curatorial note, story, impact prose, fact values, and image alt/caption —
 * so cards, indexes, the reader, and search all read fully in Indonesian.
 * Sources stay in their source language (English); proper nouns are untouched.
 */
export const artifactTextId: Record<string, ArtifactIdText> = {
  ...earlyWebTextId,
  ...socialWebTextId,
  ...mobileEraTextId,
  ...algorithmicEraTextId,
};

/** Return the record with its Indonesian text applied (if any). */
export const localizeArtifact = (artifact: Artifact, lang: Lang): Artifact => {
  if (lang !== "id") return artifact;
  const text = artifactTextId[artifact.id];
  if (!text) return artifact;
  return {
    ...artifact,
    blurb: text.blurb,
    significance: text.significance,
    story: text.story,
    impact: text.impact,
    facts: text.facts,
    image:
      text.image && artifact.image
        ? { ...artifact.image, alt: text.image.alt, caption: text.image.caption }
        : artifact.image,
  };
};

/* ---------------- Record-card labels ---------------- */

const impactLabelId: Record<string, string> = {
  Technology: "Teknologi",
  Culture: "Budaya",
  Design: "Desain",
};

const factLabelId: Record<string, string> = {
  Launched: "Diluncurkan",
  Developer: "Pengembang",
  Founders: "Pendiri",
  Founder: "Pendiri",
  Founded: "Didirikan",
  "First release": "Rilis pertama",
  Released: "Dirilis",
  Origin: "Asal",
  "Shut down": "Ditutup",
  Renamed: "Berganti nama",
  Platform: "Platform",
  Operator: "Operator",
  Manufacturer: "Produsen",
  Introduced: "Diperkenalkan",
  Discontinued: "Dihentikan",
  Creator: "Pencipta",
  Announced: "Diumumkan",
  Designer: "Perancang",
  Format: "Format",
  Model: "Model",
  Protocol: "Protokol",
  Structure: "Struktur",
  Started: "Dimulai",
  Retired: "Dipensiunkan",
  Incorporated: "Berbadan hukum",
  "Company founded": "Perusahaan didirikan",
  "Company incorporated": "Perusahaan berbadan hukum",
  "Opened to the public": "Dibuka untuk publik",
  "First public site": "Situs publik pertama",
  "Public rollout": "Peluncuran publik",
  "Full release": "Rilis penuh",
  "First released": "Pertama dirilis",
  "First public build": "Build publik pertama",
  "First video": "Video pertama",
  "First set": "Set pertama",
  "Final version": "Versi final",
  "Development ended": "Pengembangan berakhir",
  "Browser support ended": "Dukungan peramban berakhir",
  "End of life announced": "Akhir hayat diumumkan",
  "Service shut down": "Layanan ditutup",
  "Social network closed": "Jejaring sosial ditutup",
  "Original browser version ended": "Versi peramban asli berakhir",
  "Directory closed": "Direktori ditutup",
  "Line discontinued": "Lini dihentikan",
  "Player blocked": "Pemutar diblokir",
  "Archive founded": "Arsip didirikan",
  "Domain registered": "Domain didaftarkan",
  "Wayback opened": "Wayback dibuka",
  "Research project": "Proyek riset",
  Predecessors: "Pendahulu",
  "Predecessor experiment": "Eksperimen pendahulu",
  Counterparts: "Padanan",
  "Later variants": "Varian kemudian",
  "Later pivot": "Putar haluan",
  Adoption: "Adopsi",
  Inventor: "Penemu",
  Proposed: "Diusulkan",
  "Key authors": "Penulis utama",
  "First-month sales": "Penjualan bulan pertama",
  "In-game concert": "Konser dalam gim",
  "Battle Royale mode": "Mode Battle Royale",
  "Hashtag proposed": "Tagar diusulkan",
  "News Feed introduced": "Kabar Beranda diperkenalkan",
  "Stories added": "Stories ditambahkan",
  "Musical.ly merged": "Musical.ly digabung",
  "Renamed parent company": "Induk berganti nama",
  "Released royalty-free": "Dibebaskan tanpa royalti",
  "Largest adoption surge": "Lonjakan adopsi terbesar",
  "Largest social network": "Jejaring sosial terbesar",
  "OpenAI research announcements": "Pengumuman riset OpenAI",
  "ChatGPT released": "ChatGPT dirilis",
  "GPT-3 paper": "Makalah GPT-3",
  "TikTok launched": "TikTok diluncurkan",
  "Douyin launched": "Douyin diluncurkan",
  "Launched on Facebook": "Diluncurkan di Facebook",
  "Launched (iOS)": "Diluncurkan (iOS)",
  "Android release": "Rilis Android",
  "iOS launch": "Peluncuran iOS",
  "App Store": "App Store",
  "iTunes Store opened": "iTunes Store dibuka",
  "Navigator 1.0": "Navigator 1.0",
  "Most visited US site": "Situs AS paling dikunjungi",
  "Two billion downloads": "Dua miliar unduhan",
  "Downloads in 2016": "Unduhan pada 2016",
  "Unicode adoption": "Adopsi Unicode",
  "Appeal ruling": "Putusan banding",
  IPO: "IPO",
};

/**
 * Translate an impact/fact label. Unknown labels fall back to the original —
 * most of those are proper-noun phrases ("Acquired by Google") that stay
 * legible in either language.
 */
export const localizeLabel = (label: string, lang: Lang): string => {
  if (lang !== "id") return label;
  const direct = impactLabelId[label] ?? factLabelId[label];
  if (direct) return direct;
  const acquired = label.match(/^Acquired by (.+)$/);
  if (acquired) return `Diakuisisi ${acquired[1]}`;
  const acquiredBy = label.match(/^(.+) acquired by (.+)$/);
  if (acquiredBy) return `${acquiredBy[1]} diakuisisi ${acquiredBy[2]}`;
  return label;
};
