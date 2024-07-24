import React from 'react';
import StarRating from './StarRating';
const HotelDetails = ({ hotel }) => {
  return (
    <div className="hotel-details">
      <div className="hotel-image">
        <img src={`images/${hotel.nameimage}.jpg`} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <h2>{hotel.name}</h2>
        <StarRating rating={hotel.rating} />
        <p>{hotel.description}</p>
        <ul>
          <li>Location: {hotel.location}</li>
          <li>hours:{hotel.opentime} open 24 hours</li>
        </ul>
      </div>
      <button>Book Now</button>
    </div>

  );
};

export default HotelDetails;
