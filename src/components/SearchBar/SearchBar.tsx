import "./SearchBar.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (valor: string) => void;
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
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
        value={searchTerm}
      />
      <button>Pesquisar</button>
    </form>
  );
}

export default SearchBar;
