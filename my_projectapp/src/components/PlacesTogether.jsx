import React from "react";
import { Container } from "react-bootstrap";


function PlacesTogether() {
  return (
    <div className="py-5 bg-light">
      <h2 className="text-start mb-4">Let's go places together</h2>
      <h6 className="text-start mb-4">Discover the latest offers and news and start planning your next trip with us </h6>
      <Container
        fluid
        className="places-container"
        style={{
          backgroundImage: 'url("/images/travel.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px", 
          position: "relative", 
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff", 
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <p>
            Discover the world with us! Embark on adventures, explore new
            destinations, and make unforgettable memories.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default PlacesTogether;
