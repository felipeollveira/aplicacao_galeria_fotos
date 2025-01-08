import { useState, useCallback } from 'react';

// estrutura da foto que vem da API
interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const usePhotos = () => {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data: Photo[] = await response.json(); 
      setPhotos(data);
    } catch (error) {
      console.error("Erro ao buscar fotos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { photos, loading, fetchPhotos };
};

export default usePhotos;
