/** Supported interface languages. */
export type Lang = "id" | "en";

/**
 * Full Indonesian version of one catalogue record. Structural fields (id,
 * dates, image file, sources) always come from the English source record —
 * only prose is mirrored here, paragraph for paragraph.
 */
export interface ArtifactIdText {
  blurb: string;
  significance: string;
  story: string[];
  impact: { label: string; text: string }[];
  facts: { label: string; value: string }[];
  /** Required when the source record has an image; omitted otherwise. */
  image?: { alt: string; caption: string };
}

export interface NavItem {
  id: string;
  label: string;
}

/**
 * Every user-facing UI string, keyed by section.
 * `en.ts` and `id.ts` must both satisfy this interface —
 * TypeScript guarantees neither language is missing a key.
 */
export interface Strings {
  meta: {
    title: string;
    description: string;
  };
  common: {
    language: string;
    languageAria: string;
    openRecord: string;
    openRecordFor: (title: string) => string;
    readStory: string;
    save: string;
    saved: string;
    saveAria: (title: string) => string;
    removeAria: (title: string) => string;
    saveTitle: string;
    removeTitle: string;
  };
  header: {
    nav: NavItem[];
    skipLink: string;
    backToTopAria: (name: string) => string;
    search: string;
    searchAria: string;
    archive: string;
    archiveAria: (saved: number) => string;
    openMenu: string;
    closeMenu: string;
    menuDialogLabel: string;
    contents: string;
    searchCta: string;
  };
  hero: {
    kicker: (volume: string, from: number, to: number) => string;
    titleA: string;
    titleB: string;
    titleC: string;
    exploreCta: string;
    timelineCta: string;
    statArtefacts: string;
    statEras: string;
    statCollections: string;
    statCitations: string;
    accession: (catalogId: string) => string;
    collageLabel: (catalogId: string, title: string) => string;
    jumpToEra: string;
    eraRange: (from: number, to: number) => string;
    eraAria: (title: string, years: string) => string;
  };
  featured: {
    kicker: string;
    titleA: string;
    titleB: string;
    period: string;
    collection: string;
    accession: string;
    plate: string;
    curatorialNote: (catalogId: string) => string;
    saveCta: string;
    inArchive: string;
  };
  timeline: {
    section: string;
    title: string;
    descriptionA: string;
    keysHint: string;
    descriptionB: string;
    erasAria: string;
    eraNumber: (index: number) => string;
    entriesCount: (years: string, count: number) => string;
    connection: string;
    signature: string;
    prevEra: string;
    nextEra: string;
    browseAll: (count: number) => string;
    catalogueIndex: (eraTitle: string) => string;
    records: (count: number) => string;
  };
  collection: {
    section: string;
    titleA: string;
    titleB: string;
    description: string;
    searchAria: string;
    searchPlaceholder: string;
    clearSearch: string;
    sortAria: string;
    sortYearAsc: string;
    sortYearDesc: string;
    sortTitle: string;
    sortCatalog: string;
    reset: string;
    collectionLabel: string;
    all: (count: number) => string;
    eraLabel: string;
    allPeriods: string;
    showing: (shown: number, total: number) => string;
    eraFilters: (count: number) => string;
    collectionFilters: (count: number) => string;
    clickHint: string;
    emptyKicker: string;
    emptyTitle: (query: string) => string;
    thoseFilters: string;
    emptyBody: (count: number) => string;
    resetAll: string;
  };
  plate: {
    noImageCaption: string;
    curatorsPlate: (code: string) => string;
  };
  reader: {
    closeAria: string;
    copyLink: string;
    copied: string;
    plateLabel: string;
    noImage: string;
    whyItMatters: string;
    impact: string;
    recordCard: string;
    collection: string;
    period: string;
    sources: string;
    sourcesNote: string;
    backToCollection: string;
    prevRecord: (title: string) => string;
    noPrev: string;
    nextRecord: (title: string) => string;
    noNext: string;
    /** Shown when the long-form story is kept in its source language. Null = don't show. */
    storyLanguageNote: string | null;
  };
  compare: {
    section: string;
    titleA: string;
    titleB: string;
    description: string;
    prevComparison: string;
    nextComparison: string;
    openRecordArrow: string;
    axisOfChange: string;
    then: string;
    now: string;
    summaryTitle: string;
    nextPairing: string;
    pairingCount: (index: number, total: number) => string;
  };
  discovery: {
    section: string;
    titleA: string;
    titleB: string;
    description: string;
    surprise: string;
    surpriseAgain: string;
    noDraw: string;
    draws: (count: number) => string;
    waiting: string;
    drawerClosed: string;
    drawerEmpty: string;
    drawerNote: string;
  };
  archive: {
    section: string;
    title: string;
    description: string;
    savedRecords: string;
    ofCatalogue: (total: number) => string;
    clear: string;
    confirmClear: string;
    cancel: string;
    emptyKicker: string;
    emptyTitle: string;
    emptyBody: string;
    browseCta: string;
    randomCta: string;
  };
  search: {
    dialogAria: string;
    placeholder: string;
    close: string;
    jumpPeriod: string;
    orCollection: string;
    recentlyCatalogued: string;
    randomCta: string;
    noMatch: string;
    noMatchTitle: (query: string) => string;
    noMatchBody: string;
    resultsCount: (shown: number, total: number) => string;
    totalLine: (total: number) => string;
    hint: string;
    resultsAria: string;
  };
  about: {
    section: string;
    title: string;
    body: (count: number) => string[];
    methodTitle: string;
    method: { label: string; text: string }[];
    limitationsTitle: string;
    limitations: string[];
    projectRecord: string;
    meta: (catalogue: string) => { k: string; v: string }[];
    sourceRepo: string;
    repoHint: string;
    colophonTitle: string;
    colophonA: string;
    colophonSerif: string;
    colophonB: string;
    catalogueRevision: (year: number) => string;
  };
  footer: {
    sectionsTitle: string;
    collectionsTitle: string;
    elsewhereTitle: string;
    sectionLinks: NavItem[];
    backToTop: string;
    volumeLine: (volume: string, records: number, from: number, to: number) => string;
    sourceCode: string;
    wikimedia: string;
    wayback: string;
    history: string;
    copyright: (year: number, name: string) => string;
    disclaimer: string;
  };
  error: {
    title: string;
    body: string;
    reload: string;
    detail: string;
  };
}
