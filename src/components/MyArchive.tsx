import { useState } from "react";
import { categoryById } from "@/config";
import { artifacts, getArtifact } from "@/data/artifacts";
import type { Bookmarks } from "@/hooks/useBookmarks";
import { useInView } from "@/hooks/useInView";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArchive, IconArrowRight, IconClose, IconShuffle } from "./icons";

interface MyArchiveProps {
  bookmarks: Bookmarks;
  onOpenArtifact: (id: string) => void;
  onBrowse: () => void;
  onSurprise: () => void;
}

export function MyArchive({ bookmarks, onOpenArtifact, onBrowse, onSurprise }: MyArchiveProps) {
  const { ref, inView } = useInView<HTMLElement>(0.08);
  const [confirming, setConfirming] = useState(false);

  const saved = bookmarks.saved
    .map((id) => getArtifact(id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <section
      id="archive"
      ref={ref}
      className="relative border-b border-line bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className={`reveal ${inView ? "is-in" : ""} grid grid-cols-1 gap-8 border-b border-line pb-8 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <span className="label text-archive">Section 06 — My archive</span>
            <h2 className="mt-4 text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[0.95]">
              Your personal collection
            </h2>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-slate-ink">
              Bookmark a record and it stays here, filed under your own accession list.
              Saved entries are stored in this browser only, using local storage — nothing
              is uploaded, no account is created, and the list will not follow you to another
              device or browser profile.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-5 lg:items-end">
            <div className="flex items-end gap-5">
              <div>
                <span className="label block text-[9px] text-muted">Saved records</span>
                <span className="font-display block text-[clamp(3.4rem,8vw,5.5rem)] leading-[0.85] text-archive">
                  {String(saved.length).padStart(2, "0")}
                </span>
              </div>
              <span className="label mb-2 max-w-[9rem] text-left text-[9px] leading-relaxed text-muted">
                of {String(artifacts.length).padStart(2, "0")} in the catalogue
              </span>
            </div>

            {saved.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {confirming ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        bookmarks.clear();
                        setConfirming(false);
                      }}
                      className="btn border-archive bg-archive text-paper hover:bg-archive-deep"
                    >
                      Confirm — clear all
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirming(false)}
                      className="label text-[9px] text-muted underline underline-offset-4 hover:text-ink"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirming(true)}
                    className="label border border-line px-3 py-2 text-[9px] text-slate-ink transition-colors hover:border-archive hover:text-archive"
                  >
                    Clear my archive
                  </button>
                )}
              </div>
            )}
          </div>
        </header>

        {saved.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((a, i) => (
              <li
                key={a.id}
                className="reveal is-in group relative border border-line bg-ivory transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-ink/40"
                style={{ transitionDelay: `${Math.min(i, 6) * 45}ms` }}
              >
                <button
                  type="button"
                  onClick={() => onOpenArtifact(a.id)}
                  className="block w-full text-left after:absolute after:inset-0 after:content-['']"
                  aria-label={`Open the record for ${a.title}`}
                >
                  <ArtifactPlate artifact={a} className="aspect-[16/10] w-full border-b border-line" />
                  <div className="p-4">
                    <span className="label text-[9px] text-muted">
                      {a.catalogId} · {categoryById(a.category).code}
                    </span>
                    <h3 className="mt-2 text-[1.35rem] leading-tight">{a.title}</h3>
                    <p className="mt-1.5 font-mono text-[0.68rem] text-muted">{a.year}</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => bookmarks.remove(a.id)}
                  className="absolute right-2 top-2 z-20 border border-line bg-paper/90 p-1.5 text-slate-ink transition-opacity duration-300 hover:border-archive hover:text-archive focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  aria-label={`Remove ${a.title} from My Archive`}
                >
                  <IconClose size={13} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 flex flex-col items-center border border-dashed border-line bg-ivory px-6 py-16 text-center sm:py-20">
            <IconArchive size={30} className="text-muted" />
            <p className="label mt-5 text-[9px] text-archive">Empty drawer</p>
            <p className="mt-4 max-w-md font-display text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">
              You have not saved anything yet.
            </p>
            <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-slate-ink">
              Use the bookmark control on any record — in the collection grid, in the
              timeline index, or inside a reader — and it will be filed here for the rest of
              this browser's life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={onBrowse} className="btn btn-primary">
                Browse the collection <IconArrowRight size={14} />
              </button>
              <button type="button" onClick={onSurprise} className="btn btn-ghost">
                <IconShuffle size={14} /> Draw a random record
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


