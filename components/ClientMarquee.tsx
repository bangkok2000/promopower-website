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

function ClientList({ names }: { names: string[] }) {
  return (
    <ul className="client-list">
      {names.map((name) => (
        <li key={name} className="client-list-name">
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function ClientMarquee() {
  return (
    <section aria-label="Selected clients" className="client-list-section">
      <div className="page-container client-list-layout">
        <h2 className="client-list-heading">Brands We&rsquo;ve Served</h2>
        <div className="client-list-groups">
          <ClientList names={SPIRITS_BEVERAGES} />
          <ClientList names={LUXURY_BEAUTY} />
        </div>
      </div>
    </section>
  );
}
