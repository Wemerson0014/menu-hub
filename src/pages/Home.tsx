import Hero from "../components/Hero/Hero";
import MenuSection from "../components/MenuSection/MenuSection";
import AboutSection from "../components/AboutSection/AboutSection";
import { useOutletContext } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import { whatsappUrl } from "../constants/contact";

function Home() {
  const searchTerm = useOutletContext<string>();

  return (
    <>
      <Hero />
      <MenuSection searchTerm={searchTerm} />
      <AboutSection />

      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        <span>Fazer pedido</span>
      </a>
    </>
  );
}

export default Home;
