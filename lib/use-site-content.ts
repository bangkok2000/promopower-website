"use client";

import { useEffect, useState } from "react";
import type { Job, PortfolioContent, PublishedContent } from "@/lib/site-content";
import { DEFAULT_JOBS, DEFAULT_PORTFOLIO } from "@/lib/site-content-defaults";

let request: Promise<PublishedContent | null> | null = null;

/** One request per page view, shared by every component that needs published content. */
function loadPublishedContent(): Promise<PublishedContent | null> {
  request ??= fetch("/api/content", { headers: { accept: "application/json" } })
    .then((response) => (response.ok ? (response.json() as Promise<PublishedContent>) : null))
    .catch(() => null);
  return request;
}

/**
 * Jobs published from /admin. `null` while loading; built-in defaults if nothing
 * has been published or the request fails.
 */
export function usePublishedJobs(): Job[] | null {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  useEffect(() => {
    let live = true;
    loadPublishedContent().then((content) => {
      if (live) setJobs(content?.jobs ?? DEFAULT_JOBS);
    });
    return () => {
      live = false;
    };
  }, []);
  return jobs;
}

/** Portfolio published from /admin. Starts with the built-in portfolio so the static page is complete. */
export function usePublishedPortfolio(): PortfolioContent {
  const [portfolio, setPortfolio] = useState<PortfolioContent>(DEFAULT_PORTFOLIO);
  useEffect(() => {
    let live = true;
    loadPublishedContent().then((content) => {
      if (live && content?.portfolio) setPortfolio(content.portfolio);
    });
    return () => {
      live = false;
    };
  }, []);
  return portfolio;
}
