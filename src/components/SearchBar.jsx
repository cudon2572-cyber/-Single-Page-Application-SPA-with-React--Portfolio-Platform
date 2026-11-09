 import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        placeholder="Search projects by title or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;