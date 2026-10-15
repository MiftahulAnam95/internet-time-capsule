import { useState } from "react";
import { comparisons } from "@/data/comparisons";
import { getArtifact } from "@/data/artifacts";
import { useInView } from "@/hooks/useInView";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArrowLeft, IconArrowRight } from "./icons";

interface CompareProps {
  onOpenArtifact: (id: string) => void;
}

export function Compare({ onOpenArtifact }: CompareProps) {
  const { ref, inView } = useInView<HTMLElement>(0.06);
  const [pairIndex, setPairIndex] = useState(0);
  const pair = comparisons[pairIndex];

  const move = (dir: 1 | -1) =>
    setPairIndex((i) => (i + dir + comparisons.length) % comparisons.length);

  return (
    <section
      id="compare"
      ref={ref}
      className="grain grain-light relative overflow-hidden bg-graphite py-20 text-ivory sm:py-28"
    >
      <div aria-hidden className="absolute inset-0 opacity-40">
        <div className="grid-paper-dark absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 12% 0%, rgba(168,112,63,0.16) 0%, transparent 60%), radial-gradient(60% 50% at 92% 100%, rgba(78,110,129,0.18) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className={`reveal ${inView ? "is-in" : ""} flex flex-wrap items-end justify-between gap-8 border-b border-line-dark pb-6`}>
          <div>
            <span className="label text-archive">Section 04 — Then vs now</span>
            <h2 className="mt-4 text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[0.95]">
              Two internets,
              <br />
              held side by side
            </h2>
          </div>
          <p className="max-w-sm text-[0.92rem] leading-relaxed text-ivory/70">
            Six pairings from the catalogue. Each one puts a period object next to its modern
            descendant and explains what actually changed — the tools, the economics and the
            habits, not just the screenshots.
          </p>
        </header>

        {/* ---------- Pair selector ---------- */}
        <div
          className={`reveal ${inView ? "is-in" : ""} mt-8 flex flex-wrap items-center gap-2`}
          style={{ transitionDelay: "80ms" }}
        >
          {comparisons.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setPairIndex(i)}
              aria-pressed={i === pairIndex}
              className={`label border px-3 py-2 text-[9px] transition-all duration-300 ${
                i === pairIndex
                  ? "border-archive bg-archive text-paper"
                  : "border-line-dark text-ivory/60 hover:border-ivory/50 hover:text-ivory"
              }`}
            >
              {c.kicker} · {c.title}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="border border-line-dark p-2.5 text-ivory/70 transition-colors hover:border-ivory hover:text-ivory"
              aria-label="Previous comparison"
            >
              <IconArrowLeft size={15} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="border border-line-dark p-2.5 text-ivory/70 transition-colors hover:border-ivory hover:text-ivory"
              aria-label="Next comparison"
            >
              <IconArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* ---------- The two panels ---------- */}
        <div key={pair.id} className="anim-fade mt-8 grid grid-cols-1 gap-px bg-line-dark lg:grid-cols-[1fr_auto_1fr]">
          {(["then", "now"] as const).map((side) => {
            const s = pair[side];
            const artifact = s.artifactId ? getArtifact(s.artifactId) : undefined;
            const isNow = side === "now";
            return (
              <article
                key={side}
                className={`relative bg-graphite p-5 sm:p-8 ${isNow ? "lg:order-3" : "lg:order-1"}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    className={`label px-2 py-1 text-[9px] ${
                      isNow ? "bg-archive text-paper" : "bg-ivory/12 text-ivory/80"
                    }`}
                  >
                    {s.label} · {s.years}
                  </span>
                  {artifact && (
                    <span className="label text-[9px] text-ivory/40">{artifact.catalogId}</span>
                  )}
                </div>

                <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02]">{s.title}</h3>

                {artifact && (
                  <button
                    type="button"
                    onClick={() => onOpenArtifact(artifact.id)}
                    className="group mt-5 block w-full text-left"
                    aria-label={`Open the record for ${artifact.title}`}
                  >
                    <div className="border border-line-dark transition-colors duration-500 group-hover:border-ivory/40">
                      <ArtifactPlate
                        artifact={artifact}
                        className={`w-full ${isNow ? "aspect-[16/10]" : "aspect-[16/10]"}`}
                      />
                    </div>
                    <span className="label mt-2.5 flex items-center justify-between text-[9px] text-ivory/45 transition-colors group-hover:text-archive">
                      <span className="truncate">{artifact.title}</span>
                      <span className="ml-3 shrink-0">Open record →</span>
                    </span>
                  </button>
                )}

                <dl className="mt-6 divide-y divide-line-dark border-y border-line-dark">
                  {s.points.map((p) => (
                    <div key={p.label} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
                      <dt className="label pt-0.5 text-[9px] text-ivory/40">{p.label}</dt>
                      <dd className="text-[0.86rem] leading-relaxed text-ivory/85">{p.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}

          {/* Centre rule with the years */}
          <div className="relative hidden w-[86px] items-center justify-center bg-graphite lg:order-2 lg:flex">
            <span aria-hidden className="absolute inset-y-0 left-1/2 w-px bg-line-dark" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-line-dark bg-graphite">
              <span className="label text-[10px] text-archive">vs</span>
            </span>
          </div>
        </div>

        {/* ---------- What actually changed ---------- */}
        <div className="mt-px border border-line-dark bg-graphite">
          <div className="grid grid-cols-1 border-b border-line-dark px-5 py-4 sm:px-8 lg:grid-cols-[9rem_1fr_1fr] lg:gap-10">
            <span className="label text-[9px] text-archive">Axis of change</span>
            <span className="label text-[9px] text-ivory/45">Then</span>
            <span className="label hidden text-[9px] text-ivory/45 lg:block">Now</span>
          </div>
          <ul>
            {pair.rows.map((row) => (
              <li
                key={row.axis}
                className="grid grid-cols-1 gap-2 border-b border-line-dark px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-[#1b1b19] sm:px-8 lg:grid-cols-[9rem_1fr_1fr] lg:gap-10"
              >
                <span className="label text-[9px] text-ivory/55">{row.axis}</span>
                <span className="text-[0.88rem] leading-relaxed text-ivory/80">
                  <span className="label mr-2 text-[9px] text-archive lg:hidden">Then</span>
                  {row.then}
                </span>
                <span className="text-[0.88rem] leading-relaxed text-ivory/80">
                  <span className="label mr-2 text-[9px] text-ivory/45 lg:hidden">Now</span>
                  {row.now}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Curatorial summary ---------- */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h3 className="label text-[9px] text-ivory/45">Summary of the evolution</h3>
            <p className="mt-4 font-display text-[clamp(1.35rem,2.7vw,2rem)] italic leading-[1.3] text-ivory">
              {pair.thesis}
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-4">
            <button
              type="button"
              onClick={() => move(1)}
              className="btn btn-light justify-between"
            >
              Next pairing <IconArrowRight size={14} />
            </button>
            <p className="label text-[9px] leading-relaxed text-ivory/40">
              {String(pairIndex + 1).padStart(2, "0")} of {String(comparisons.length).padStart(2, "0")} pairings ·
              both sides link to catalogue records
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
