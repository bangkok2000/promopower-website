import { guardFormPost } from "./guard";
import { handleContact } from "./handlers/contact";
import { handleJobseekers } from "./handlers/jobseekers";
import { json } from "./responses";

export interface Env {
  ASSETS: Fetcher;
  FORM_RECIPIENT_EMAIL?: string;
  FORM_FROM_EMAIL?: string;
  FORM_FROM_NAME?: string;
  FORM_FORCE_DEMO?: string;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      const blocked = guardFormPost(request);
      if (blocked) return blocked;
      return handleContact(request, env);
    }

    if (url.pathname === "/api/jobseekers" && request.method === "POST") {
      const blocked = guardFormPost(request);
      if (blocked) return blocked;
      return handleJobseekers(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ success: false, error: "Not found." }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
