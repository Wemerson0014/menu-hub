import "./MenuSection.css";
import { products } from "../../data/products";
import MenuCard from "../MenuCard/MenuCard";

function MenuSection() {
  return (
    <section id="cardapio" className="menu-section">
      <div className="menu-header">
        <h2>Nosso Cardápio</h2>
        <p>Os assados mais pedidos do domingo.</p>
      </div>

      <div className="menu-grid">
        {products.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
