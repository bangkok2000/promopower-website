"use client";

import { syncScrollOffsetVars } from "@/lib/scroll-offset";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICE_LINKS } from "@/lib/navigation";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why PromoPower", href: "/why-promopower" },
  { label: "Our Work", href: "/our-work" },
  { label: "FAQ", href: "/faq" },
];

export default function NavBar() {
  const pathname = usePathname();
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

  useEffect(() => {
    const syncHeaderHeight = () => {
      syncScrollOffsetVars({ includeSectionNav: pathname === "/" });
    };

    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);
    return () => window.removeEventListener("resize", syncHeaderHeight);
  }, [pathname]);

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

  const isPathActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const getLinkClass = (path: string) => {
    return isPathActive(path)
      ? "text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight"
      : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 pb-1 border-b-2 border-transparent";
  };

  const getMobileLinkClass = (path: string) => {
    return isPathActive(path)
      ? "text-primary font-headline font-black text-2xl sm:text-3xl"
      : "text-on-surface-variant font-headline font-medium text-2xl sm:text-3xl hover:text-primary transition-colors duration-200";
  };

  const handleLogoClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== "/") return;

      event.preventDefault();
      closeMenu();
      setServicesOpen(false);
      window.history.pushState(null, "", "/");
      window.dispatchEvent(new Event("homepage-reset"));
      syncScrollOffsetVars({ includeSectionNav: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [closeMenu, pathname]
  );

  return (
    <>
      <nav id="site-header" className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="page-container py-4 sm:py-5">
          <div className="grid items-center gap-4 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <div className="flex items-center justify-between lg:contents">
              <Link href="/" onClick={handleLogoClick} className="relative h-12 w-48 sm:h-14 sm:w-60 md:h-16 md:w-72 shrink-0 lg:col-span-4 xl:col-span-3">
                <Image
                  src="/logo-transparent.png"
                  alt="PromoPower Logo"
                  fill
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 15rem, 18rem"
                  className="object-contain object-left opacity-100 hover:opacity-80 transition-opacity drop-shadow-md"
                  priority
                />
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center -mr-1 text-white hover:text-primary transition-colors"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="material-symbols-outlined text-3xl">{isMenuOpen ? "close" : "menu"}</span>
              </button>
            </div>

            <div className="hidden lg:flex lg:col-span-8 xl:col-span-9 items-center justify-between gap-4 min-w-0">
              <div className="flex gap-5 xl:gap-6 items-center min-w-0">
                {NAV_ITEMS.map((item) =>
                  item.label === "Services" ? (
                    <div
                      key={item.label}
                      className="relative inline-flex items-center gap-0.5"
                      ref={servicesRef}
                      onKeyDown={(event) => {
                        if (!servicesOpen) return;
                        const menu = servicesRef.current?.querySelector<HTMLDivElement>('[role="menu"]');
                        if (!menu) return;
                        const items = Array.from(menu.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'));
                        if (items.length === 0) return;
                        const currentIndex = items.findIndex((el) => el === document.activeElement);
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          const next = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
                          items[next].focus();
                        } else if (event.key === "ArrowUp") {
                          event.preventDefault();
                          const prev = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
                          items[prev].focus();
                        } else if (event.key === "Home") {
                          event.preventDefault();
                          items[0].focus();
                        } else if (event.key === "End") {
                          event.preventDefault();
                          items[items.length - 1].focus();
                        } else if (event.key === "Tab") {
                          setServicesOpen(false);
                        }
                      }}
                    >
                      <Link href={item.href} className={getLinkClass(item.href)}>
                        Services
                      </Link>
                      <button
                        type="button"
                        className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors p-1 -ml-1"
                        aria-expanded={servicesOpen}
                        aria-haspopup="menu"
                        aria-label="Show services menu"
                        onClick={() => setServicesOpen((open) => !open)}
                      >
                        <span aria-hidden="true" className="material-symbols-outlined text-base">{servicesOpen ? "expand_less" : "expand_more"}</span>
                      </button>
                      {servicesOpen ? (
                        <div role="menu" aria-label="Services" className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-surface shadow-2xl py-2 z-50">
                          {SERVICE_LINKS.map((service) => {
                            const active = pathname === service.href;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                role="menuitem"
                                aria-current={active ? "page" : undefined}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  active
                                    ? "text-primary font-bold bg-primary/10"
                                    : "text-on-surface-variant hover:text-primary hover:bg-white/5"
                                }`}
                                onClick={() => setServicesOpen(false)}
                              >
                                {service.label}
                              </Link>
                            );
                          })}
                          <div className="border-t border-white/10 mt-2 pt-2 px-2">
                            <Link
                              href="/services"
                              role="menuitem"
                              className="block rounded-xl px-3 py-2.5 text-sm font-bold text-primary hover:bg-primary/10 transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              View all services
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link key={item.label} className={getLinkClass(item.href)} href={item.href}>
                      {item.label}
                    </Link>
                  )
                )}
                <Link className={getLinkClass("/jobseekers")} href="/jobseekers">
                  Jobseekers
                </Link>
              </div>

              <Link
                href="/contact-us"
                className="glow-button text-on-primary px-8 py-3 rounded-full font-headline font-extrabold text-sm hover:scale-105 active:scale-95 transition-all shrink-0"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isMenuOpen}
        {...(!isMenuOpen ? { inert: true } : {})}
        className={`fixed inset-0 z-40 bg-charcoal-dark/95 backdrop-blur-2xl transition-all duration-500 origin-top lg:hidden ${
          isMenuOpen ? "visible opacity-100 scale-y-100" : "invisible pointer-events-none scale-y-0 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col pt-[var(--site-header-height)]">
          <div className="flex-1 overflow-y-auto overscroll-y-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <div className="mx-auto flex w-full max-w-md flex-col items-center gap-5 py-8">
              {NAV_ITEMS.map((item) =>
                item.label === "Services" ? (
                  <div key={item.label} className="flex w-full flex-col items-center gap-3">
                    <Link className={getMobileLinkClass(item.href)} href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                    <div className="flex w-full flex-col gap-2 border-l border-white/10 pl-4">
                      {SERVICE_LINKS.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMenu}
                          className={`text-base leading-snug transition-colors ${
                            pathname === service.href
                              ? "font-bold text-primary"
                              : "text-on-surface-variant hover:text-primary"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} className={getMobileLinkClass(item.href)} href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                )
              )}
              <Link className={getMobileLinkClass("/jobseekers")} href="/jobseekers" onClick={closeMenu}>
                Jobseekers
              </Link>
              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="mt-4 inline-flex min-h-11 items-center justify-center glow-button rounded-full px-10 py-4 text-xl font-headline font-extrabold text-on-primary transition-all hover:scale-105 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
