import { useState } from "react";

import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchText("");
    onClose();
  };

  return (
    <div className="search-box">
      <h2 className="search-box-title">Buscador de Personal</h2>

      <div className="search-box-buttons">
        <label>
          <input
            className="search-box-input"
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
          />
        </label>

        <button
          onClick={() => onSearch(searchText)}
          disabled={!searchText.length}
        >
          Buscar
        </button>
        {isSearching && (
          <button onClick={handleSearchClick} disabled={!searchText.length}>
            Cerrar
          </button>
        )}
      </div>
    </div>
  );
}
