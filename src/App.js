// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import HotelDetails from './components/HotelDetails';

const App = () => {
  const hotels = [
   
    {
      id: 2,
      name: "Shreenath Marriage Garden",
      description: "Its a good accomodation place for a function in budget and the garden is also pretty good in size.",
      location: "Maharana Pratap Marg, Neemuch Old City, Neemuch 458441,",
      hours: "Open 24 hours",
      nameimage:"shreenath"
    },
    {
      id: 3,
      name: "Shubhkamna Resort & Marriage Garden",
      description: "Our work belief comes from the teaching of, ATITHI DEVO BHAVA. ",
      location: "Sanjit Rd, Abhinandan Colony, Mandsaur, Madhya Pradesh 458001",
      hours: "Open 24 hours",
      nameimage:"Shubhkamna"
    },
    {
      id: 4,
      name: "Shagun Garden",
      description: "Its a good accomodation place for a function in budget.",
      location: "42, तिरुपति नगर मार्ग, behind Tirupati Plaza,Mandsaur, Madhya Pradesh 458001",
      hours: "Open 12 hours",
      nameimage:"Shagun"
    },
    {
      id: 5,
      name: "Nakshtra Garden",
      description: "Its a good accomodation place for a function in budget.",
      location: "Mandsaur, Madhya Pradesh 458001",
      hours: "Open 12 hours",
      nameimage:"Nakshatra"
    },
  ];

  return (
    
    <div className="VENUEVOWS">
      <div>
    <Navbar/>
     </div>
      {hotels.map(hotel => (
        <HotelDetails key={hotel.id} hotel={hotel} />
      ))}
      
    </div>
    
  );
};

export default App;
