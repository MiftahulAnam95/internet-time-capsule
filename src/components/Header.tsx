import { useEffect, useState } from "react";
import { localizedSite, useLanguage } from "@/i18n";
import { scrollToId, scrollToTop } from "@/lib/scroll";
import { IconBookmark, IconClose, IconMenu, IconSearch } from "./icons";

interface HeaderProps {
  savedCount: number;
  onOpenSearch: () => void;
}

export function Header({ savedCount, onOpenSearch }: HeaderProps) {
  const { lang, t, setLang } = useLanguage();
  const site = localizedSite(lang);
  const NAV = t.header.nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("explore");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section tracking for the nav underline.
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [NAV]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
    return () => document.body.classList.remove("is-locked");
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
    // Keep the address bar in step with the visible section.
    window.history.replaceState(null, "", `#${id}`);
  };

  const langToggle = (idPrefix: string) => (
    <div
      role="group"
      aria-label={t.common.languageAria}
      className="flex items-stretch border border-line"
    >
      {(["id", "en"] as const).map((code) => (
        <button
          key={code}
          id={`${idPrefix}-${code}`}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          title={`${t.common.language}: ${code === "id" ? "Bahasa Indonesia" : "English"}`}
          className={`label px-2.5 py-2 text-[10px] transition-colors duration-300 ${
            lang === code
              ? "bg-ink text-ivory"
              : "text-muted hover:bg-paper hover:text-ink"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <a
        href="#collections"
        onClick={(e) => {
          e.preventDefault();
          go("collections");
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t.header.skipLink}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
          scrolled
            ? "border-b border-line bg-ivory/95 py-2 backdrop-blur-[2px]"
            : "border-b border-transparent bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-5 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToTop()}
            className="group flex items-baseline gap-2 text-left"
            aria-label={t.header.backToTopAria(site.name)}
          >
            <span className="font-display text-[1.35rem] leading-none tracking-tight sm:text-[1.55rem]">
              Internet&nbsp;Time&nbsp;Capsule
            </span>
            <span className="label hidden text-archive transition-colors group-hover:text-ink md:inline">
              {site.volume}
            </span>
          </button>

          <nav aria-label={t.footer.sectionsTitle} className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={`label relative pb-1 transition-colors duration-300 ${
                      active === item.id ? "text-archive" : "text-slate-ink hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 bottom-0 h-px origin-left bg-archive transition-transform duration-300 ${
                        active === item.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <div className="hidden sm:block">{langToggle("lang-desktop")}</div>
            <button
              type="button"
              onClick={onOpenSearch}
              className="group flex items-center gap-2 border border-line px-2.5 py-2 transition-colors duration-300 hover:border-ink sm:px-3"
              aria-label={t.header.searchAria}
            >
              <IconSearch size={15} />
              <span className="label hidden text-muted group-hover:text-ink sm:inline">
                {t.header.search}
              </span>
              <kbd className="label hidden border border-line px-1 text-[9px] text-muted md:inline">
                /
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => go("archive")}
              className="group relative flex items-center gap-2 border border-line px-2.5 py-2 transition-colors duration-300 hover:border-ink sm:px-3"
              aria-label={t.header.archiveAria(savedCount)}
            >
              <IconBookmark size={15} filled={savedCount > 0} />
              <span className="label hidden text-muted group-hover:text-ink sm:inline">{t.header.archive}</span>
              <span
                className={`label min-w-[1.15rem] px-1 text-center text-[9px] ${
                  savedCount > 0 ? "bg-archive text-paper" : "text-muted"
                }`}
              >
                {String(savedCount).padStart(2, "0")}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="border border-line p-2 transition-colors duration-300 hover:border-ink lg:hidden"
              aria-label={t.header.openMenu}
              aria-expanded={menuOpen}
            >
              <IconMenu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/45 transition-opacity duration-[400ms] ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.header.menuDialogLabel}
          className={`grain absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col overflow-y-auto border-l border-line bg-ivory transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative flex items-center justify-between border-b border-line px-6 py-5">
            <span className="label text-archive">{t.header.contents}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-1 text-slate-ink transition-colors hover:text-archive"
              aria-label={t.header.closeMenu}
            >
              <IconClose size={18} />
            </button>
          </div>
          <nav className="relative px-6 py-4">
            <ul className="divide-y divide-line">
              {NAV.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className="group flex w-full items-baseline gap-4 py-4 text-left"
                  >
                    <span className="label w-6 text-archive">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[1.7rem] leading-none transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative mt-auto border-t border-line px-6 py-5">
            <div className="flex items-center justify-between gap-3">
              <span className="label text-[9px] text-muted">{t.common.language}</span>
              {langToggle("lang-drawer")}
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenSearch();
              }}
              className="btn btn-primary mt-4 w-full justify-center"
            >
              <IconSearch size={14} /> {t.header.searchCta}
            </button>
            <p className="label mt-4 text-[9px] leading-relaxed text-muted">
              {site.name} · {site.volume}
              <br />
              {site.tagline}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
