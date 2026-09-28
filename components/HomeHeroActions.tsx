import Link from "next/link";

export default function HomeHeroActions() {
  return (
    <div className="hero-actions">
      <Link
        href="#contact"
        className="glow-button text-on-primary px-6 sm:px-8 py-4 font-label font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
      >
        Get In Touch
      </Link>
      <Link
        href="#services"
        className="btn-secondary px-6 sm:px-8 py-4 text-base"
      >
        Explore Our Services
      </Link>
    </div>
  );
}
