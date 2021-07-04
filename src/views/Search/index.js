import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

import data from "../../data/users.json";
import "./style.css";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const hadleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };

  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const searchTextMinus = searchText.toLocaleUpperCase();
      const filteredData = data.filter(
        (value) =>
          value.name.toLocaleUpperCase().includes(searchTextMinus) ||
          value.phone.toLocaleUpperCase().includes(searchTextMinus) ||
          value.email.toLocaleUpperCase().includes(searchTextMinus) ||
          value.username.toLocaleUpperCase().includes(searchTextMinus)
      );

      setResults(filteredData);
    }
  };

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox
        onSearch={handleSearchClick}
        onClose={hadleCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResults results={results} isSearching={isAtTop} />
    </div>
  );
}
