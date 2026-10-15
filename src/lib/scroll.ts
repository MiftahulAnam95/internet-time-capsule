/** Shared smooth-scroll helper. Respects prefers-reduced-motion and accounts
 *  for the fixed header height so anchors never land underneath it. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 78;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}
