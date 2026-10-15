import { useId } from "react";
import type { CategoryId, EraId } from "@/config";
import { localizedCategories, localizedEras, useLanguage } from "@/i18n";
import { applyFilters, artifacts, type Filters, type SortKey } from "@/data/artifacts";
import type { Bookmarks } from "@/hooks/useBookmarks";
import { useInView } from "@/hooks/useInView";
import { ArtifactCard, layoutFor } from "./ArtifactCard";
import { IconClose, IconSearch, IconSort } from "./icons";

interface CollectionProps {
  filters: Filters;
  onFiltersChange: (next: Filters) => void;
  onOpenArtifact: (id: string) => void;
  bookmarks: Bookmarks;
}

export function Collection({ filters, onFiltersChange, onOpenArtifact, bookmarks }: CollectionProps) {
  const { lang, t } = useLanguage();
  const categories = localizedCategories(lang);
  const eras = localizedEras(lang);
  const { ref, inView } = useInView<HTMLElement>(0.05);
  const searchId = useId();
  const sortId = useId();
  const results = applyFilters(artifacts, filters, lang);

  const SORTS: { value: SortKey; label: string }[] = [
    { value: "year-asc", label: t.collection.sortYearAsc },
    { value: "year-desc", label: t.collection.sortYearDesc },
    { value: "title", label: t.collection.sortTitle },
    { value: "catalog", label: t.collection.sortCatalog },
  ];

  const isDirty =
    filters.query !== "" ||
    filters.categories.length > 0 ||
    filters.eras.length > 0 ||
    filters.sort !== "year-asc";

  const toggleCategory = (id: CategoryId) =>
    onFiltersChange({
      ...filters,
      categories: filters.categories.includes(id)
        ? filters.categories.filter((c) => c !== id)
        : [...filters.categories, id],
    });

  const toggleEra = (id: EraId) =>
    onFiltersChange({
      ...filters,
      eras: filters.eras.includes(id)
        ? filters.eras.filter((e) => e !== id)
        : [...filters.eras, id],
    });

  const reset = () =>
    onFiltersChange({ query: "", categories: [], eras: [], sort: "year-asc" });

  return (
    <section id="collections" ref={ref} className="relative border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className={`reveal ${inView ? "is-in" : ""}`}>
          <span className="label text-archive">{t.collection.section}</span>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[0.95]">
              {t.collection.titleA}
              <br />
              {t.collection.titleB}
            </h2>
            <p className="max-w-sm text-[0.92rem] leading-relaxed text-slate-ink">
              {t.collection.description}
            </p>
          </div>
        </header>

        {/* ---------- Filter desk ---------- */}
        <div
          className={`reveal ${inView ? "is-in" : ""} mt-10 border border-line bg-ivory/97 backdrop-blur-[2px] lg:sticky lg:top-[62px] lg:z-30`}
          style={{ transitionDelay: "80ms" }}
        >
          <div className="flex flex-col gap-3 border-b border-line p-3 sm:p-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <label htmlFor={searchId} className="sr-only">
                {t.collection.searchAria}
              </label>
              <IconSearch
                size={15}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                id={searchId}
                type="search"
                value={filters.query}
                onChange={(e) => onFiltersChange({ ...filters, query: e.target.value })}
                placeholder={t.collection.searchPlaceholder}
                className="w-full border border-line bg-paper py-2.5 pl-9 pr-9 font-mono text-[0.76rem] text-ink placeholder:text-muted/80 focus:border-ink focus:outline-none"
              />
              {filters.query && (
                <button
                  type="button"
                  onClick={() => onFiltersChange({ ...filters, query: "" })}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted transition-colors hover:text-archive"
                  aria-label={t.collection.clearSearch}
                >
                  <IconClose size={13} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <IconSort size={14} className="pointer-events-none absolute left-3 text-muted" />
                <label htmlFor={sortId} className="sr-only">
                  {t.collection.sortAria}
                </label>
                <select
                  id={sortId}
                  value={filters.sort}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, sort: e.target.value as SortKey })
                  }
                  className="appearance-none border border-line bg-paper py-2.5 pl-8 pr-8 font-mono text-[0.72rem] text-ink focus:border-ink focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <span aria-hidden className="pointer-events-none absolute right-3 text-[9px] text-muted">
                  ▾
                </span>
              </div>

              <button
                type="button"
                onClick={reset}
                disabled={!isDirty}
                className="label border border-line px-3 py-2.5 text-[9px] transition-colors duration-300 enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-ivory disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t.collection.reset}
              </button>
            </div>
          </div>

          <div className="grid gap-3 p-3 sm:p-4 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-x-6">
            <div className="flex items-baseline gap-3">
              <span className="label text-[9px] text-muted">{t.collection.collectionLabel}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="chip"
                aria-pressed={filters.categories.length === 0}
                onClick={() => onFiltersChange({ ...filters, categories: [] })}
              >
                {t.collection.all(artifacts.length)}
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="chip"
                  aria-pressed={filters.categories.includes(c.id)}
                  onClick={() => toggleCategory(c.id)}
                  title={c.note}
                >
                  {c.name} · {artifacts.filter((a) => a.category === c.id).length}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 border-t border-line p-3 sm:p-4 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-x-6">
            <span className="label text-[9px] text-muted">{t.collection.eraLabel}</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="chip"
                aria-pressed={filters.eras.length === 0}
                onClick={() => onFiltersChange({ ...filters, eras: [] })}
              >
                {t.collection.allPeriods}
              </button>
              {eras.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  className="chip"
                  aria-pressed={filters.eras.includes(e.id)}
                  onClick={() => toggleEra(e.id)}
                >
                  {e.years} · {artifacts.filter((a) => a.era === e.id).length}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Results ---------- */}
        <div className="mt-6 flex items-baseline justify-between border-b border-line pb-3">
          <p className="label text-[9px] text-muted" aria-live="polite">
            {t.collection.showing(results.length, artifacts.length)}
            {filters.eras.length > 0 && t.collection.eraFilters(filters.eras.length)}
            {filters.categories.length > 0 && t.collection.collectionFilters(filters.categories.length)}
          </p>
          <p className="label hidden text-[9px] text-archive sm:block">
            {t.collection.clickHint}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12 lg:gap-6">
            {results.map((a, i) => {
              const { span, aspect } = layoutFor(i);
              return (
                <div key={a.id} className={`col-span-1 ${span}`}>
                  <ArtifactCard
                    artifact={a}
                    aspect={aspect}
                    index={i}
                    onOpen={onOpenArtifact}
                    bookmarks={bookmarks}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 border border-dashed border-line bg-paper px-6 py-16 text-center sm:py-20">
            <p className="label text-[9px] text-archive">{t.collection.emptyKicker}</p>
            <p className="mx-auto mt-4 max-w-md font-display text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">
              {t.collection.emptyTitle(filters.query || t.collection.thoseFilters)}
            </p>
            <p className="mx-auto mt-4 max-w-md text-[0.9rem] leading-relaxed text-slate-ink">
              {t.collection.emptyBody(artifacts.length)}
            </p>
            <button type="button" onClick={reset} className="btn btn-primary mt-8">
              {t.collection.resetAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
