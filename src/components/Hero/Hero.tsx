import "./Hero.css";
import roastedChicken from "../../assets/roasted-chicken.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          🍗 Assados fresquinhos todos os domingos
        </span>

        <h1>O sabor do final de semana está aqui.</h1>

        <p>
          Frango assado, costela, barriga, joelho e muito mais para deixar seu
          almoço de domingo ainda melhor.
        </p>

        <button className="hero-button">Ver Cardápio</button>
      </div>

      <div className="hero-image">
        <img src={roastedChicken} alt="Imagem de um frango assado" />
      </div>
    </section>
  );
}

export default Hero;
