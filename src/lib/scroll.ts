/** Shared smooth-scroll helper. Respects prefers-reduced-motion and accounts
 *  for the fixed header height so anchors never land underneath it. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 78;
  if (typeof window.scrollTo === "function") {
    try {
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    } catch {
      window.scrollTo(0, top);
    }
  }
}

/** Back-to-top with the same old-browser guards as scrollToId. */
export function scrollToTop() {
  if (typeof window === "undefined" || typeof window.scrollTo !== "function") return;
  const reduce =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  try {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  } catch {
    window.scrollTo(0, 0);
  }
}
