import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="col">
      <div className="card shadow-sm bg-light photo-card">
        <div className="card-body">
          <div className="skeleton skeleton-img"></div>
          <div className="skeleton skeleton-title"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
