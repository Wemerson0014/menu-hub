import "./MenuSection.css";
import { products } from "../../data/products";

function MenuSection() {
  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2>Nosso Cardápio</h2>
        <p>Os assados mais pedidos do domingo.</p>
      </div>

      <div className="menu-grid">
        {products.map((product) => (
          <article key={product.id} className="menu-card">
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
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
