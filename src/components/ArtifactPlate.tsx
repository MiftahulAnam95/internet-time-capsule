import { useEffect, useState } from "react";
import { categoryById, eraById } from "@/config";
import { commonsUrl, type Artifact } from "@/data/types";
import { eraAccent, monogram } from "@/lib/tokens";

/**
 * Every artefact gets a framed "plate", museum style.
 * If a freely licensed image exists it is loaded lazily inside the plate;
 * if it fails, is missing, or is still loading, a curator's plate is shown
 * instead of a broken-image icon.
 */

interface PlateProps {
  artifact: Artifact;
  className?: string;
  /** Show the archival caption strip beneath the image. */
  caption?: boolean;
  eager?: boolean;
  rounded?: string;
}

export function ArtifactPlate({ artifact, className = "", caption = false, eager = false }: PlateProps) {
  const image = artifact.image;
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [artifact.id]);

  const accent = eraAccent[artifact.era];
  const era = eraById(artifact.era);
  const cat = categoryById(artifact.category);

  return (
    <figure className={`m-0 flex flex-col ${className}`}>
      <div
        className="relative flex-1 overflow-hidden bg-[#20201d]"
        style={{ isolation: "isolate" }}
      >
        {/* Layered archival field: era tint + hairline grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.55]"
          style={{
            background: `radial-gradient(120% 90% at 15% 0%, ${accent}44 0%, transparent 55%), radial-gradient(100% 100% at 100% 100%, #2b2b28 0%, #171715 100%)`,
          }}
        />
        <div
          aria-hidden
          className="grid-paper-dark absolute inset-0 opacity-40"
        />

        {image && !failed ? (
          <>
            <img
              src={commonsUrl(image.file, 900)}
              alt={image.alt}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={`relative z-10 h-full w-full transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              } ${image.fit === "cover" ? "object-cover" : "object-contain p-[8%]"}`}
              style={{ backgroundColor: image.fit === "cover" ? "#20201d" : "transparent" }}
            />
            {!loaded && <PlateSkeleton />}
          </>
        ) : (
          <CuratorsPlate artifact={artifact} accent={accent} />
        )}

        {/* Registration marks, like a scanner bed */}
        <Corners />

        {/* Archive corner label */}
        <div className="absolute left-0 top-0 z-20 flex items-stretch">
          <span className="label bg-archive px-2 py-1 text-[10px] text-paper">
            {artifact.catalogId}
          </span>
          <span className="label bg-ink/85 px-2 py-1 text-[10px] text-ivory/85 backdrop-blur-[1px]">
            {cat.code}
          </span>
        </div>
        <div className="absolute bottom-0 right-0 z-20">
          <span className="label bg-ink/80 px-2 py-1 text-[10px] text-ivory/80">
            {artifact.year}
          </span>
        </div>
      </div>

      {caption && image && !failed && (
        <figcaption className="border-t border-line bg-paper px-3 py-2">
          <p className="text-[12px] leading-snug text-slate-ink">{image.caption}</p>
          <p className="label mt-1 text-[9px] text-muted">
            {image.credit}
            {image.license ? ` · ${image.license}` : ""}
          </p>
        </figcaption>
      )}
      {caption && (!image || failed) && (
        <figcaption className="border-t border-line bg-paper px-3 py-2">
          <p className="label text-[9px] text-muted">
            Curator's plate · no freely licensed image verified for this entry
          </p>
          <p className="mt-1 text-[12px] leading-snug text-slate-ink">
            {era.title}, {era.years}
          </p>
        </figcaption>
      )}
    </figure>
  );
}

function PlateSkeleton() {
  return (
    <div aria-hidden className="absolute inset-0 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#20201d]" />
      <div
        className="scan-sweep absolute inset-y-0 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,242,234,0.10), transparent)",
        }}
      />
    </div>
  );
}

/** Fallback composition: typography and rules, no stock imagery. */
function CuratorsPlate({ artifact, accent }: { artifact: Artifact; accent: string }) {
  const era = eraById(artifact.era);
  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="label max-w-[9rem] text-left leading-[1.6] text-ivory/55">
          {era.title}
          <br />
          <span className="text-ivory/35">{era.years}</span>
        </span>
        <span className="label text-right text-ivory/35">{artifact.catalogId}</span>
      </div>

      <div className="relative -mx-1 flex items-center justify-center py-2">
        <span
          className="font-display select-none text-[clamp(3.5rem,9vw,7rem)] leading-none"
          style={{ color: `${accent}dd` }}
          aria-hidden
        >
          {monogram(artifact.title)}
        </span>
        <span
          aria-hidden
          className="absolute left-0 right-0 top-1/2 h-px"
          style={{ background: `${accent}55` }}
        />
      </div>

      <div className="space-y-1">
        <p className="font-display text-[clamp(1.05rem,2.1vw,1.5rem)] leading-[1.1] text-ivory">
          {artifact.title}
        </p>
        <p className="label text-[9px] text-ivory/40">Curator's plate · {categoryById(artifact.category).code}</p>
      </div>
    </div>
  );
}

function Corners() {
  const c = "absolute h-3 w-3 z-20 border-archive/70";
  return (
    <div aria-hidden>
      <span className={`${c} left-1.5 top-1.5 border-l border-t`} />
      <span className={`${c} right-1.5 top-1.5 border-r border-t`} />
      <span className={`${c} bottom-1.5 left-1.5 border-b border-l`} />
      <span className={`${c} bottom-1.5 right-1.5 border-b border-r`} />
    </div>
  );
}


