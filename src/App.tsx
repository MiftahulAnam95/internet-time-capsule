import { useCallback, useEffect, useState } from "react";
import type { CategoryId, EraId } from "@/config";
import { defaultFilters, type Filters } from "@/data/artifacts";
import { useArtifactRoute } from "@/hooks/useArtifactRoute";
import { useBookmarks } from "@/hooks/useBookmarks";
import { About } from "@/components/About";
import { ArtifactReader } from "@/components/ArtifactReader";
import { Collection } from "@/components/Collection";
import { Compare } from "@/components/Compare";
import { Discovery } from "@/components/Discovery";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { scrollToId } from "@/lib/scroll";
import { MyArchive } from "@/components/MyArchive";
import { SearchOverlay } from "@/components/SearchOverlay";
import { Timeline } from "@/components/Timeline";

export default function App() {
  const bookmarks = useBookmarks();
  const route = useArtifactRoute();
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [activeEra, setActiveEra] = useState<EraId>("early");
  const [searchOpen, setSearchOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ---------- Reading position indicator ---------- */
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ---------- Keyboard: "/" opens search ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing =
        el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.tagName === "SELECT" ||
          el.isContentEditable);
      if (e.key === "/" && !typing && !searchOpen && !route.artifactId) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, route.artifactId]);

  /* ---------- Cross-section navigation ---------- */
  const openArtifact = useCallback((id: string) => route.open(id), [route]);

  const selectEra = useCallback((id: EraId) => {
    setActiveEra(id);
    scrollToId("timeline");
  }, []);

  const exploreEra = useCallback((id: EraId) => {
    setFilters({ ...defaultFilters, eras: [id], sort: "year-asc" });
    setActiveEra(id);
    scrollToId("collections");
  }, []);

  const filterCategory = useCallback((id: CategoryId) => {
    setFilters({ ...defaultFilters, categories: [id] });
    scrollToId("collections");
  }, []);

  const applyFiltersFromSearch = useCallback(
    (patch: { query?: string; categories?: CategoryId[]; eras?: EraId[] }) => {
      setFilters({ ...defaultFilters, ...patch });
      if (patch.eras?.length) setActiveEra(patch.eras[0]);
    },
    []
  );

  return (
    <div className="relative min-h-screen bg-ivory">
      {/* Reading progress — a thin archive red rule under the header */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-archive"
        style={{ transform: `scaleX(${progress})` }}
      />

      <Header savedCount={bookmarks.count} onOpenSearch={() => setSearchOpen(true)} />

      <main>
        <Hero onOpenArtifact={openArtifact} onSelectEra={selectEra} />
        <Featured onOpenArtifact={openArtifact} bookmarks={bookmarks} />
        <Timeline
          activeEra={activeEra}
          onSelectEra={setActiveEra}
          onOpenArtifact={openArtifact}
          onExploreEra={exploreEra}
        />
        <Collection
          filters={filters}
          onFiltersChange={setFilters}
          onOpenArtifact={openArtifact}
          bookmarks={bookmarks}
        />
        <Compare onOpenArtifact={openArtifact} />
        <Discovery onOpenArtifact={openArtifact} bookmarks={bookmarks} />
        <MyArchive
          bookmarks={bookmarks}
          onOpenArtifact={openArtifact}
          onBrowse={() => scrollToId("collections")}
          onSurprise={() => scrollToId("discovery")}
        />
        <About />
      </main>

      <Footer onNavigate={scrollToId} onFilterCategory={filterCategory} />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectArtifact={openArtifact}
        onApplyFilters={applyFiltersFromSearch}
        onSurprise={() => scrollToId("discovery")}
      />

      {route.artifactId && (
        <ArtifactReader
          artifactId={route.artifactId}
          onClose={route.close}
          onNavigate={openArtifact}
          onBackToCollection={() => {
            route.close();
            scrollToId("collections");
          }}
          bookmarks={bookmarks}
        />
      )}
    </div>
  );
}
