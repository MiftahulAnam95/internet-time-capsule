import { useEffect, useMemo, useRef, useState } from "react";
import { categories, eras, type CategoryId, type EraId } from "@/config";
import { applyFilters, artifacts, defaultFilters } from "@/data/artifacts";
import { categoryById } from "@/config";
import { scrollToId } from "@/lib/scroll";
import { IconArrowRight, IconClose, IconSearch, IconShuffle } from "./icons";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
  onSelectArtifact: (id: string) => void;
  onApplyFilters: (patch: { query?: string; categories?: CategoryId[]; eras?: EraId[] }) => void;
  onSurprise: () => void;
}

const MAX_RESULTS = 8;

export function SearchOverlay({
  open,
  onClose,
  onSelectArtifact,
  onApplyFilters,
  onSurprise,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const results = useMemo(
    () => applyFilters(artifacts, { ...defaultFilters, query }).slice(0, MAX_RESULTS),
    [query]
  );

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setCursor(0);
    document.body.classList.add("is-locked");
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      window.clearTimeout(t);
      document.body.classList.remove("is-locked");
    };
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  if (!open) return null;

  const choose = (id: string) => {
    onSelectArtifact(id);
    onClose();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      choose(results[cursor].id);
    }
  };

  const jumpTo = (patch: { categories?: CategoryId[]; eras?: EraId[] }) => {
    onApplyFilters(patch);
    onClose();
    scrollToId("collections");
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center p-0 sm:p-8">
      <div className="anim-fade absolute inset-0 bg-ink/80 backdrop-blur-[3px]" onClick={onClose} aria-hidden />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search the archive"
        onKeyDown={onKeyDown}
        className="anim-modal grain relative mt-0 flex max-h-full w-full max-w-3xl flex-col overflow-hidden border border-line bg-ivory sm:mt-6"
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3 sm:px-6">
          <IconSearch size={16} className="text-archive" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, stories, technologies, years…"
            aria-label="Search the archive"
            className="flex-1 bg-transparent py-1.5 font-display text-[clamp(1.2rem,3vw,1.9rem)] leading-tight placeholder:font-body placeholder:text-[0.9rem] placeholder:text-muted focus:outline-none"
          />
          <kbd className="label hidden border border-line px-1.5 py-1 text-[9px] text-muted sm:inline">
            Esc
          </kbd>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-ink transition-colors hover:text-archive"
            aria-label="Close search"
          >
            <IconClose size={16} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {query.trim() === "" ? (
            <div className="p-4 sm:p-6">
              <p className="label text-[9px] text-muted">Jump straight to a period</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {eras.map((e) => (
                  <button key={e.id} type="button" className="chip" onClick={() => jumpTo({ eras: [e.id], categories: [] })}>
                    {e.title} · {e.years}
                  </button>
                ))}
              </div>

              <p className="label mt-7 text-[9px] text-muted">Or a collection</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button key={c.id} type="button" className="chip" onClick={() => jumpTo({ categories: [c.id], eras: [] })}>
                    {c.name} · {artifacts.filter((a) => a.category === c.id).length}
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <div className="flex items-center justify-between">
                  <p className="label text-[9px] text-muted">Recently catalogued</p>
                  <button
                    type="button"
                    onClick={() => {
                      onSurprise();
                      onClose();
                    }}
                    className="label flex items-center gap-2 text-[9px] text-archive transition-opacity hover:opacity-70"
                  >
                    <IconShuffle size={12} /> Draw a random record
                  </button>
                </div>
                <ul className="mt-3 divide-y divide-line">
                  {[...artifacts]
                    .sort((a, b) => b.yearNum - a.yearNum)
                    .slice(0, 5)
                    .map((a) => (
                      <li key={a.id}>
                        <button
                          type="button"
                          onClick={() => choose(a.id)}
                          className="group flex w-full items-baseline gap-4 py-2.5 text-left"
                        >
                          <span className="label w-14 shrink-0 text-[9px] text-archive">{a.catalogId}</span>
                          <span className="flex-1 truncate text-[0.95rem] transition-transform duration-300 group-hover:translate-x-1">
                            {a.title}
                          </span>
                          <span className="font-mono text-[0.68rem] text-muted">{a.year.split(" ")[0]}</span>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ) : results.length > 0 ? (
            <ul className="divide-y divide-line" role="listbox" aria-label="Search results">
              {results.map((a, i) => (
                <li key={a.id} role="option" aria-selected={i === cursor}>
                  <button
                    type="button"
                    onClick={() => choose(a.id)}
                    onMouseEnter={() => setCursor(i)}
                    className={`flex w-full items-center gap-4 px-4 py-3.5 text-left transition-colors duration-200 sm:px-6 ${
                      i === cursor ? "bg-ink text-ivory" : "hover:bg-paper"
                    }`}
                  >
                    <span
                      className={`label w-16 shrink-0 text-[9px] ${
                        i === cursor ? "text-archive" : "text-muted"
                      }`}
                    >
                      {a.catalogId}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-[1.2rem] leading-tight">
                        {a.title}
                      </span>
                      <span
                        className={`mt-0.5 block truncate text-[0.74rem] ${
                          i === cursor ? "text-ivory/60" : "text-muted"
                        }`}
                      >
                        {categoryById(a.category).name} · {a.year}
                      </span>
                    </span>
                    <IconArrowRight
                      size={15}
                      className={`shrink-0 ${i === cursor ? "text-archive" : "text-muted"}`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-14 text-center">
              <p className="label text-[9px] text-archive">No match</p>
              <p className="mt-3 font-display text-[1.6rem] leading-tight">
                Nothing catalogued under “{query}”.
              </p>
              <p className="mx-auto mt-3 max-w-sm text-[0.86rem] leading-relaxed text-slate-ink">
                Try a technology, a company, a year, or a word from a story — for example
                “modem”, “Netscape”, “1999” or “hashtag”.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 sm:px-6">
          <span className="label text-[9px] text-muted">
            {query.trim()
              ? `${results.length} of ${artifacts.length} records`
              : `${artifacts.length} records · 4 eras · 6 collections`}
          </span>
          <span className="label hidden text-[9px] text-muted sm:inline">
            ↑ ↓ to move · Enter to open
          </span>
        </div>
      </div>
    </div>
  );
}


