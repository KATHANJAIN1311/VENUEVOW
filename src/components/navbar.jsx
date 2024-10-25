import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// // import { FaInstagram, FaXTwitter, FaFacebook } from 'react-icons/fa6';
// // import { MailIcon } from 'lucide-react';


export class Navbar extends Component {
 
  render() {
    return (
          <div>
           <nav>
        <div class="logo1">
            <img src="https://ik.imagekit.io/613axcjyf/logo%201.png?updatedAt=1724319946073"alt="logo1" />

        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <input type="text" placeholder="Enter location"/>
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg> */}
          
        <ul>
            <li><Link to='/booking'>Booking</Link></li>  
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <li> <Link to='/Login'> <i class="fa fa-fw fa-user"></i> Login</Link></li>              
        </ul>
      
    </nav>
   
      </div>
    )
  }
}

export default Navbar

              
       