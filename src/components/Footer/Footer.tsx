import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Assados da Debora</h2>

        <p>Sabor e tradição para o seu final de semana.</p>

        <span>
          © {new Date().getFullYear()} Assados da Debora. Todos os direitos
          reservados.
        </span>

        <small>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/wemersonfernandes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wemerson Fernandes
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
