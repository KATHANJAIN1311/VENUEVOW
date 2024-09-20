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
         <div className="home p-pages">
         <img src='/homeimg/home-banner.jpg'/>
         {/* <h1 className="banner-heading">Dream venue</h1> */}
         </div>
         <div className="home p-pages2">
         <img src='/homeimg/venuevows banner.jpg'/>
         {/* <h1 className="banner-heading">Dream venue</h1> */}
         </div>

         
         </div>
        
      
    )
  }
}

export default Home
