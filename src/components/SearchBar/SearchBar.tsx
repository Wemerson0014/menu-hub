import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form
      id="form"
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button>Pesquisar</button>
    </form>
  );
}

export default SearchBar;
