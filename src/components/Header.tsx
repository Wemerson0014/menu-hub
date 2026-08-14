import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <img src="/" alt="Logo" />
      <h1>MenuHub</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/cardapio">Cardápio</a>
        <a href="/entrar">Entrar</a>
        <a href="/criar-conta">Criar Conta</a>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
