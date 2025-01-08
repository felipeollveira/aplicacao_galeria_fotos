import { useState, useCallback } from 'react';

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    setPhotos(data);
    setLoading(false);
  }, []);

  return { photos, loading, fetchPhotos };
};

export default usePhotos;
