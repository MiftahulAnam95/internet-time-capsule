import { useCallback, useEffect, useRef, useState } from "react";
import { localizedCategory, localizedEra, localizeArtifact, localizeLabel, useLanguage } from "@/i18n";
import { deepLink, getArtifact, neighbours } from "@/data/artifacts";
import type { Bookmarks } from "@/hooks/useBookmarks";
import { eraAccent } from "@/lib/tokens";
import { ArtifactPlate } from "./ArtifactPlate";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBookmark,
  IconCheck,
  IconClose,
  IconExternal,
  IconLink,
} from "./icons";

interface ReaderProps {
  artifactId: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onBackToCollection: () => void;
  bookmarks: Bookmarks;
}

const FOCUSABLE =
  "a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])";

export function ArtifactReader({
  artifactId,
  onClose,
  onNavigate,
  onBackToCollection,
  bookmarks,
}: ReaderProps) {
  const { lang, t } = useLanguage();
  const source = getArtifact(artifactId);
  const artifact = source ? localizeArtifact(source, lang) : undefined;
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  // Remember where the reader was opened from, and lock the page behind it.
  useEffect(() => {
    restoreFocus.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.classList.add("is-locked");
    const t = window.setTimeout(() => panelRef.current?.focus(), 40);
    return () => {
      window.clearTimeout(t);
      document.body.classList.remove("is-locked");
      document.body.style.overflow = overflow;
      restoreFocus.current?.focus?.();
    };
  }, []);

  // Scroll to the top of a newly opened record.
  useEffect(() => {
    const panel = panelRef.current;
    if (panel) {
      // Element.scrollTo is missing on very old browsers — fall back to a
      // direct assignment so opening a record can never crash the page.
      if (typeof panel.scrollTo === "function") panel.scrollTo({ top: 0 });
      else panel.scrollTop = 0;
    }
    setCopied(false);
  }, [artifactId]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  const copyLink = useCallback(async () => {
    const url = deepLink(artifactId);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }, [artifactId]);

  if (!artifact) return null;

  const { prev, next } = neighbours(artifact.id);
  const era = localizedEra(artifact.era, lang);
  const cat = localizedCategory(artifact.category, lang);
  const saved = bookmarks.has(artifact.id);

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-hidden p-0 sm:p-6">
      <div
        className="anim-fade absolute inset-0 bg-ink/70 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reader-title"
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="anim-modal grain relative flex h-full w-full max-w-6xl flex-col overflow-y-auto border border-line bg-ivory shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)] outline-none sm:h-auto sm:max-h-[92vh]"
      >
        {/* ---------- Sticky record header ---------- */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-line bg-ivory/97 px-4 py-3 backdrop-blur-[2px] sm:px-7">
          <span className="label bg-archive px-2 py-1 text-[9px] text-paper">
            {artifact.catalogId}
          </span>
          <span className="label hidden text-[9px] text-muted sm:inline">
            {cat.name} · {era.years}
          </span>
          <span className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => bookmarks.toggle(artifact.id)}
              aria-pressed={saved}
              className={`label flex items-center gap-2 border px-2.5 py-1.5 text-[9px] transition-colors duration-300 ${
                saved
                  ? "border-archive bg-archive text-paper"
                  : "border-line text-slate-ink hover:border-ink"
              }`}
            >
              <IconBookmark size={13} filled={saved} />
              <span className="hidden sm:inline">{saved ? t.common.saved : t.common.save}</span>
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="label flex items-center gap-2 border border-line px-2.5 py-1.5 text-[9px] text-slate-ink transition-colors duration-300 hover:border-ink"
            >
              {copied ? <IconCheck size={13} /> : <IconLink size={13} />}
              <span className="hidden sm:inline">{copied ? t.reader.copied : t.reader.copyLink}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-line p-2 text-slate-ink transition-colors duration-300 hover:border-archive hover:bg-archive hover:text-paper"
              aria-label={t.reader.closeAria}
            >
              <IconClose size={15} />
            </button>
          </span>
        </div>

        {/* ---------- Plate ---------- */}
        <div className="relative border-b border-line bg-graphite">
          <div className="mx-auto max-w-4xl p-4 sm:p-8">
            <ArtifactPlate
              artifact={artifact}
              eager
              caption={false}
              className="aspect-[16/10] w-full border border-line-dark"
            />
            {artifact.image ? (
              <p className="mt-3 text-[12px] leading-relaxed text-ivory/65">
                <span className="label mr-2 text-[9px] text-archive">{t.reader.plateLabel}</span>
                {artifact.image.caption}{" "}
                <span className="text-ivory/40">
                  {artifact.image.credit}
                  {artifact.image.license ? ` · ${artifact.image.license}` : ""}
                </span>
              </p>
            ) : (
              <p className="label mt-3 text-[9px] text-ivory/45">
                {t.reader.noImage}
              </p>
            )}
          </div>
        </div>

        {/* ---------- Record body ---------- */}
        <div className="grid flex-1 grid-cols-1 gap-x-12 gap-y-10 px-4 py-8 sm:px-7 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-7">
            <span
              className="label text-[9px]"
              style={{ color: eraAccent[artifact.era] }}
            >
              {era.title} · {era.years}
            </span>
            <h2
              id="reader-title"
              className="mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[0.98]"
            >
              {artifact.title}
            </h2>
            <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-archive-deep">
              {artifact.blurb}
            </p>

            {t.reader.storyLanguageNote && (
              <p className="label mt-4 max-w-xl border-l-2 border-line pl-3 text-[9px] leading-relaxed text-muted">
                {t.reader.storyLanguageNote}
              </p>
            )}

            <div className="mt-8 space-y-5 text-[0.98rem] leading-[1.8] text-slate-ink">
              {artifact.story.map((p, i) => (
                <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:text-ink" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="mt-9 border-l-2 border-archive pl-5">
              <p className="font-display text-[clamp(1.25rem,2.4vw,1.7rem)] italic leading-[1.35]">
                {artifact.significance}
              </p>
              <footer className="label mt-3 text-[9px] text-muted">{t.reader.whyItMatters}</footer>
            </blockquote>

            <div className="mt-10">
              <h3 className="label text-[9px] text-muted">{t.reader.impact}</h3>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {artifact.impact.map((row) => (
                  <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5">
                    <dt className="label pt-0.5 text-[9px] text-archive">{localizeLabel(row.label, lang)}</dt>
                    <dd className="text-[0.9rem] leading-relaxed text-slate-ink">{row.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* ---------- Sidebar: the file card ---------- */}
          <aside className="lg:col-span-5">
            <div className="border border-line bg-paper">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="label text-[9px] text-muted">{t.reader.recordCard}</span>
                <span className="font-mono text-[0.66rem] text-archive">{artifact.catalogId}</span>
              </div>
              <dl className="divide-y divide-line">
                {artifact.facts.map((f) => (
                  <div key={f.label} className="px-4 py-3">
                    <dt className="label text-[9px] text-muted">{localizeLabel(f.label, lang)}</dt>
                    <dd className="mt-1 font-mono text-[0.74rem] leading-relaxed text-ink">
                      {f.value}
                    </dd>
                  </div>
                ))}
                <div className="px-4 py-3">
                  <dt className="label text-[9px] text-muted">{t.reader.collection}</dt>
                  <dd className="mt-1 font-mono text-[0.74rem] text-ink">{cat.name}</dd>
                </div>
                <div className="px-4 py-3">
                  <dt className="label text-[9px] text-muted">{t.reader.period}</dt>
                  <dd className="mt-1 font-mono text-[0.74rem] text-ink">{era.title}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border border-line bg-paper">
              <div className="border-b border-line px-4 py-3">
                <span className="label text-[9px] text-muted">{t.reader.sources}</span>
              </div>
              <ul className="divide-y divide-line">
                {artifact.sources.map((s) => (
                  <li key={s.url + s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-link group flex items-start gap-3 px-4 py-3 text-[0.84rem] leading-snug"
                    >
                      <IconExternal
                        size={13}
                        className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-archive"
                      />
                      <span>
                        <span className="block text-ink">{s.label}</span>
                        <span className="label mt-1 block text-[9px] text-muted">{s.publisher}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="label border-t border-line px-4 py-3 text-[9px] leading-relaxed text-muted">
                {t.reader.sourcesNote}
              </p>
            </div>
          </aside>
        </div>

        {/* ---------- Sticky footer: navigation ---------- */}
        <div className="sticky bottom-0 z-30 border-t border-line bg-ivory/97 px-4 py-3 backdrop-blur-[2px] sm:px-7">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToCollection}
              className="label flex items-center gap-2 text-[9px] text-slate-ink transition-colors hover:text-archive"
            >
              <IconArrowLeft size={13} /> {t.reader.backToCollection}
            </button>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                disabled={!prev}
                onClick={() => prev && onNavigate(prev.id)}
                className="group flex items-center gap-2 border border-line px-3 py-2 transition-colors duration-300 enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-ivory disabled:opacity-35"
                aria-label={prev ? t.reader.prevRecord(prev.title) : t.reader.noPrev}
              >
                <IconArrowLeft size={13} />
                <span className="label hidden max-w-[9rem] truncate text-[9px] md:inline">
                  {prev ? prev.title : "—"}
                </span>
              </button>
              <button
                type="button"
                disabled={!next}
                onClick={() => next && onNavigate(next.id)}
                className="group flex items-center gap-2 border border-line px-3 py-2 transition-colors duration-300 enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-ivory disabled:opacity-35"
                aria-label={next ? t.reader.nextRecord(next.title) : t.reader.noNext}
              >
                <span className="label hidden max-w-[9rem] truncate text-[9px] md:inline">
                  {next ? next.title : "—"}
                </span>
                <IconArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
