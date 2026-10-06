import "./Hero.css";
import roastedChicken from "../../assets/roasted-chicken.jpg";

function Hero() {
  function handleScrollToMenu() {
    const menu = document.getElementById("cardapio");
    menu?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          🍗 Assados fresquinhos aos sábados e domingos
        </span>

        <h1>O sabor do final de semana está aqui.</h1>

        <p>
          Frango assado, carnes recheadas, costelinha, acompanhamentos e muito
          mais para deixar seu final de semana ainda mais saboroso.
        </p>

        <button className="hero-button" onClick={handleScrollToMenu}>
          Ver Cardápio
        </button>
      </div>

      <div className="hero-image">
        <img src={roastedChicken} alt="Imagem de um frango assado" />
      </div>
    </section>
  );
}

export default Hero;
