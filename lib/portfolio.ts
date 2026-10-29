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

export function portfolioSectionId(slug: string): string {
  return `portfolio-${slug}`;
}
