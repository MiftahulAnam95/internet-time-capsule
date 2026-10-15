import type { CategoryId, EraId } from "@/config";
import { categories, eras } from "@/config";
import type { Artifact } from "./types";
import { algorithmicEraArtifacts } from "./eras/algorithmic-era";
import { earlyWebArtifacts } from "./eras/early-web";
import { mobileEraArtifacts } from "./eras/mobile-era";
import { socialWebArtifacts } from "./eras/social-web";

/** One source of truth. Timeline, collection, search, detail and comparison
 *  views all read from this array — never from duplicated markup. */
export const artifacts: Artifact[] = [
  ...earlyWebArtifacts,
  ...socialWebArtifacts,
  ...mobileEraArtifacts,
  ...algorithmicEraArtifacts,
];

export type SortKey = "year-asc" | "year-desc" | "title" | "catalog";

export interface Filters {
  query: string;
  categories: CategoryId[];
  eras: EraId[];
  sort: SortKey;
}

export const defaultFilters: Filters = {
  query: "",
  categories: [],
  eras: [],
  sort: "year-asc",
};

export const featuredArtifact =
  artifacts.find((a) => a.id === "world-wide-web") ?? artifacts[0];

export const getArtifact = (id: string): Artifact | undefined =>
  artifacts.find((a) => a.id === id);

export const artefactsByEra = (era: EraId): Artifact[] =>
  artifacts.filter((a) => a.era === era);

/** Ordered by launch year — used for previous/next navigation in the reader. */
export const chronological = [...artifacts].sort((a, b) => a.yearNum - b.yearNum);

export const neighbours = (id: string) => {
  const index = chronological.findIndex((a) => a.id === id);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? chronological[index - 1] : undefined,
    next: index < chronological.length - 1 ? chronological[index + 1] : undefined,
  };
};

const matchesQuery = (a: Artifact, q: string) => {
  if (!q.trim()) return true;
  const needle = q.trim().toLowerCase();
  const haystack = [
    a.title,
    a.blurb,
    a.year,
    a.catalogId,
    a.significance,
    a.story.join(" "),
    ...a.impact.map((i) => i.text),
    ...a.facts.map((f) => `${f.label} ${f.value}`),
  ]
    .join(" ")
    .toLowerCase();
  return needle
    .split(/\s+/)
    .every((word) => haystack.includes(word));
};

export const applyFilters = (list: Artifact[], f: Filters): Artifact[] => {
  const result = list.filter(
    (a) =>
      matchesQuery(a, f.query) &&
      (f.categories.length === 0 || f.categories.includes(a.category)) &&
      (f.eras.length === 0 || f.eras.includes(a.era))
  );

  switch (f.sort) {
    case "year-desc":
      return [...result].sort((a, b) => b.yearNum - a.yearNum || a.title.localeCompare(b.title));
    case "title":
      return [...result].sort((a, b) => a.title.localeCompare(b.title));
    case "catalog":
      return [...result].sort((a, b) => a.catalogId.localeCompare(b.catalogId));
    case "year-asc":
    default:
      return [...result].sort((a, b) => a.yearNum - b.yearNum || a.title.localeCompare(b.title));
  }
};

/** Real counts, computed from the data — never hard-coded. */
export const archiveStats = {
  artifacts: artifacts.length,
  eras: eras.length,
  collections: categories.length,
  withImages: artifacts.filter((a) => a.image).length,
  sources: artifacts.reduce((n, a) => n + a.sources.length, 0),
  spanFrom: Math.min(...artifacts.map((a) => a.yearNum)),
  spanTo: new Date().getFullYear(),
};

/** Deterministic pseudo-random pick that avoids repeating the previous entry. */
export const pickRandom = (excludeId?: string): Artifact => {
  const pool = artifacts.filter((a) => a.id !== excludeId);
  const list = pool.length ? pool : artifacts;
  return list[Math.floor(Math.random() * list.length)];
};

export const deepLink = (id: string) => `${location.pathname}${location.search}#/artifact/${id}`;
