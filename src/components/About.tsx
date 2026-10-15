import { siteConfig } from "@/config";
import { useLanguage } from "@/i18n";
import { archiveStats } from "@/data/artifacts";
import { useInView } from "@/hooks/useInView";
import { IconExternal, IconGithub } from "./icons";

export function About() {
  const { lang, t } = useLanguage();
  const { ref, inView } = useInView<HTMLElement>(0.06);
  const year = new Date().getFullYear();

  const catalogue =
    lang === "id"
      ? `${archiveStats.artifacts} arsip · ${archiveStats.eras} era · ${archiveStats.collections} koleksi`
      : `${archiveStats.artifacts} records · ${archiveStats.eras} eras · ${archiveStats.collections} collections`;

  return (
    <section id="about" ref={ref} className="relative border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className={`reveal ${inView ? "is-in" : ""}`}>
          <span className="label text-archive">{t.about.section}</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[0.95]">
            {t.about.title}
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className={`reveal ${inView ? "is-in" : ""} lg:col-span-7`} style={{ transitionDelay: "80ms" }}>
            <div className="space-y-5 text-[1rem] leading-[1.8] text-slate-ink">
              {t.about.body(archiveStats.artifacts).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="label mt-12 text-[9px] text-muted">{t.about.methodTitle}</h3>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {t.about.method.map((m) => (
                <div key={m.label} className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="label pt-1 text-[9px] text-archive">{m.label}</dt>
                  <dd className="text-[0.9rem] leading-relaxed text-slate-ink">{m.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-line bg-paper p-5 sm:p-6">
              <p className="label text-[9px] text-muted">{t.about.limitationsTitle}</p>
              <ul className="mt-3 space-y-2 text-[0.86rem] leading-relaxed text-slate-ink">
                {t.about.limitations.map((item, i) => (
                  <li key={i}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={`reveal ${inView ? "is-in" : ""} lg:col-span-5`} style={{ transitionDelay: "180ms" }}>
            <div className="border border-line bg-paper">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="label text-[9px] text-muted">{t.about.projectRecord}</span>
                <span className="label text-[9px] text-archive">{siteConfig.volume}</span>
              </div>
              <dl className="divide-y divide-line">
                {t.about.meta(catalogue).map((row) => (
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
                  <IconGithub size={15} /> {t.about.sourceRepo} <IconExternal size={13} />
                </a>
                <p className="label mt-3 text-center text-[9px] leading-relaxed text-muted">
                  {t.about.repoHint} <code className="font-mono">src/config.ts</code>
                </p>
              </div>
            </div>

            <div className="mt-6 border border-line bg-ivory p-5">
              <p className="label text-[9px] text-muted">{t.about.colophonTitle}</p>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-slate-ink">
                {t.about.colophonA} <span className="font-display text-[1.05rem]">{t.about.colophonSerif}</span>
                {t.about.colophonB}
              </p>
              <p className="label mt-4 text-[9px] text-muted">
                {t.about.catalogueRevision(year)}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
