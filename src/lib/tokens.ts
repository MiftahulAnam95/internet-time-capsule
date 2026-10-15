import type { EraId } from "@/config";

/** Muted, archival accents — one per era. Used sparingly for era markers,
 *  plate tints and timeline segments. Never as a headline gradient. */
export const eraAccent: Record<EraId, string> = {
  early: "#a8703f",
  social: "#4e6e81",
  mobile: "#5f7a55",
  algo: "#7a5c86",
};

/** Initials used by the curator's plate when no verified image exists. */
export const monogram = (title: string) =>
  title
    .replace(/^The\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
