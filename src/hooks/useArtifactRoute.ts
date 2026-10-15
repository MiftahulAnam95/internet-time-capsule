import { useCallback, useEffect, useRef, useState } from "react";

const PREFIX = "#/artifact/";

const readHash = () => {
  const h = window.location.hash;
  return h.startsWith(PREFIX) ? decodeURIComponent(h.slice(PREFIX.length)) : null;
};

/**
 * Hash-based deep links: #/artifact/<id>
 * Supports browser back/forward and shareable URLs, while leaving the
 * section anchors (#collections, #timeline …) alone.
 */
export function useArtifactRoute() {
  const [artifactId, setArtifactId] = useState<string | null>(() => readHash());
  /** Hashes we pushed ourselves — safe to undo with history.back(). */
  const pushed = useRef<Set<string>>(new Set());

  useEffect(() => {
    const onHashChange = () => setArtifactId(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const open = useCallback((id: string) => {
    if (readHash() === id) {
      setArtifactId(id);
      return;
    }
    pushed.current.add(id);
    window.location.hash = `${PREFIX}${id}`;
  }, []);

  const close = useCallback(() => {
    const current = readHash();
    if (!current) return;
    if (pushed.current.has(current) && window.history.length > 1) {
      window.history.back();
    } else {
      // Landed here from a shared link: rewrite the hash instead of leaving the site.
      const { pathname, search } = window.location;
      window.history.replaceState(null, "", `${pathname}${search}`);
      setArtifactId(null);
    }
  }, []);

  return { artifactId, open, close };
}
