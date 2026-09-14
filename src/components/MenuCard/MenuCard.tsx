import "./MenuCard.css";
import type { Product } from "../../data/products";

interface MenuCardProps {
  product: Product;
}

function MenuCard(props: MenuCardProps) {
  return (
    <article className="menu-card">
      {props.product.image && (
        <img src={props.product.image} alt={props.product.name} />
      )}
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <p>
        {props.product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </article>
  );
}

export default MenuCard;
