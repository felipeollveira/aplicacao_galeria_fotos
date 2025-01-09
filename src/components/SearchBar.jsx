    import { useEffect } from "react";

  const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, handleKeyDown }) => {


      useEffect(() => {
        const atraso = setTimeout(() => { // Estrategia pra nao sobrecarregar e nao pesquisar a cada palavra digitada
          // 
          handleSearch(searchTerm);
        }, 900); 
    
        return () => clearTimeout(atraso); // Limpa o timeout anterior
      }, [searchTerm, handleSearch]); 
    
      return (
        <div className="d-flex w-100">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite uma palavra-chave"
          />
          <button onClick={() => handleSearch(searchTerm)} className="btn btn-primary ms-2">
            🔍
          </button>
        </div>
      );
    };
    
 export default SearchBar;
  

  