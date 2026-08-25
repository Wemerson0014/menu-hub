import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <input className="search-bar input" type="text" placeholder="Buscar..." />
      <button className="search-bar button">Pesquisar</button>
    </form>
  );
}

export default SearchBar;
