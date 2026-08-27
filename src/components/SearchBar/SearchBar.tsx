import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Buscar..." />
      <button>Pesquisar</button>
    </form>
  );
}

export default SearchBar;
