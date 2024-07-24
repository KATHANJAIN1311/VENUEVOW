import React, { Component } from 'react'


export class Navbar extends Component {
 
  render() {
    return (
          <div>
           <nav>
        <div class="logo">
            <img src="https://ik.imagekit.io/613axcjyf/suraj.jpg?updatedAt=1721117048883"alt="Logo" />

        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <input type="text" placeholder="Enter location"/>
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg> */}
        <ul>
            <li><a href="/home">Home</a></li>            
            <li><a href="/about">about</a></li>
        </ul>
        <div class="search-container">
            <input type="text" placeholder="Search"/>
            <button type="submit">Search</button>
        </div>
    </nav>
      </div>
    )
  }
}

export default Navbar

              
       