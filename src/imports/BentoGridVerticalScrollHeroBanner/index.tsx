import { bentoItems, type BentoItem } from "./bentoData";

function BentoItem({ item }: { item: BentoItem }) {
  const containerStyle = {
    position: "absolute" as const,
    left: `${item.x}px`,
    top: `${item.y}px`,
    width: `${item.width}px`,
    height: `${item.height}px`,
  };

  if (item.crop) {
    return (
      <div
        className="absolute overflow-hidden pointer-events-none"
        style={containerStyle}
      >
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute max-w-none"
          style={{
            width: item.crop.width,
            height: item.crop.height,
            left: item.crop.left,
            top: item.crop.top,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="absolute pointer-events-none"
      style={containerStyle}
    >
      <img
        src={item.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 max-w-none object-cover size-full"
      />
    </div>
  );
}

export default function BentoGridVerticalScrollHeroBanner() {
  return (
    <div className="relative size-full" data-name="BENTO GRID VERTICAL SCROLL HERO BANNER">{bentoItems.map((item) => (
  <BentoItem key={item.id} item={item} />
))}
    </div>
  );
}