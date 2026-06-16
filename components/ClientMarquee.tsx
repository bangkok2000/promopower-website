const SPIRITS_BEVERAGES = [
  "APB Singapore",
  "Bacardi",
  "Chabot Armagnac",
  "Edrington",
  "Japan Tobacco International",
  "Pernod Ricard",
  "Piper-Heidsieck",
  "Rémy Cointreau",
  "Somersby",
  "Strongbow",
  "VCT Group of Wineries Asia",
];

const LUXURY_BEAUTY = [
  "Bvlgari",
  "Chanel",
  "Chopard",
  "Dior",
  "Elizabeth Arden",
  "Giorgio Armani",
  "Guerlain",
  "Jo Malone London",
  "Kenzo",
  "Kiehl's",
  "La Prairie",
  "Lancôme",
  "Maison Margiela",
  "Puig",
  "Shiseido",
  "Yves Saint Laurent",
];

function MarqueeRow({
  names,
  reverse = false,
}: {
  names: string[];
  reverse?: boolean;
}) {
  // Duplicate so the seamless loop always fills the viewport
  const doubled = [...names, ...names];
  return (
    <div className="overflow-hidden">
      <ul
        className={`flex gap-0 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        aria-hidden="true"
      >
        {doubled.map((name, i) => (
          <li
            key={i}
            className="inline-flex items-center gap-0 px-6 py-0"
          >
            <span className="font-label text-xs font-semibold tracking-[0.18em] uppercase text-on-surface-variant/70">
              {name}
            </span>
            <span className="ml-6 text-on-surface-variant/35 select-none">·</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="section-muted py-8"
    >
      <div className="site-shell mb-5">
        <p className="font-label text-xs font-semibold tracking-[0.18em] uppercase text-on-surface-variant/50">
          Brands We&rsquo;ve Served
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow names={SPIRITS_BEVERAGES} />
        <MarqueeRow names={LUXURY_BEAUTY} reverse />
      </div>
    </section>
  );
}
