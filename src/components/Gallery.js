import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para verificar o carregamento

  // Carregar as fotos ao montar o componente
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true); // Inicia o carregamento
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setPhotos(data); // Salva todas as fotos
      setFilteredPhotos(data.slice(0, 10)); // Inicialmente, exibe 10 fotos
      setLoading(false); // Carregamento concluído
    };
    
    fetchPhotos();
  }, []);

  // Função que será chamada quando o botão de pesquisa for clicado
  const handleSearch = () => {
    const filtered = photos.filter(photo =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length < 10) {
      const remainingPhotos = photos.slice(0, 10 - filtered.length);
      setFilteredPhotos([...filtered, ...remainingPhotos]);
    } else {
      setFilteredPhotos(filtered.slice(0, 10)); // Limita a 10 fotos
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Galeria de Fotos</h1>

      {/* Passa o valor da pesquisa, a função para atualizar o estado e a função de pesquisa */}
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {/* Galeria de Fotos */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="col">
            <div className={`card shadow-sm ${loading ? 'bg-light' : ''} photo-card`}>
              {/* Esqueleto do card enquanto carrega */}
              {loading ? (
                <div className="card-body">
                  {/* Esqueleto da imagem */}
                  <div className="skeleton skeleton-img"></div>
                  {/* Esqueleto do título */}
                  <div className="skeleton skeleton-title"></div>
                </div>
              ) : (
                <>
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
