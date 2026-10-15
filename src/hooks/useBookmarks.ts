import { useCallback, useEffect, useState } from "react";

const KEY = "itc:my-archive:v1";

const read = (): string[] => {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
};

/**
 * My Archive — bookmarks persisted in localStorage.
 * Storage is per-browser: nothing is synced between devices, and the UI says so.
 */
export function useBookmarks() {
  const [saved, setSaved] = useState<string[]>(() => read());

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {
      /* private mode or full storage — the archive still works in memory */
    }
  }, [saved]);

  // Keep multiple tabs of the archive in agreement.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setSaved(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback((id: string) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev]));
  }, []);

  const remove = useCallback((id: string) => {
    setSaved((prev) => prev.filter((x) => x !== id));
  }, []);

  const clear = useCallback(() => setSaved([]), []);

  return {
    saved,
    count: saved.length,
    has: useCallback((id: string) => saved.includes(id), [saved]),
    toggle,
    remove,
    clear,
  };
}

export type Bookmarks = ReturnType<typeof useBookmarks>;
