import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';
import SkeletonCard from './SkeletonCard';
import usePhotos from '../hooks/usePhotos';

const Gallery = () => {
  const { photos, loading, fetchPhotos } = usePhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [initialSubset, setInitialSubset] = useState([]); 
  const [fetchError, setFetchError] = useState(null); // Guarda o erro e o status code
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const initializeGallery = async () => {
      try {
        setFetchError(null); 
        await fetchPhotos(); 
      } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        if (error.response) {
          setFetchError(`Erro: ${error.response.status} - ${error.response.statusText}`);
        } else {
          setFetchError('Erro ao conectar ao servidor.');
        }
      }
    };
    initializeGallery();
  }, [fetchPhotos]);


  useEffect(() => {
    if (isFirstLoad.current && photos.length > 0) {
      const subset = photos.slice(0, 50); // Pega as primeiras 50 fotos
      //a api retorna muitas imagens por isso diminui para apenas 50
      setInitialSubset(subset);
      setFilteredPhotos(subset); 
      isFirstLoad.current = false;
    }
  }, [photos]);

    const handleSearch = () => {
      /* Verifica se o termo de pesquisa está vazio
    if (searchTerm.trim() === "") {
      alert("Digite uma palavra-chave");
      return; 
    } */
      // Filtra as fotos com base no termo de pesquisa
      const filtered = initialSubset.filter((photo) =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      // Se input pesquisa estiver vazio, mostra as 50 imagens
      if (searchTerm.trim() === "") {
        setFilteredPhotos(initialSubset.slice(0, 50)); 
      } else {
     
        if (filtered.length < 10) {
          setFilteredPhotos(filtered); 
        } else {
         
          setFilteredPhotos(filtered.slice(0, 10));
        }
      }
    };
    
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  

      return (
        <div className="d-flex flex-column min-vh-100">
          <header className="header-div">
            <div className="container d-flex flex-column align-items-center">
              <h1 className="text-center mb-3">Galeria de Fotos</h1>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleKeyDown={handleKeyDown}
              />
            </div>
          </header>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <div className="container mt-4 content">
            {fetchError ? (
              <h1 className="text-center text-danger">
                {fetchError || 'Nenhuma foto encontrada'}
              </h1>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {loading ? (
                  // Renderiza os skeleton(loading cardd) enquanto ainda carrega ou loading true
                  Array.from({ length: 50 }).map((_, index) => (
                    <SkeletonCard key={index} />
                  ))
                ) : filteredPhotos.length > 0 ? (
                  // Renderiza as fotos filtradas
                  filteredPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                  ))
                ) : (
                  // Mensagem para caso nenhuma foto seja encontrada
                    <h1 className="text-center text-danger">Nenhuma foto encontrada</h1>
    
                )}
              </div>
            )}
          </div>
    
          <footer className="bg-dark text-white py-3 text-center mt-auto">
            <p className="mb-0">© 2024 Galeria de Fotos. Todos os direitos reservados.</p>
          </footer>
        </div>
      );
    };
    
export default Gallery;
