import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Ícone de lupa usando React Icons

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Atualiza o valor da pesquisa
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        {/* Campo de pesquisa */}
        <input
          type="text"
          className="form-control"
          placeholder="Buscar fotos..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        
        {/* Botão de pesquisa com ícone de lupa */}
        <button
          onClick={handleSearch}
          className="btn btn-primary"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
