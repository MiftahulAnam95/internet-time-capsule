import { Component } from "react";
import type { ReactNode } from "react";
import { en } from "@/i18n/en";
import { id } from "@/i18n/id";
import type { Lang } from "@/i18n/types";

/**
 * Last line of defence against a blank page: if any part of the archive
 * throws during render, show a branded, bilingual recovery panel instead
 * of leaving the visitor on an empty screen.
 */
interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

const detectLang = (): Lang => {
  try {
    const stored = window.localStorage.getItem("itc:lang:v1");
    if (stored === "id" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return typeof navigator !== "undefined" &&
    navigator.language?.toLowerCase().startsWith("id")
    ? "id"
    : "en";
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    // Visible in devtools; the panel below is what the visitor sees.
    console.error("[internet-time-capsule]", error);
  }

  render() {
    if (!this.state.error) return this.props.children;

    const lang = detectLang();
    const t = (lang === "id" ? id : en).error;

    return (
      <div className="grain relative flex min-h-screen items-center justify-center bg-ivory px-5 py-16">
        <div
          role="alert"
          className="w-full max-w-xl border border-line bg-paper p-8 shadow-[0_30px_70px_-45px_rgba(25,25,25,0.55)] sm:p-10"
        >
          <span className="label bg-archive px-2 py-1 text-[10px] text-paper">
            Internet Time Capsule
          </span>
          <h1 className="mt-5 text-[clamp(1.9rem,4.5vw,2.8rem)] leading-[1.02]">{t.title}</h1>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-ink">{t.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              {t.reload}
            </button>
          </div>
          {this.state.error?.message && (
            <details className="mt-7 border-t border-line pt-4">
              <summary className="label cursor-pointer text-[9px] text-muted">
                {t.detail}
              </summary>
              <p className="mt-3 break-words font-mono text-[0.72rem] leading-relaxed text-muted">
                {String(this.state.error.message).slice(0, 500)}
              </p>
            </details>
          )}
        </div>
      </div>
    );
  }
}
