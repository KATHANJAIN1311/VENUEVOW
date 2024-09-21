// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Hotelprofile= ({ hotelId }) => {
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

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!hotel) return <div>No hotel data found</div>;

//   return (
//     <div className="hotel-profile">
//       <h1>{hotel.name}</h1>
//       <img src={hotel.image} alt={hotel.name} />
//       <p>{hotel.description}</p>
//       <div className="hotel-details">
//         <p>Address: {hotel.address}</p>
//         <p>Rating: {hotel.rating} / 5</p>
//         <p>Price: ${hotel.price} per night</p>
//       </div>
//       <h2>Amenities</h2>
//       <ul>
//         {hotel.amenities.map((amenity, index) => (
//           <li key={index}>{amenity}</li>
//         ))}
//       </ul>
//       <button onClick={() => alert('Booking functionality to be implemented')}>
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default Hotelprofile;