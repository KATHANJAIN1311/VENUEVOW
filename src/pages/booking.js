import axios from "axios";
import React, { useState, useEffect } from "react";
import Room from "../pages/room";
//import axios from 'axios';
function Booking() {
  const [room, setroom] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/room/all`);
        console.log("data", data);
        setroom(data.data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    }
    fetchData()
  }, []);

  return (
    <div className="container">
      <div className="hotel-image">
        {loading ? (
          <h1>loading....</h1>
        ) : error ? (
          <h1>error</h1>
        ) : (
          room.map((room) => {
            return (
              <div className="com-md-9 mt-2">
                <Room room={room} />
              </div>
            );

          })
        )}
      </div>
    </div>
  );
}

export default Booking;
