import type { CategoryId } from "@/config";
import { localizedCategories, localizedSite, useLanguage } from "@/i18n";
import { archiveStats } from "@/data/artifacts";
import { IconArrowRight, IconExternal, IconGithub } from "./icons";
import { scrollToTop } from "@/lib/scroll";
import { siteConfig } from "@/config";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterCategory: (id: CategoryId) => void;
}

export function Footer({ onNavigate, onFilterCategory }: FooterProps) {
  const { lang, t } = useLanguage();
  const site = localizedSite(lang);
  const categories = localizedCategories(lang);
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
              {site.tagline}
            </p>
            <p className="label mt-6 text-[9px] text-archive">
              {t.footer.volumeLine(site.volume, archiveStats.artifacts, archiveStats.spanFrom, archiveStats.spanTo)}
            </p>
            <button
              type="button"
              onClick={() => scrollToTop()}
              className="btn btn-light mt-8"
            >
              {t.footer.backToTop} <IconArrowRight size={14} />
            </button>
          </div>

          <nav aria-label={t.footer.sectionsTitle} className="lg:col-span-3">
            <p className="label text-[9px] text-ivory/40">{t.footer.sectionsTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {t.footer.sectionLinks.map((s) => (
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

          <nav aria-label={t.footer.collectionsTitle} className="lg:col-span-2">
            <p className="label text-[9px] text-ivory/40">{t.footer.collectionsTitle}</p>
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
            <p className="label text-[9px] text-ivory/40">{t.footer.elsewhereTitle}</p>
            <ul className="mt-4 space-y-3 text-[0.88rem]">
              <li>
                <a
                  href={siteConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconGithub size={14} /> {t.footer.sourceCode}
                </a>
              </li>
              <li>
                <a
                  href="https://commons.wikimedia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconExternal size={13} /> {t.footer.wikimedia}
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconExternal size={13} /> {t.footer.wayback}
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/History_of_the_Internet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link flex items-center gap-2 text-ivory/80 hover:text-ivory"
                >
                  <IconExternal size={13} /> {t.footer.history}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[9px] leading-relaxed text-ivory/45">
            {t.footer.copyright(year, site.name)}
          </p>
          <p className="label max-w-xl text-[9px] leading-relaxed text-ivory/45">
            {t.footer.disclaimer}
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
