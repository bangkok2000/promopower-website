"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getLinkClass = (path: string) => {
    return pathname === path
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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-8 py-5 border-b border-white/5">
        <Link href="/">
          <div className="text-2xl font-black text-primary tracking-tighter font-headline neon-text-glow">
            PromoPower
          </div>
        </Link>
        <div className="hidden lg:flex gap-10 items-center">
          <Link className={getLinkClass("/our-story")} href="/our-story">
            Our Story
          </Link>
          <Link className={getLinkClass("/services")} href="/services">
            Services
          </Link>
          <Link className={getLinkClass("/our-work")} href="/our-work">
            Our Work & Talent
          </Link>
          <Link className={getLinkClass("/jobseekers")} href="/jobseekers">
            Jobseekers
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link href="/contact-us">
            <button className="glow-button text-on-primary px-8 py-3 rounded-full font-headline font-extrabold text-sm hover:scale-105 active:scale-95 transition-all">
              Plan a Campaign
            </button>
          </Link>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal-dark/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center gap-10 transition-all duration-500 origin-top
        ${isMenuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'}`}
      >
        <Link className={getMobileLinkClass("/our-story")} href="/our-story">
          Our Story
        </Link>
        <Link className={getMobileLinkClass("/services")} href="/services">
          Services
        </Link>
        <Link className={getMobileLinkClass("/our-work")} href="/our-work">
          Our Work
        </Link>
        <Link className={getMobileLinkClass("/jobseekers")} href="/jobseekers">
          Jobseekers
        </Link>
        <Link href="/contact-us" className="mt-8">
          <button className="glow-button text-on-primary px-10 py-5 rounded-full font-headline font-extrabold text-xl hover:scale-105 active:scale-95 transition-all">
            Plan a Campaign
          </button>
        </Link>
      </div>
    </>
  );
}
