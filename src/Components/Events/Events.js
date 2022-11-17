import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

const Events = ({ event }) => {

const deleteEvent = (id)=>{
  fetch(`https://tranquil-beyond-15676.herokuapp.com/event/${id}`,{ 
    method: 'DELETE'
   })
}

  return (
    <div className="col-md-3">
    
        <Card style={{ width: "14rem", marginBottom:'20px'}}>
          <Card.Img variant="top" style={{width:'214px'}} src={event.imageUrl} />
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <button onClick={()=>deleteEvent(event._id)}> Delete </button>
          </Card.Body>
        </Card>
            
        </div>
  );
};

export default Events;
