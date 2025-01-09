import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="col">
      <div className="card shadow-sm photo-card">
        <img src={photo.url} alt={photo.title} className="card-img-top" />
        <div className="card-body">
     
          <h5 className="card-title">{photo.title}</h5>
     
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
