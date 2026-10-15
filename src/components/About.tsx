import { siteConfig } from "@/config";
import { archiveStats } from "@/data/artifacts";
import { useInView } from "@/hooks/useInView";
import { IconExternal, IconGithub } from "./icons";

const method = [
  {
    label: "Dates",
    text: "Launch, development and peak popularity are recorded separately whenever they differ — the web was proposed in 1989, first published in 1991, and released royalty-free in 1993.",
  },
  {
    label: "Sources",
    text: "Every record lists at least one checkable reference: an institutional page, a primary announcement, or the relevant encyclopaedic article with its own citations.",
  },
  {
    label: "Claims",
    text: "Where a figure is a company's own claim rather than an independent measurement, it is attributed as such. Unverifiable details are left out.",
  },
  {
    label: "Images",
    text: "Photographs and screenshots come from Wikimedia Commons with author and licence recorded. Where no freely licensed image could be verified, the entry shows a curator's plate instead.",
  },
];

const meta = [
  { k: "Project type", v: "Interactive digital museum" },
  { k: "Built with", v: "HTML5, CSS3 and JavaScript (React + Tailwind, compiled to a static bundle)" },
  { k: "Data source", v: "Curated local archive with cited historical references" },
  { k: "Images", v: "Wikimedia Commons, attributed per record" },
  { k: "Storage", v: "Browser localStorage for My Archive — no backend, no accounts" },
  { k: "Hosting", v: "GitHub Pages, served from a relative path" },
  { k: "Catalogue", v: `${archiveStats.artifacts} records · ${archiveStats.eras} eras · ${archiveStats.collections} collections` },
];

export function About() {
  const { ref, inView } = useInView<HTMLElement>(0.06);
  const year = new Date().getFullYear();

  return (
    <section id="about" ref={ref} className="relative border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className={`reveal ${inView ? "is-in" : ""}`}>
          <span className="label text-archive">Section 07 — About</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[0.95]">
            Why keep an archive of the internet?
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className={`reveal ${inView ? "is-in" : ""} lg:col-span-7`} style={{ transitionDelay: "80ms" }}>
            <div className="space-y-5 text-[1rem] leading-[1.8] text-slate-ink">
              <p>
                The web is treated as permanent and behaves like the opposite. Pages are
                redesigned, services are acquired, features are withdrawn, companies are
                dissolved. Within a few years the object that defined a period — a browser,
                a client, a hosting service, a game — is often unreachable, and what remains
                is a description of it rather than the thing itself.
              </p>
              <p>
                This archive collects {archiveStats.artifacts} of those objects across four
                periods, from the first web proposal in 1989 to the generative systems that
                now answer questions in place of links. Each record tries to do three things:
                say precisely when it existed, explain what it changed, and cite something you
                can check.
              </p>
              <p>
                The point is not nostalgia. Reading the early web closely makes the present
                legible — you can see which decisions were inevitable and which were simply
                made early by a small number of people, and then inherited by everyone.
              </p>
            </div>

            <h3 className="label mt-12 text-[9px] text-muted">Curatorial method</h3>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {method.map((m) => (
                <div key={m.label} className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="label pt-1 text-[9px] text-archive">{m.label}</dt>
                  <dd className="text-[0.9rem] leading-relaxed text-slate-ink">{m.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-line bg-paper p-5 sm:p-6">
              <p className="label text-[9px] text-muted">Known limitations</p>
              <ul className="mt-3 space-y-2 text-[0.86rem] leading-relaxed text-slate-ink">
                <li>
                  · The catalogue is selective and Anglo-American in emphasis; major parts of
                  the internet's history in China, Russia, South Korea and Brazil are
                  represented only where they changed the global picture.
                </li>
                <li>
                  · Several services are documented from secondary sources because their
                  original internal documents are not public.
                </li>
                <li>
                  · My Archive lives in your browser only. Clearing site data removes it.
                </li>
              </ul>
            </div>
          </div>

          <aside className={`reveal ${inView ? "is-in" : ""} lg:col-span-5`} style={{ transitionDelay: "180ms" }}>
            <div className="border border-line bg-paper">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="label text-[9px] text-muted">Project record</span>
                <span className="label text-[9px] text-archive">{siteConfig.volume}</span>
              </div>
              <dl className="divide-y divide-line">
                {meta.map((row) => (
                  <div key={row.k} className="px-4 py-3.5">
                    <dt className="label text-[9px] text-muted">{row.k}</dt>
                    <dd className="mt-1.5 text-[0.86rem] leading-relaxed text-ink">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-line p-4">
                <a
                  href={siteConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  <IconGithub size={15} /> Source repository <IconExternal size={13} />
                </a>
                <p className="label mt-3 text-center text-[9px] leading-relaxed text-muted">
                  Set the repository address once in <code className="font-mono">src/config.ts</code>
                </p>
              </div>
            </div>

            <div className="mt-6 border border-line bg-ivory p-5">
              <p className="label text-[9px] text-muted">Colophon</p>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-slate-ink">
                Headlines set in <span className="font-display text-[1.05rem]">Instrument Serif</span>.
                Body text in Manrope. Archive labels, accession numbers and timestamps in
                IBM Plex Mono. Palette: warm ivory, near black, muted gray and a single
                archive red used only for markers, active states and accession numbers.
              </p>
              <p className="label mt-4 text-[9px] text-muted">
                Catalogue revision · {year}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
