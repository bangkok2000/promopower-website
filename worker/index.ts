import { guardFormPost } from "./guard";
import { handleAdmin, handlePublicContent, serveMedia } from "./handlers/admin";
import { handleContact } from "./handlers/contact";
import { handleJobseekers } from "./handlers/jobseekers";
import { json } from "./responses";

export interface Env {
  ASSETS: Fetcher;
  SITE_CONTENT: KVNamespace;
  ADMIN_PASSWORD?: string;
  FORM_RECIPIENT_EMAIL?: string;
  FORM_FROM_EMAIL?: string;
  FORM_FROM_NAME?: string;
  FORM_FORCE_DEMO?: string;
  MAILCHANNELS_API_KEY?: string;
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

    if (url.pathname === "/api/content" && request.method === "GET") {
      return handlePublicContent(env);
    }

    if (url.pathname.startsWith("/api/admin/")) {
      return handleAdmin(request, env, url.pathname);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ success: false, error: "Not found." }, 404);
    }

    if (url.pathname.startsWith("/media/") && request.method === "GET") {
      const media = await serveMedia(url.pathname, env);
      if (media) return media;
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
