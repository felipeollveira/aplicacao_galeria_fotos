//import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/photos'; 

export const fetchPhotos = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar fotos do Lorem Picsum:', error);
    return [];
  }
};

