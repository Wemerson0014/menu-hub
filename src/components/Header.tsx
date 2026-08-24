import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="/" alt="Logo" />
        <h1>Assados da Debora</h1>
      </div>
      <nav className="nav">
        <a href="/">Início</a>
        <a href="/cardapio">Cardápio</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
