import React,{useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
function Booknow() {
  const {roomid}=useParams();
  console.log(roomid)
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [room, setroom] = useState();
useEffect(() =>{
  async function  fetchroomid() {
  try{
    setloading(true);
        const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/room/allbyid`, {roomid});
        console.log("data", data);
        setroom(data.data);
        setloading(false);
  } catch (error) {
        setloading(false);
        seterror(true);
        
        
  }
}
fetchroomid()
}, []);

  return(
   <div>
    {loading ? (<h1>Loading...</h1>) : error?(<h1>Error</h1>) : (<div>
      <div className='row'>
        <div className='col-md-5'>
          <h1>{room.name}</h1>
          <img src={room.imageurls[0]} className='bigimg'/>
        </div>
        <div className="col-md-5">

        </div>
      </div>
     </div> )}
   </div>
  )
}

export default Booknow