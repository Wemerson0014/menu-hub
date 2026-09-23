import "./MenuSection.css";
import { products } from "../../data/products";
import MenuCard from "../MenuCard/MenuCard";

interface MenuSectionProps {
  searchTerm: string;
}

function MenuSection({ searchTerm }: MenuSectionProps) {
  return (
    <section id="cardapio" className="menu-section">
      <div className="menu-header">
        <h2>Nosso Cardápio</h2>
        <p>Os assados mais pedidos do domingo.</p>
      </div>

      <div className="menu-grid">
        {products
          .filter(
            (product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()),
          )
          .map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default MenuSection;
