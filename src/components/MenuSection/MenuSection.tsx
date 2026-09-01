import "./MenuSection.css";
import roastedChicken from "../../assets/roasted-chicken.jpg";
import chickenWings from "../../assets/grilled_chicken_wings.jpg";
import ribs from "../../assets/ribs.jpg";

function MenuSection() {
  const products = [
    {
      id: 1,
      name: "Frango Assado",
      description: "Temperado com ervas e assado lentamente",
      price: 60,
      image: roastedChicken,
    },
    {
      id: 2,
      name: "Costelinha",
      description: "Crocante por fora e macia por dentro.",
      price: 80,
      image: ribs,
    },
    {
      id: 3,
      name: "Asinha Assada",
      description: "Bem douradas e cheias de sabor.",
      price: 50,
      image: chickenWings,
    },
  ];

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
