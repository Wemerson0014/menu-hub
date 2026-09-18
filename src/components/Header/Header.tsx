import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="/" alt="Logo" />
        <h1>Assados da Debora</h1>
      </div>
      <nav className="nav">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/cardapio">Cardápio</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
