// import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';
//import Hotelprofile from './components/Hotelprofile';
import Home from './pages/Home';
import Login from './pages/Loginpage';
import Booking from './pages/booking';
import Booknow from './pages/booknow';
import Signupform from './pages/signupform';



function App() {
 

 

  return (
     <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
     
      {/* <Route exact path="/HotelDetails" element={<HotelDetails/>} /> */}
      {/* <Route exact path="/login" element={<LoginPage/>} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signupform/>}/>
      {/* <Route exact path="/Hotelprofile" element={<Hotelprofile />} /> */}
      <Route exact path="/Booking" element = {<Booking/>}/>
      <Route exact path="/book/:roomid" element = {<Booknow/>}/>
   </Routes>
    </BrowserRouter>
  </div>
  );
};       

export default App;
