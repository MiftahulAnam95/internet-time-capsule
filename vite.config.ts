import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Allows `index.html` in the repository root to boot directly when served
 * as static files (e.g. GitHub Pages branch deployment from `main /`), while
 * still compiling `/src/main.tsx` during `vite` dev and `vite build`.
 */
function itcStaticRootSupport(): Plugin {
  return {
    name: "itc-static-root-support",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html
          .replace(/<link[^>]*data-itc-prebuilt[^>]*>\s*/g, "")
          .replace(
            /<script[^>]*data-itc-prebuilt[^>]*><\/script>/g,
            '<script type="module" src="/src/main.tsx"></script>'
          );
      },
    },
    generateBundle: {
      order: "post",
      handler(_, bundle) {
        const bundleDir = path.resolve(__dirname, "bundle");
        fs.mkdirSync(bundleDir, { recursive: true });
        for (const item of Object.values(bundle)) {
          if (item.type === "chunk" && item.isEntry) {
            fs.writeFileSync(
              path.join(bundleDir, "app.js"),
              `(function(){\n${item.code}\n})();\n`,
              "utf8"
            );
          } else if (item.type === "asset" && item.fileName.endsWith(".css")) {
            const css =
              typeof item.source === "string"
                ? item.source
                : Buffer.from(item.source).toString("utf8");
            fs.writeFileSync(path.join(bundleDir, "app.css"), css, "utf8");
          }
        }
      },
    },
    closeBundle() {
      const distHtmlPath = path.resolve(__dirname, "dist/index.html");
      if (!fs.existsSync(distHtmlPath)) return;
      const distHtml = fs.readFileSync(distHtmlPath, "utf8");
      const cssMatch = distHtml.match(
        /<style[^>]*rel="stylesheet"[^>]*>([\s\S]*?)<\/style>/
      );
      if (cssMatch) {
        const bundleDir = path.resolve(__dirname, "bundle");
        fs.mkdirSync(bundleDir, { recursive: true });
        fs.writeFileSync(path.join(bundleDir, "app.css"), cssMatch[1], "utf8");
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  // Relative base: the single-file build works from any path, including a
  // GitHub Pages project site (https://<user>.github.io/<repo>/).
  base: "./",
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  plugins: [itcStaticRootSupport(), react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
