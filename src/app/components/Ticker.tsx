import tickerPaths from "@/imports/Container-2/svg-4f1wn8qbk3";
const items = [
  "DESIGN EDITORIAL",
  "ILUSTRAÇÃO",
  "IDENTIDADE VISUAL",
  "UX/UI",
  "DIVULGAÇÃO",
  "DADOS",
  "SOCIAL MEDIA",
];

function Star() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 22.0988 22.6181"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={tickerPaths.p19e75000}
        fill="#3A5942"
        stroke="#3A5942"
      />
    </svg>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
  {[...items, ...items, ...items].map((item, i) => (
    <div className="ticker-item" key={i}>
      <span className="ticker-text">{item}</span>

      <svg
        className="ticker-star"
        width="18"
        height="18"
        viewBox="0 0 22.0988 22.6181"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={tickerPaths.p19e75000}
          fill="#3A5942"
          stroke="#3A5942"
        />
      </svg>
    </div>
  ))}
</div>
    </div>
  );
}