import React, { Component } from 'react'
// import HotelDetails from '../pages/HotelDetails';

export class Home extends Component {
  render() {
    return (
      <div>
         <div class="search-container">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <form class="search" action="/action_page.php" >
          <input type="text" placeholder="Search by city,hotel,marriage garden" name="search2"/>
          <button type="submit"><i class="fa fa-search"></i></button>
          </form>

        </div> 
         {/* <div className="home p-pages">
         <img src='/homeimg/home-banner.jpg'/>
         {/* <h1 className="banner-heading">Dream venue</h1> */}
         {/* </div> */} 
         <div className="home p-pages1">
         <img src='/homeimg/venuevows banner.jpg'/>
         </div>

         <div class="scroll-container">
         <img src="/homeimg/hotel_1.jpg" alt="palace" width="auto" height="400"/>
         <img src="/homeimg/hotel_2.jpg" alt="party hall" width="600" height="400"/>
         <img src="/homeimg/hotel_3.jpg" alt="garden" width="600" height="400"/>
         <img src="/homeimg/hotel_4.jpg" alt="heritage" width="600" height="400"/>
        </div>
         </div>
        
      
    )
  }
}

export default Home
