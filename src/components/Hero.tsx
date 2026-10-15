import { useEffect, useState } from "react";
import { eras, siteConfig, type EraId } from "@/config";
import { archiveStats, artifacts, featuredArtifact } from "@/data/artifacts";
import { scrollToId } from "@/lib/scroll";
import { eraAccent } from "@/lib/tokens";
import { ArtifactPlate } from "./ArtifactPlate";
import { IconArrowDown, IconArrowRight } from "./icons";

interface HeroProps {
  onOpenArtifact: (id: string) => void;
  onSelectEra: (eraId: EraId) => void;
}

const SPAN_START = 1989;

export function Hero({ onOpenArtifact, onSelectEra }: HeroProps) {
  const [ready, setReady] = useState(false);
  const [hoverEra, setHoverEra] = useState<string | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  const spanEnd = Math.max(...eras.map((e) => e.to));
  const span = spanEnd - SPAN_START;
  const collage = [
    artifacts.find((a) => a.id === "ncsa-mosaic"),
    artifacts.find((a) => a.id === "iphone"),
  ];

  const ticker = [...artifacts]
    .sort((a, b) => a.yearNum - b.yearNum)
    .map((a) => `${a.title} · ${a.year.split(" ")[0]}`);

  /** Reveal-on-load helper; the delay is applied inline via transitionDelay. */
  const rise = (_delay = 0) =>
    `transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
      ready ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
    }`;

  return (
    <section id="explore" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Layered background: paper wash, faint grid, red registration marks */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-paper absolute inset-0 opacity-[0.55]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 60% at 78% 8%, rgba(216,212,202,0.55) 0%, transparent 60%), radial-gradient(70% 50% at 6% 92%, rgba(217,74,56,0.07) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          {/* ---------- Left column: the masthead ---------- */}
          <div className="lg:col-span-6 lg:pt-4">
            <div className={`flex items-center gap-3 ${rise(0)}`} style={{ transitionDelay: "60ms" }}>
              <span className="anim-blink h-2 w-2 bg-archive" aria-hidden />
              <span className="label text-muted">
                Digital archive / {siteConfig.volume} · {SPAN_START} – {spanEnd}
              </span>
            </div>

            <h1
              className={`mt-6 text-[clamp(2.9rem,7.4vw,5.6rem)] ${rise(0)}`}
              style={{ transitionDelay: "140ms" }}
            >
              Before everything
              <br />
              was online,
              <br />
              <span className="relative inline-block italic">
                everything was new.
                <svg
                  aria-hidden
                  viewBox="0 0 320 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-[0.42em] w-full text-archive"
                  style={{
                    strokeDasharray: 340,
                    strokeDashoffset: ready ? 0 : 340,
                    transition: "stroke-dashoffset 1.4s ease 700ms",
                  }}
                >
                  <path
                    d="M2 8 C 80 2, 200 11, 318 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className={`mt-8 max-w-lg text-[1.05rem] leading-relaxed text-slate-ink ${rise(0)}`}
              style={{ transitionDelay: "260ms" }}
            >
              {siteConfig.intro}
            </p>

            <div
              className={`mt-9 flex flex-wrap items-center gap-3 ${rise(0)}`}
              style={{ transitionDelay: "340ms" }}
            >
              <button
                type="button"
                onClick={() => scrollToId("collections")}
                className="btn btn-primary"
              >
                Explore the archive <IconArrowRight size={15} />
              </button>
              <button
                type="button"
                onClick={() => scrollToId("timeline")}
                className="btn btn-ghost"
              >
                Travel through time <IconArrowDown size={15} />
              </button>
            </div>

            <dl
              className={`mt-12 grid max-w-lg grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 ${rise(0)}`}
              style={{ transitionDelay: "420ms" }}
            >
              {[
                { k: "Artefacts", v: archiveStats.artifacts },
                { k: "Eras", v: archiveStats.eras },
                { k: "Collections", v: archiveStats.collections },
                { k: "Citations", v: archiveStats.sources },
              ].map((s) => (
                <div key={s.k} className="bg-ivory px-3 py-3">
                  <dt className="label text-[9px] text-muted">{s.k}</dt>
                  <dd className="font-display mt-1 text-[1.7rem] leading-none">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------- Right column: the collage ---------- */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-[34rem] lg:max-w-none">
              <div
                className={`relative ${rise(0)}`}
                style={{ transitionDelay: "220ms" }}
              >
                <button
                  type="button"
                  onClick={() => onOpenArtifact(featuredArtifact.id)}
                  className="group block w-full text-left"
                  aria-label={`Open the record for ${featuredArtifact.title}`}
                  style={{ transform: "rotate(-1.1deg)" }}
                >
                  <div className="border border-line bg-paper p-2 shadow-[0_24px_60px_-32px_rgba(25,25,25,0.5)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_36px_70px_-30px_rgba(25,25,25,0.55)]">
                    <ArtifactPlate
                      artifact={featuredArtifact}
                      eager
                      className="aspect-[4/3.4] w-full"
                    />
                    <div className="flex items-center justify-between px-1 pb-1 pt-2">
                      <span className="label text-[9px] text-muted">
                        Accession {featuredArtifact.catalogId}
                      </span>
                      <span className="label flex items-center gap-1 text-[9px] text-archive">
                        Open record <IconArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              {collage.map(
                (a, i) =>
                  a && (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => onOpenArtifact(a.id)}
                      aria-label={`Open the record for ${a.title}`}
                      className={`group absolute hidden w-[38%] border border-line bg-paper p-1.5 shadow-[0_18px_40px_-24px_rgba(25,25,25,0.55)] transition-all duration-500 hover:z-30 hover:-translate-y-2 hover:rotate-0 sm:block ${rise(0)} ${
                        i === 0
                          ? "-right-4 -top-8 z-20 rotate-[3.4deg] lg:-right-10"
                          : "-bottom-10 -left-4 z-20 rotate-[-4deg] lg:-left-10"
                      }`}
                      style={{ transitionDelay: `${320 + i * 110}ms` }}
                    >
                      <ArtifactPlate artifact={a} className="aspect-[4/3] w-full" />
                      <span className="label mt-1.5 block truncate px-0.5 text-[8px] text-muted transition-colors group-hover:text-archive">
                        {a.catalogId} · {a.title}
                      </span>
                    </button>
                  )
              )}
            </div>

            {/* ---------- Year ruler: a hint that the archive is navigable ---------- */}
            <div
              className={`mt-20 sm:mt-24 ${rise(0)}`}
              style={{ transitionDelay: "520ms" }}
            >
              <div className="flex items-baseline justify-between">
                <span className="label text-[9px] text-muted">Jump to an era</span>
                <span className="label text-[9px] text-archive">
                  {hoverEra ? eras.find((e) => e.id === hoverEra)?.years : `${SPAN_START} — ${spanEnd}`}
                </span>
              </div>
              <div className="relative mt-3 h-[54px] select-none">
                <div className="absolute inset-x-0 top-[18px] h-px bg-line" aria-hidden />
                {eras.map((era) => {
                  const left = ((era.from - SPAN_START) / span) * 100;
                  const width = ((era.to - era.from) / span) * 100;
                  const isActive = hoverEra === era.id;
                  return (
                    <button
                      key={era.id}
                      type="button"
                      onClick={() => onSelectEra(era.id)}
                      onMouseEnter={() => setHoverEra(era.id)}
                      onMouseLeave={() => setHoverEra(null)}
                      onFocus={() => setHoverEra(era.id)}
                      onBlur={() => setHoverEra(null)}
                      className="group absolute top-0 h-[54px] text-left"
                      style={{ left: `${left}%`, width: `${width}%` }}
                      aria-label={`${era.title}, ${era.years} — open the timeline`}
                    >
                      <span
                        className="absolute top-[13px] h-[11px] w-full border-x transition-all duration-300"
                        style={{
                          borderColor: eraAccent[era.id],
                          background: isActive ? `${eraAccent[era.id]}22` : "transparent",
                        }}
                        aria-hidden
                      />
                      <span
                        className="absolute top-[27px] h-4 w-px transition-all duration-300"
                        style={{
                          background: isActive ? eraAccent[era.id] : "var(--color-line)",
                          left: "50%",
                        }}
                        aria-hidden
                      />
                      <span
                        className={`label absolute top-[44px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] transition-colors duration-300 ${
                          isActive ? "text-ink" : "text-muted"
                        }`}
                      >
                        {era.from}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Ticker: the archive breathing ---------- */}
      <div className="ticker-mask relative mt-16 overflow-hidden border-y border-line-dark bg-graphite py-2.5">
        <div className="ticker-track gap-8" aria-hidden>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-8 pr-8">
              {ticker.map((t, i) => (
                <span key={`${dup}-${i}`} className="label flex items-center gap-8 text-[9px] text-ivory/55">
                  {t}
                  <span className="text-archive">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


