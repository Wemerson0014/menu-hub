import "./Contact.css";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contato</h1>
      <p>Fale com a gente e faça seu pedido ou reserve para pegar depois!</p>
      <section className="contact-item">
        <h2>Localização</h2>
        <address>
          R. Eugênio Nápoli, 1420 <br />
          Bernardo Monteiro <br />
          Contagem - MG <br />
          32010-840
        </address>
      </section>
      <section className="contact-item">
        <h2>Horário de funcionamento</h2>
        <p>Das 8h às 14h, aos sábados e domingos.</p>
      </section>
      <section className="contact-item">
        <h2>Faça seu pedido diretamente pelo WhatsApp</h2>
        <a
          href="https://wa.me/5531991229944"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action contact-item-whatsapp-button"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=R.+Eugênio+Nápoli,+1420,+Bernardo+Monteiro,+Contagem+-+MG"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action contact-item-maps-link"
        >
          <FaMapMarkerAlt />
          Ver localização no Google Maps
        </a>
      </section>
    </div>
  );
}
export default Contact;
