import "./MenuCard.css";
import type { Product } from "../../data/products";

interface MenuCardProps {
  product: Product;
}

function MenuCard({ product }: MenuCardProps) {
  return (
    <article className="menu-card">
      {product.image && <img src={product.image} alt={product.name} />}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </article>
  );
}

export default MenuCard;
