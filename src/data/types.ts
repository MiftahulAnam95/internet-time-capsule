import type { CategoryId, EraId } from "@/config";

export interface ArtifactSource {
  label: string;
  publisher: string;
  url: string;
}

export interface ArtifactImage {
  /** Wikimedia Commons file name, resolved through Special:FilePath. */
  file: string;
  alt: string;
  caption: string;
  credit: string;
  license?: string;
  /** "contain" for logos and documents, "cover" for screenshots. */
  fit: "contain" | "cover";
}

export interface Artifact {
  /** Slug used for deep links: #/artifact/<id> */
  id: string;
  catalogId: string;
  title: string;
  year: string;
  /** Numeric sort key — the launch year unless noted otherwise. */
  yearNum: number;
  era: EraId;
  category: CategoryId;
  blurb: string;
  story: string[];
  significance: string;
  impact: { label: string; text: string }[];
  facts: { label: string; value: string }[];
  image?: ArtifactImage;
  sources: ArtifactSource[];
}

const wiki = (title: string, label?: string): ArtifactSource => ({
  label: label ?? title,
  publisher: "Wikipedia",
  url: `https://en.wikipedia.org/wiki/${title.replace(/ /g, "_")}`,
});

/** Build a stable Wikimedia Commons URL (renders SVG as PNG at the given width). */
export const commonsUrl = (file: string, width = 900) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file.replace(/ /g, "_")
  )}?width=${width}`;

export { wiki };
