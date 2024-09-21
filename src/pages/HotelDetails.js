// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StarRating from '../pages/StarRating';

// const HotelDetails = ({ hotelId }) => {
//   const [hotel, setHotel] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHotelData = async () => {
//       try {
//         const response = await axios.get(`/api/hotels/${hotelId}`);
//         setHotel(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch hotel data');
//         setLoading(false);
//       }
//     };

//     fetchHotelData();
//   }, [hotelId]);

//   const handleBooking = () => {
//     // Implement booking logic here
//     console.log('Booking initiated for hotel:', hotel?.name);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!hotel) return <div>No hotel data available</div>;

//   return (
//     <div className="hotel-detail">
//       <h1>{hotel.name}</h1>
//       {hotel.nameimage && <img src={hotel.nameimage} alt={hotel.name} />}
//       <p>{hotel.description}</p>
//       <ul>
//         <li>Price: ${hotel.price} per night</li>
//         <li>Rating: <StarRating rating={hotel.rating} /></li>
//         <li>Location: {hotel.location}</li>
//       </ul>
//       <h2>Amenities</h2>
//       <ul>
//         {hotel.amenities && hotel.amenities.map((amenity, index) => (
//           <li key={index}>{amenity}</li>
//         ))}
//       </ul>
//       <button onClick={handleBooking}>Book Now</button>
//     </div>
//   );
// };

// export default HotelDetails;
