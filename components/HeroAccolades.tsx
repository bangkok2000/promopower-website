import Image from "next/image";
import { AWARD_BADGES } from "@/lib/awards";

type HeroAccoladesProps = {
  className?: string;
};

export default function HeroAccolades({ className = "" }: HeroAccoladesProps) {
  return (
    <aside className={className} aria-label="Accreditations and credentials">
      <ul className="hero-accolades-list">
        {AWARD_BADGES.map((award) => (
          <li key={award.title} className="hero-accolades-item">
            <div className={`hero-accolade-icon ${award.image ? "hero-accolade-icon-badge" : ""}`}>
              {award.image ? (
                <Image
                  src={award.image.src}
                  alt={award.image.alt}
                  width={award.image.width}
                  height={award.image.height}
                  className="hero-accolade-badge-img"
                />
              ) : (
                <span className={`material-symbols-outlined text-[1.75rem] ${award.iconClass}`}>{award.icon}</span>
              )}
            </div>
            <div className="hero-accolade-copy">
              <span className="hero-accolade-title">{award.title}</span>
              <span className="hero-accolade-subtitle">{award.subtitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
