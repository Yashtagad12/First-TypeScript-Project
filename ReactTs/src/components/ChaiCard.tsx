interface ChaiCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
  return (
    <div className={`chai-card ${isSpecial ? "special**" : ""}`}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      {isSpecial && <span className="special-badge">Special</span>}
    </div>
  );
}
