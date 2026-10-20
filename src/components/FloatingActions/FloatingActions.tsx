import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { whatsappUrl } from "../../constants/contact";
import "./FloatingActions.css";

function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        <span>Fazer pedido</span>
      </a>

      {showBackToTop && (
        <button
          className="back-to-top-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default FloatingActions;
