import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
        {'*'.repeat(rating)}
    </div>
  );
};

export default StarRating;
