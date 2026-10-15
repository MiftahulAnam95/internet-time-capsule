import { useCallback, useState } from "react";
import { categoryById, eraById } from "@/config";
import { pickRandom } from "@/data/artifacts";
import type { Artifact } from "@/data/types";
import type { Bookmarks } from "@/hooks/useBookmarks";
import { eraAccent } from "@/lib/tokens";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArrowRight, IconBookmark, IconShuffle } from "./icons";

interface DiscoveryProps {
  onOpenArtifact: (id: string) => void;
  bookmarks: Bookmarks;
}

/** Random Discovery — pulls one record out of the archive drawers.
 *  Never repeats the previous pick while other records remain. */
export function Discovery({ onOpenArtifact, bookmarks }: DiscoveryProps) {
  const [current, setCurrent] = useState<Artifact | null>(null);
  const [draws, setDraws] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const draw = useCallback(() => {
    setSpinning(true);
    // A short delay so the change is legible rather than instantaneous.
    window.setTimeout(() => {
      setCurrent((prev) => pickRandom(prev?.id));
      setDraws((d) => d + 1);
      setSpinning(false);
    }, 320);
  }, []);

  const saved = current ? bookmarks.has(current.id) : false;

  return (
    <section
      id="discovery"
      className="relative overflow-hidden border-b border-line bg-ivory-deep/70 py-20 sm:py-24"
    >
      <div aria-hidden className="grid-paper absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-x-14 gap-y-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="label text-archive">Section 05 — Random discovery</span>
          <h2 className="mt-4 text-[clamp(2.1rem,5vw,3.8rem)] leading-[0.96]">
            Pull a record
            <br />
            from the drawers
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-slate-ink">
            The archive is organised by date and collection, but some of the best finds are
            accidents. Draw one at random — the selector avoids repeating the last record
            until it has run through the rest of the catalogue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" onClick={draw} className="btn btn-primary" disabled={spinning}>
              <IconShuffle size={15} className={spinning ? "animate-spin" : ""} />
              {current ? "Surprise me again" : "Surprise me"}
            </button>
            <span className="label text-[9px] text-muted" aria-live="polite">
              {draws === 0
                ? "No record drawn yet"
                : `${draws} ${draws === 1 ? "draw" : "draws"} this visit`}
            </span>
          </div>

          {!current && (
            <div className="mt-10 flex items-end gap-3" aria-hidden>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block border border-line bg-paper"
                  style={{
                    width: `${44 + i * 10}px`,
                    height: `${70 + i * 14}px`,
                    transform: `rotate(${(i - 1) * 3}deg)`,
                    opacity: 0.55 + i * 0.15,
                  }}
                />
              ))}
              <span className="label ml-2 pb-2 text-[9px] text-muted">
                Waiting for a draw
              </span>
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          {current ? (
            <article
              key={current.id}
              className="anim-modal border border-line bg-paper shadow-[0_30px_70px_-45px_rgba(25,25,25,0.55)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
                <div className="border-b border-line sm:border-b-0 sm:border-r">
                  <ArtifactPlate artifact={current} className="aspect-[4/3] w-full sm:aspect-auto sm:h-full" />
                </div>
                <div className="flex flex-col p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="label flex items-center gap-2 text-[9px]" style={{ color: eraAccent[current.era] }}>
                      <span className="inline-block h-1.5 w-1.5" style={{ background: eraAccent[current.era] }} aria-hidden />
                      {eraById(current.era).title}
                    </span>
                    <span className="label text-[9px] text-muted">{current.catalogId}</span>
                  </div>

                  <h3 className="mt-4 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.02]">
                    {current.title}
                  </h3>
                  <p className="label mt-2.5 text-[9px] text-muted">
                    {current.year} · {categoryById(current.category).name}
                  </p>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-slate-ink">{current.blurb}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button type="button" onClick={() => onOpenArtifact(current.id)} className="btn btn-primary">
                      Read the story <IconArrowRight size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => bookmarks.toggle(current.id)}
                      aria-pressed={saved}
                      className={`btn btn-ghost ${saved ? "border-archive text-archive" : ""}`}
                    >
                      <IconBookmark size={14} filled={saved} />
                      {saved ? "Saved" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div className="flex h-full min-h-[16rem] flex-col items-center justify-center border border-dashed border-line bg-paper/60 px-6 py-14 text-center">
              <span className="label text-[9px] text-archive">Drawer closed</span>
              <p className="mt-4 max-w-sm font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight">
                Nothing drawn yet. Press the button and the archive will choose for you.
              </p>
              <p className="label mt-5 text-[9px] text-muted">
                Every draw is taken from the full catalogue, across all four eras
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
