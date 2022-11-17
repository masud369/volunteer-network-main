import React, { useEffect, useState } from "react";
import Events from "../Events/Events";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [events, setEvents ] = useState([]);
  useEffect(()=>{
    fetch("https://tranquil-beyond-15676.herokuapp.com/allEvents")
  .then(res=>res.json())
  .then(data=>{
    setEvents(data); 
  })
  })
  return (
    <div className="container">
      <div className="row">
          {events.map((event) => ( <Events event={event} /> ))}
        </div>
      
    </div>
  );
};

export default Home;
