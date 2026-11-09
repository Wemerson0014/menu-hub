import "./AboutSection.css";
import ribs from "../../assets/roasted-ribs.webp";
import { whatsappUrl } from "../../constants/contact";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <span className="about-tag">Quem somos</span>

        <h2>Assados da Débora</h2>

        <p>
          Há anos levamos sabor e tradição para a mesa das famílias com frangos
          assados, costelinhas e acompanhamentos preparados com carinho.
        </p>

        <p>
          Nosso compromisso é servir comida caseira, bem temperada e pronta para
          tornar o almoço de domingo ainda mais especial.
        </p>

        <a
          href={whatsappUrl}
          className="about-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fazer pedido no WhatsApp
        </a>
      </div>

      <div className="about-image">
        <img src={ribs} alt="Costelinha assada" />
      </div>
    </section>
  );
}

export default AboutSection;
