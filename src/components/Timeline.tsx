import { useRef } from "react";
import { categoryById, eras, type EraId } from "@/config";
import { artefactsByEra } from "@/data/artifacts";
import { useInView } from "@/hooks/useInView";
import { eraAccent } from "@/lib/tokens";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArrowLeft, IconArrowRight } from "./icons";

interface TimelineProps {
  activeEra: EraId;
  onSelectEra: (id: EraId) => void;
  onOpenArtifact: (id: string) => void;
  onExploreEra: (id: EraId) => void;
}

const SPAN_START = 1989;

export function Timeline({ activeEra, onSelectEra, onOpenArtifact, onExploreEra }: TimelineProps) {
  const { ref, inView } = useInView<HTMLElement>(0.08);
  const tabsRef = useRef<HTMLDivElement>(null);

  const index = eras.findIndex((e) => e.id === activeEra);
  const era = eras[index] ?? eras[0];
  const items = artefactsByEra(era.id);
  const spanEnd = Math.max(...eras.map((e) => e.to), 2025);
  const span = spanEnd - SPAN_START;

  const move = (dir: 1 | -1) => {
    const next = (index + dir + eras.length) % eras.length;
    onSelectEra(eras[next].id);
    const buttons = tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    buttons?.[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      onSelectEra(eras[0].id);
    } else if (e.key === "End") {
      e.preventDefault();
      onSelectEra(eras[eras.length - 1].id);
    }
  };

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative border-b border-line bg-ivory-deep/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className={`reveal ${inView ? "is-in" : ""} flex flex-wrap items-end justify-between gap-6`}>
          <div>
            <span className="label text-archive">Section 02 — Chronology</span>
            <h2 className="mt-4 text-[clamp(2.2rem,5.4vw,4.2rem)]">Timeline Explorer</h2>
          </div>
          <p className="max-w-sm text-[0.92rem] leading-relaxed text-slate-ink">
            Four periods, each with its own infrastructure, habits and visual language.
            Select one to read the wall label and its catalogue entries — or use the
            <span className="font-mono text-[0.8rem]"> ← → </span> keys.
          </p>
        </header>

        {/* ---------- Era band, proportional to real elapsed years ---------- */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Internet eras"
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className={`reveal ${inView ? "is-in" : ""} mt-10 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4`}
          style={{ transitionDelay: "80ms" }}
        >
          {eras.map((e, i) => {
            const selected = e.id === activeEra;
            const count = artefactsByEra(e.id).length;
            return (
              <button
                key={e.id}
                role="tab"
                id={`era-tab-${e.id}`}
                aria-selected={selected}
                aria-controls={`era-panel-${e.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => onSelectEra(e.id)}
                className={`group relative overflow-hidden px-4 py-5 text-left transition-colors duration-500 sm:px-6 sm:py-6 ${
                  selected ? "bg-ink text-ivory" : "bg-ivory hover:bg-paper"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left transition-transform duration-500"
                  style={{
                    background: eraAccent[e.id],
                    transform: selected ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                <span className="label flex items-center gap-2 text-[9px] opacity-70">
                  Era {String(i + 1).padStart(2, "0")}
                  <span className={`h-1.5 w-1.5 ${selected ? "bg-archive" : "bg-line"}`} aria-hidden />
                </span>
                <span className="mt-2.5 block font-display text-[clamp(1.25rem,2.3vw,1.85rem)] leading-[1.05]">
                  {e.title}
                </span>
                <span
                  className={`mt-2 block font-mono text-[0.68rem] ${
                    selected ? "text-ivory/65" : "text-muted"
                  }`}
                >
                  {e.years} · {count} entries
                </span>
                <span
                  aria-hidden
                  className={`mt-3 block h-px w-full origin-left transition-transform duration-700 ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ background: `${eraAccent[e.id]}88` }}
                />
              </button>
            );
          })}
        </div>

        {/* ---------- Panel ---------- */}
        <div
          key={era.id}
          role="tabpanel"
          id={`era-panel-${era.id}`}
          aria-labelledby={`era-tab-${era.id}`}
          className="anim-fade mt-px grid grid-cols-1 gap-px border border-t-0 border-line bg-line lg:grid-cols-12"
        >
          {/* Wall label */}
          <div className="bg-ivory p-6 sm:p-9 lg:col-span-5">
            <span className="label text-[9px] text-muted">{era.kicker}</span>
            <h3 className="mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.02]">
              {era.title}
              <span className="ml-3 align-middle font-mono text-[0.75rem] text-archive">
                {era.years}
              </span>
            </h3>
            <p className="mt-5 text-[0.95rem] leading-[1.75] text-slate-ink">{era.summary}</p>

            <dl className="mt-8 space-y-5 border-t border-line pt-6">
              {era.markers.map((m) => (
                <div key={m.label} className="grid grid-cols-[6.5rem_1fr] gap-4">
                  <dt className="label pt-1 text-[9px] text-archive">{m.label}</dt>
                  <dd className="text-[0.86rem] leading-relaxed text-slate-ink">{m.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
              <div>
                <span className="label text-[9px] text-muted">Connection</span>
                <p className="mt-1 font-mono text-[0.75rem]">{era.bandwidth}</p>
              </div>
              <div>
                <span className="label text-[9px] text-muted">Signature</span>
                <p className="mt-1 font-mono text-[0.75rem]">{era.signature}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="border border-line p-2.5 transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
                  aria-label="Previous era"
                >
                  <IconArrowLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="border border-line p-2.5 transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
                  aria-label="Next era"
                >
                  <IconArrowRight size={15} />
                </button>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" onClick={() => onExploreEra(era.id)} className="btn btn-primary">
                Browse all {items.length} entries <IconArrowRight size={14} />
              </button>
              {/* Era position on the full span */}
              <div
                className="relative hidden h-[38px] flex-1 items-center border border-line bg-paper px-3 sm:flex"
                aria-hidden
              >
                <span className="absolute inset-x-3 top-1/2 h-px bg-line" />
                {eras.map((e) => (
                  <span
                    key={e.id}
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 border"
                    style={{
                      left: `calc(12px + ${((e.from - SPAN_START) / span) * 100}% * 0.92)`,
                      background: e.id === era.id ? "var(--color-archive)" : "var(--color-paper)",
                      borderColor: e.id === era.id ? "var(--color-archive)" : "var(--color-line)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Index sheet for the selected era */}
          <div className="bg-paper p-6 sm:p-9 lg:col-span-7">
            <div className="flex items-baseline justify-between border-b border-line pb-3">
              <span className="label text-[9px] text-muted">Catalogue index — {era.title}</span>
              <span className="label text-[9px] text-archive">
                {String(items.length).padStart(2, "0")} records
              </span>
            </div>

            <ul className="divide-y divide-line">
              {items.map((a, i) => (
                <li key={a.id}>
                  <button
                    type="button"
                    onClick={() => onOpenArtifact(a.id)}
                    className="group flex w-full items-center gap-4 py-3.5 text-left transition-colors duration-300 hover:bg-ivory sm:gap-5"
                  >
                    <span className="label w-8 shrink-0 text-[9px] text-muted transition-colors group-hover:text-archive">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative hidden h-[52px] w-[74px] shrink-0 overflow-hidden border border-line sm:block">
                      <ArtifactPlate artifact={a} className="h-full w-full" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-[1.2rem] leading-tight transition-transform duration-300 group-hover:translate-x-1">
                        {a.title}
                      </span>
                      <span className="mt-1 block truncate font-mono text-[0.66rem] text-muted">
                        {a.catalogId} · {a.year} · {categoryById(a.category).name}
                      </span>
                    </span>
                    <span className="hidden max-w-[16rem] shrink-0 text-[0.78rem] leading-snug text-slate-ink md:block">
                      {a.blurb.length > 96 ? `${a.blurb.slice(0, 96)}…` : a.blurb}
                    </span>
                    <IconArrowRight
                      size={15}
                      className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-archive"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
