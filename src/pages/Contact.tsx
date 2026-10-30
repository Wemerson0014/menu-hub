import "./Contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contato</h1>
      <p>Confira nosso endereço e horário de funcionamento.</p>
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
        <p>Das 8h às 14h, aos domingos.</p>
      </section>
      <section className="contact-item">
        <h2>Como chegar</h2>

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
