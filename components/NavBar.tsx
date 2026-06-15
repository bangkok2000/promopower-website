"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICE_LINKS } from "@/lib/navigation";

type NavItem = {
  label: string;
  href: string;
  homeSection?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about-us", homeSection: "trust" },
  { label: "Services", href: "/services", homeSection: "services" },
  { label: "Industries", href: "/industries", homeSection: "industries" },
  { label: "Why PromoPower", href: "/why-promopower", homeSection: "why-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "FAQ", href: "/faq" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = openPath === pathname;

  const closeMenu = useCallback(() => {
    setOpenPath(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpenPath((current) => (current === pathname ? null : pathname));
  }, [pathname]);

  const resolveHref = useCallback(
    (item: NavItem) => {
      if (isHome && item.homeSection) {
        return `#${item.homeSection}`;
      }
      return item.href;
    },
    [isHome]
  );

  useEffect(() => {
    const syncHeaderHeight = () => {
      const header = document.getElementById("site-header");
      if (header) {
        document.documentElement.style.setProperty("--site-header-height", `${header.offsetHeight}px`);
      }
    };

    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);
    return () => window.removeEventListener("resize", syncHeaderHeight);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    return isActive
      ? "text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight"
      : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 pb-1 border-b-2 border-transparent";
  };

  const getMobileLinkClass = (path: string) => {
    return pathname === path
      ? "text-primary font-headline font-black text-3xl"
      : "text-on-surface-variant font-headline font-medium text-3xl hover:text-primary transition-colors duration-200";
  };

  return (
    <>
      <nav id="site-header" className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-white/5">
        <Link href="/" className="relative h-12 w-48 sm:h-14 sm:w-60 md:h-16 md:w-72 shrink-0">
          <Image
            src="/logo-transparent.png"
            alt="PromoPower Logo"
            fill
            sizes="(max-width: 640px) 12rem, (max-width: 768px) 15rem, 18rem"
            className="object-contain object-left opacity-100 hover:opacity-80 transition-opacity drop-shadow-md"
            priority
          />
        </Link>

        <div className="hidden lg:flex gap-5 xl:gap-6 items-center">
          {NAV_ITEMS.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 ${getLinkClass(item.href)}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  Services
                  <span className="material-symbols-outlined text-base">{servicesOpen ? "expand_less" : "expand_more"}</span>
                </button>
                {servicesOpen ? (
                  <div className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-surface shadow-2xl py-2 z-50">
                    {SERVICE_LINKS.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2 px-2">
                      <Link
                        href={resolveHref(item)}
                        className="block rounded-xl px-3 py-2.5 text-sm font-bold text-primary hover:bg-primary/10 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {isHome ? "All services on this page" : "View all services"}
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link key={item.label} className={getLinkClass(item.href)} href={resolveHref(item)}>
                {item.label}
              </Link>
            )
          )}
          <Link
            className={getLinkClass("/jobseekers")}
            href="/jobseekers"
          >
            Jobseekers
          </Link>
        </div>

        <div className="hidden lg:block shrink-0">
          <Link
            href={isHome ? "#contact" : "/contact-us"}
            className="glow-button text-on-primary px-8 py-3 rounded-full font-headline font-extrabold text-sm hover:scale-105 active:scale-95 transition-all"
          >
            Contact Us
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden text-white hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isMenuOpen}
        {...(!isMenuOpen ? { inert: true } : {})}
        className={`fixed inset-0 bg-charcoal-dark/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 origin-top ${
          isMenuOpen ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            className={getMobileLinkClass(item.href)}
            href={resolveHref(item)}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link className={getMobileLinkClass("/jobseekers")} href="/jobseekers" onClick={closeMenu}>
          Jobseekers
        </Link>
        <Link
          href={isHome ? "#contact" : "/contact-us"}
          onClick={closeMenu}
          className="mt-8 glow-button text-on-primary px-10 py-5 rounded-full font-headline font-extrabold text-xl hover:scale-105 active:scale-95 transition-all inline-block"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
