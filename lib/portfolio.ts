import { PORTFOLIO_GROUPS } from "@/lib/data";

export function portfolioClientSlug(client: string): string {
  return client
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type PortfolioNavItem = {
  client: string;
  slug: string;
};

export function getPortfolioNavItems(): PortfolioNavItem[] {
  return PORTFOLIO_GROUPS.map(({ client }) => ({
    client,
    slug: portfolioClientSlug(client),
  }));
}

export function portfolioSectionId(slug: string): string {
  return `portfolio-${slug}`;
}
