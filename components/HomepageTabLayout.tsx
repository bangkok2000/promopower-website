import Link from "next/link";
import type { ReactNode } from "react";

type TabLink = {
  href: string;
  label: string;
};

type HomepageTabLayoutProps = {
  title: string;
  intro: ReactNode;
  link?: TabLink;
  children: ReactNode;
  sections?: ReactNode;
};

export function HomepageTabLayout({ title, intro, link, children, sections }: HomepageTabLayoutProps) {
  return (
    <div className="homepage-tab-panel-inner">
      <div className="homepage-tab-grid">
        <header className="homepage-tab-intro">
          <h2 className="section-title">{title}</h2>
          <div className="homepage-tab-intro-body">{intro}</div>
          {link ? <TabLink href={link.href} label={link.label} /> : null}
        </header>
        <div className="homepage-tab-content">{children}</div>
      </div>
      {sections ? <div className="homepage-tab-sections">{sections}</div> : null}
    </div>
  );
}

type HomepageTabSubsectionProps = {
  title: string;
  intro?: ReactNode;
  link?: TabLink;
  children: ReactNode;
};

export function HomepageTabSubsection({ title, intro, link, children }: HomepageTabSubsectionProps) {
  return (
    <div className="homepage-tab-subsection">
      <div className="homepage-tab-grid">
        <header className="homepage-tab-intro">
          <h3 className="homepage-tab-subtitle">{title}</h3>
          {intro ? <div className="homepage-tab-intro-body">{intro}</div> : null}
          {link ? <TabLink href={link.href} label={link.label} /> : null}
        </header>
        <div className="homepage-tab-content">{children}</div>
      </div>
    </div>
  );
}

function TabLink({ href, label }: TabLink) {
  return (
    <Link href={href} className="homepage-tab-link">
      {label}
      <span className="material-symbols-outlined text-base" aria-hidden="true">
        arrow_forward
      </span>
    </Link>
  );
}
