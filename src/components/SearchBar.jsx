

  const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, handleKeyDown }) => {
    return (
      <div className="d-flex w-100">
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} //enter
          placeholder="Digite uma palavra-chave"
        />
        <button onClick={handleSearch} className="btn btn-primary ms-2">
        🔍
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  