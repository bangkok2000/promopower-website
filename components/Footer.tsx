import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal-dark border-t border-white/5 xl:px-24 px-12 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
        <div className="max-w-xs">
          <div className="font-headline font-black text-primary text-3xl mb-4 neon-text-glow">
            PromoPower
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant/60 mb-8">
            Copyright © 2026. PROMOPOWER PTE LTD.
            <br />
            CO REG 200208541K. 
            <br />
            EA LICENSE NO: 20C0109.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-1 md:justify-items-end">
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-on-surface text-sm uppercase tracking-widest">
              Quick Links
            </h5>
            <ul className="space-y-3 text-sm text-on-surface-variant/50">
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/our-story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/our-work">
                  Our Work & Talent
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/jobseekers">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-on-surface text-sm uppercase tracking-widest">
              Contact
            </h5>
            <ul className="space-y-3 text-sm text-on-surface-variant/50">
              <li>admin@promopower.com.sg</li>
              <li>+65 6123 4567</li>
              <li>65 Airport Boulevard, #03-37 Changi T3, Singapore 819663</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-on-surface text-sm uppercase tracking-widest">
              Follow Us
            </h5>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all cursor-pointer"
              >
                LN
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all cursor-pointer"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all cursor-pointer"
              >
                FB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
