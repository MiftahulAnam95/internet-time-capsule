import { categories, siteConfig, type CategoryId } from "@/config";
import { archiveStats } from "@/data/artifacts";
import { IconArrowRight, IconExternal, IconGithub } from "./icons";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterCategory: (id: CategoryId) => void;
}

const sections = [
  { id: "explore", label: "Explore" },
  { id: "featured", label: "Featured record" },
  { id: "timeline", label: "Timeline" },
  { id: "collections", label: "Collections" },
  { id: "compare", label: "Then vs Now" },
  { id: "discovery", label: "Random discovery" },
  { id: "archive", label: "My Archive" },
  { id: "about", label: "About" },
];

export function Footer({ onNavigate, onFilterCategory }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="grain grain-light relative overflow-hidden bg-ink pt-16 text-ivory sm:pt-20">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <div className="grid-paper-dark absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 border-b border-line-dark pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.92]">
              Internet
              <br />
              Time Capsule
            </p>
            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-ivory/65">
              {siteConfig.tagline}
            </p>
            <p className="label mt-6 text-[9px] text-archive">
              {siteConfig.volume} · {archiveStats.artifacts} records · {archiveStats.spanFrom}–{archiveStats.spanTo}
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn btn-light mt-8"
            >
              Back to the top <IconArrowRight size={14} />
            </button>
          </div>

          <nav aria-label="Footer sections" className="lg:col-span-3">
            <p className="label text-[9px] text-ivory/40">Sections</p>
            <ul className="mt-4 space-y-2.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(s.id)}
                    className="u-link text-[0.88rem] text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Collections" className="lg:col-span-2">
            <p className="label text-[9px] text-ivory/40">Collections</p>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => onFilterCategory(c.id)}
                    className="u-link text-[0.88rem] text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="label text-[9px] text-ivory/40">Elsewhere</p>
            <ul className="mt-4 space-y-3 text-[0.88rem]">
              <li>
                <a
                  href={siteConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconGithub size={14} /> Source code
                </a>
              </li>
              <li>
                <a
                  href="https://commons.wikimedia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconExternal size={13} /> Wikimedia Commons
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconExternal size={13} /> Wayback Machine
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/History_of_the_Internet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconExternal size={13} /> Internet history
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[9px] leading-relaxed text-ivory/45">
            © {year} {siteConfig.name}. An independent curatorial project.
          </p>
          <p className="label max-w-xl text-[9px] leading-relaxed text-ivory/45">
            Images are sourced from Wikimedia Commons and attributed on each record.
            All trademarks belong to their owners; this archive is not affiliated with, or
            endorsed by, any company it documents.
          </p>
        </div>
      </div>

      {/* Registration strip */}
      <div aria-hidden className="relative flex h-2">
        <span className="flex-1 bg-archive" />
        <span className="flex-1 bg-ivory/20" />
        <span className="flex-1 bg-ivory/45" />
        <span className="flex-1 bg-archive/60" />
      </div>
    </footer>
  );
}
