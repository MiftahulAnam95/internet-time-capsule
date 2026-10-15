import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./i18n";

declare global {
  interface Window {
    /** Read by the inline boot check in index.html. */
    __ITC_MOUNTED?: boolean;
  }
}

const rootEl = document.getElementById("root");

if (!rootEl) {
  // Practically unreachable, but never leave a blank document without an explanation.
  const message =
    '<p style="font-family:Georgia,serif;padding:3rem;text-align:center">' +
    "Internet Time Capsule tidak dapat dimuat — elemen root hilang. / " +
    "Internet Time Capsule could not start — the root element is missing.</p>";
  if (document.body) {
    document.body.innerHTML = message;
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.body) document.body.innerHTML = message;
    });
  }
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ErrorBoundary>
    </StrictMode>
  );
  // Proves the bundle executed; the boot placeholder in index.html watches this flag.
  window.__ITC_MOUNTED = true;
}
