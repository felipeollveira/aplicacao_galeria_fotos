import React from 'react';
import '../App.css';
import SkeletonCard from './SkeletonCard';

const PhotoCard = ({ photo }) => {
  const imageStyle = {
    backgroundColor: "#cccccc", 
    height: "200px", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "#666666", 
  };

  return (
    <div className="col">
      <div className="card shadow-sm photo-card">
        {photo.url ? (
          <img src={photo.url} alt={photo.title} className="card-img-top skeleton" />
        ) : (
          <div style={imageStyle}>Imagem indisponível</div>
        )}
        <div className="card-body">
          <h5 className="card-title">{photo.title}</h5>
        </div>
      </div>
    </div>
  );
};


export default PhotoCard;
