import { execSync } from "node:child_process";

/**
 * Local: lightweight Next.js build only (fast, low memory).
 * Cloudflare Workers CI sets WORKERS_CI=1 — runs OpenNext there, not on your machine.
 */
const isCloudflareCi = process.env.WORKERS_CI === "1";

if (isCloudflareCi) {
  execSync("npx opennextjs-cloudflare build", { stdio: "inherit" });
} else {
  execSync("npx next build", { stdio: "inherit" });
}
