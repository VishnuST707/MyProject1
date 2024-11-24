import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <>
    <div className="hero-section text-white text-start" style={{ backgroundImage: 'url("/images/aircraft.jpg")', backgroundSize: 'cover', padding: '200px 0' }}>
        <Container >
        <h1 style={{color:"black"}}>Make your travel </h1>
        <h1 style={{color:"black"}}>wishlist, we'll do the rest</h1>
        </Container>
    </div>
    <Container 
     style={{
      position: "absolute",
      top: "70%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff", 
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
    }}
    >
        <Form className="mt-2">
          <Row className="g-4">
            <Col md={3}>
              <Form.Control type="text" placeholder="Where are you flying?" />
            </Col>
            <Col md={3}>
              <Form.Control type="date" />
            </Col>
            <Col md={3}>
              <Form.Select>
                <option>Passengers</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Button variant="primary" type="submit" className="w-100">
                Search Flights
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    
    </>
    
  );
}

export default HeroSection;
