import { categoryById, eraById } from "@/config";
import type { Artifact } from "@/data/types";
import type { Bookmarks } from "@/hooks/useBookmarks";
import { eraAccent } from "@/lib/tokens";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArrowRight, IconBookmark } from "./icons";

interface CardProps {
  artifact: Artifact;
  aspect: string;
  onOpen: (id: string) => void;
  bookmarks: Bookmarks;
  index: number;
}

export function ArtifactCard({ artifact, aspect, onOpen, bookmarks, index }: CardProps) {
  const cat = categoryById(artifact.category);
  const era = eraById(artifact.era);
  const saved = bookmarks.has(artifact.id);

  return (
    <article
      className="reveal is-in group relative flex flex-col border border-line bg-paper transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-ink/40 hover:shadow-[0_28px_60px_-40px_rgba(25,25,25,0.6)]"
      style={{ transitionDelay: `${Math.min(index, 8) * 45}ms` }}
    >
      <div className="relative overflow-hidden border-b border-line">
        <ArtifactPlate artifact={artifact} className={`${aspect} w-full`} />
        <span
          aria-hidden
          className="absolute left-0 top-0 z-30 h-full w-[2px] origin-top scale-y-0 bg-archive transition-transform duration-500 group-hover:scale-y-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="label flex items-center gap-2 text-[9px] text-muted">
            <span
              className="inline-block h-1.5 w-1.5"
              style={{ background: eraAccent[artifact.era] }}
              aria-hidden
            />
            {cat.code} · {era.years}
          </span>
          <button
            type="button"
            onClick={() => bookmarks.toggle(artifact.id)}
            aria-pressed={saved}
            aria-label={saved ? `Remove ${artifact.title} from My Archive` : `Save ${artifact.title} to My Archive`}
            title={saved ? "Remove from My Archive" : "Save to My Archive"}
            className={`relative z-20 -mr-1 -mt-1 p-1.5 transition-colors duration-300 ${
              saved ? "text-archive" : "text-muted hover:text-ink"
            }`}
          >
            <IconBookmark size={15} filled={saved} />
          </button>
        </div>

        <h3 className="mt-3 text-[clamp(1.3rem,2vw,1.75rem)] leading-[1.05]">
          <button
            type="button"
            onClick={() => onOpen(artifact.id)}
            className="text-left after:absolute after:inset-0 after:content-['']"
            aria-label={`Open the record for ${artifact.title}`}
          >
            {artifact.title}
          </button>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-[0.86rem] leading-relaxed text-slate-ink">
          {artifact.blurb}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <span className="font-mono text-[0.68rem] text-muted">{artifact.year}</span>
          <span className="label flex items-center gap-1.5 text-[9px] text-archive">
            Open record
            <IconArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Editorial rhythm: wide / medium / three-up, repeating — never a uniform grid. */
export const layoutFor = (i: number) => {
  const cycle = i % 7;
  const spans = [
    "md:col-span-6 lg:col-span-7",
    "md:col-span-6 lg:col-span-5",
    "md:col-span-6 lg:col-span-4",
    "md:col-span-6 lg:col-span-4",
    "md:col-span-6 lg:col-span-4",
    "md:col-span-6 lg:col-span-5",
    "md:col-span-6 lg:col-span-7",
  ];
  const aspects = [
    "aspect-[16/10]",
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[1/1]",
    "aspect-[1/1]",
    "aspect-[4/3]",
    "aspect-[16/10]",
  ];
  return { span: spans[cycle], aspect: aspects[cycle] };
};
