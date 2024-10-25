import React, {useState} from 'react'
import {Modal, Button, Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Room ({room}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
  <div className='room-container'>
    <div className='hotel-image'>
      
      <img src={room.imageurls[0]} className='smallimg' class = "center"/>
    </div>
    <div className='about-us'>
      <h1>{room.name}</h1>
      <b>         
      <p>max count: {room.maxcount}</p>
      <p>phone number: {room.phonenumber}</p>
      <p>Type: {room.type}</p>
      </b>

      <div style={{float:'right'}}>
        <Link to={`/book/${room._id}`}>      
        <btn className='btn btn primary mr-2'>Book Now</btn>
        </Link>
      <btn className='btn btn-primary' onClick={handleShow}>view details</btn>
      </div>
    
    </div>  
   

      <Modal show={show} onHide={handleClose} size = 'lg'>
        <Modal.Header >
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel prevLabel='' nextLabel=''>
      {room.imageurls.map(url=>{
        return <Carousel.Item>
          <img
          className="d-block w-100 big img "
          src={url}
          alt="first slide"
          />
        </Carousel.Item>
      })}
     
    </Carousel>
    <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal> 
  </div>
  );
}

export default Room