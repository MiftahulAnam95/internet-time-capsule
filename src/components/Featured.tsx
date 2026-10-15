import { categoryById, eraById } from "@/config";
import { featuredArtifact as artifact } from "@/data/artifacts";
import type { Bookmarks } from "@/hooks/useBookmarks";
import { useInView } from "@/hooks/useInView";
import { eraAccent } from "@/lib/tokens";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArchive, IconArrowRight, IconBookmark } from "./icons";

interface FeaturedProps {
  onOpenArtifact: (id: string) => void;
  bookmarks: Bookmarks;
}

/** The wall label at the entrance: one artefact, told properly. */
export function Featured({ onOpenArtifact, bookmarks }: FeaturedProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const era = eraById(artifact.era);
  const cat = categoryById(artifact.category);
  const saved = bookmarks.has(artifact.id);

  return (
    <section
      id="featured"
      ref={ref}
      className="grain grain-light relative overflow-hidden bg-graphite text-ivory"
    >
      <div aria-hidden className="absolute inset-0 opacity-[0.35]">
        <div className="grid-paper-dark absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line-dark pb-5">
          <div>
            <span className="label flex items-center gap-3 text-archive">
              <span
                className="inline-block h-2 w-2"
                style={{ background: eraAccent[artifact.era] }}
                aria-hidden
              />
              Featured acquisition
            </span>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.1rem,5vw,4rem)] leading-[0.95]">
              The birth of the
              <br className="hidden sm:block" /> World Wide Web
            </h2>
          </div>
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              { k: "Period", v: artifact.year },
              { k: "Collection", v: cat.name },
              { k: "Accession", v: artifact.catalogId },
            ].map((row) => (
              <div key={row.k}>
                <dt className="label text-[9px] text-ivory/45">{row.k}</dt>
                <dd className="font-mono mt-1.5 text-[0.82rem] text-ivory">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          {/* The object itself */}
          <div
            className={`reveal ${inView ? "is-in" : ""} lg:col-span-7`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="border border-line-dark bg-[#1d1d1b] p-2.5 sm:p-3">
              <ArtifactPlate
                artifact={artifact}
                eager
                className="aspect-[16/11] w-full"
              />
            </div>
            {artifact.image && (
              <p className="mt-3 max-w-xl text-[12.5px] leading-relaxed text-ivory/60">
                <span className="label mr-2 text-[9px] text-archive">Plate 01</span>
                {artifact.image.caption}{" "}
                <span className="text-ivory/40">
                  {artifact.image.credit}
                  {artifact.image.license ? ` · ${artifact.image.license}` : ""}
                </span>
              </p>
            )}
          </div>

          {/* The label */}
          <div
            className={`reveal ${inView ? "is-in" : ""} lg:col-span-5`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="label text-[9px] text-ivory/45">
              {era.title} · {era.years}
            </p>
            <div className="mt-5 space-y-5 text-[0.98rem] leading-[1.75] text-ivory/80">
              {artifact.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-archive pl-5">
              <p className="font-display text-[1.35rem] italic leading-[1.35] text-ivory">
                {artifact.significance}
              </p>
              <footer className="label mt-3 text-[9px] text-ivory/45">
                Curatorial note · {artifact.catalogId}
              </footer>
            </blockquote>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenArtifact(artifact.id)}
                className="btn border-paper bg-paper text-ink hover:bg-archive hover:border-archive hover:text-paper"
              >
                <IconArchive size={14} /> Read the story <IconArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => bookmarks.toggle(artifact.id)}
                aria-pressed={saved}
                className={`btn btn-light ${saved ? "bg-archive border-archive text-paper" : ""}`}
              >
                <IconBookmark size={14} filled={saved} />
                {saved ? "In my archive" : "Save to my archive"}
              </button>
            </div>

            <ul className="mt-10 divide-y divide-line-dark border-y border-line-dark">
              {artifact.facts.map((f) => (
                <li key={f.label} className="flex items-baseline justify-between gap-6 py-2.5">
                  <span className="label text-[9px] text-ivory/45">{f.label}</span>
                  <span className="text-right font-mono text-[0.72rem] text-ivory/85">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
