export type { Lang, NavItem, Strings } from "./types";
export { en } from "./en";
export { id } from "./id";
export { LanguageProvider, useLanguage, languageStorageKey } from "./LanguageContext";
export {
  localizedSite,
  localizedEras,
  localizedEra,
  localizedCategories,
  localizedCategory,
  type SiteText,
} from "./content";
export { localizedComparisons, idComparisonSource } from "./comparisons";
export { artifactTextId, localizeArtifact, localizeLabel } from "./artifacts";
