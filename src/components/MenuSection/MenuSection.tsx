import "./MenuSection.css";
import { products } from "../../data/products";
import MenuCard from "../MenuCard/MenuCard";

interface MenuSectionProps {
  searchTerm: string;
}

function MenuSection({ searchTerm }: MenuSectionProps) {
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(normalizedSearchTerm) ||
      product.description.toLowerCase().includes(normalizedSearchTerm),
  );

  return (
    <section id="cardapio" className="menu-section">
      <div className="menu-header">
        <h2>Escolha seu favorito</h2>
        <p>
          Assados, carnes recheadas, acompanhamentos e outras delícias
          preparadas para você.
        </p>
      </div>

      <div className="menu-grid">
        {filteredProducts.length === 0 ? (
          <h2>Nenhum produto foi encontrado com sua pesquisa.</h2>
        ) : (
          filteredProducts.map((product) => (
            <MenuCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}

export default MenuSection;
