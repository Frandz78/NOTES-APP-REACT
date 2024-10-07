import React from "react";

function SearchInput({ onSearch }) {
  return <input type="search" name="search" id="searchInput" className="search-input" placeholder="Cari Catatan..." onChange={onSearch} />;
}

export default SearchInput;
