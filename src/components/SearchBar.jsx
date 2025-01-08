import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Pesquisar..."
        value={searchTerm}
        required
        onChange={handleChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        🔍
      </button>

      
    </div>
  );
};

export default SearchBar;
