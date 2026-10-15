import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { en } from "./en";
import { id } from "./id";
import type { Lang, Strings } from "./types";

const STORAGE_KEY = "itc:lang:v1";

const dictionaries: Record<Lang, Strings> = { en, id };

const detectLang = (): Lang => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch {
    /* private mode — fall through to detection */
  }
  if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("id")) {
    return "id";
  }
  return "en";
};

interface LanguageValue {
  lang: Lang;
  t: Strings;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode — the choice still applies for this visit */
    }
  }, []);

  // Keep multiple tabs of the archive in agreement.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "id" || e.newValue === "en")) {
        setLangState(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Keep the document shell (lang, title, description) in step with the UI.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dictionaries[lang].meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dictionaries[lang].meta.description);
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({ lang, t: dictionaries[lang], setLang }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

export const languageStorageKey = STORAGE_KEY;
