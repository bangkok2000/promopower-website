import { handleContact } from "./handlers/contact";
import { handleJobseekers } from "./handlers/jobseekers";

export interface Env {
  ASSETS: Fetcher;
  FORM_RECIPIENT_EMAIL?: string;
  FORM_FROM_EMAIL?: string;
  FORM_FROM_NAME?: string;
  FORM_FORCE_DEMO?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    if (url.pathname === "/api/jobseekers" && request.method === "POST") {
      return handleJobseekers(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ success: false, error: "Not found." }), {
        status: 404,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
