import BentoGrid from "@/imports/BentoGridVerticalScrollHeroBanner";

export default function HeroBento() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
    background: "transparent",      }}
    >
      <div className="hero-bento-track">
        <div className="hero-bento-copy">
          <BentoGrid />
        </div>

        <div className="hero-bento-copy">
          <BentoGrid />
        </div>
      </div>
    </div>
  );
}