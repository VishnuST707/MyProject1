import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function TravelSection() {
 
  const places = [
    { name: "Paris", price: "$499", image: "https://cdn.pixabay.com/photo/2024/05/12/11/49/paris-8756718_960_720.jpg" },
    { name: "London", price: "$599", image: "https://cdn.pixabay.com/photo/2018/01/12/11/55/london-3078109_960_720.jpg" },
    { name: "Rome", price: "$549", image: "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_1280.jpg" },
  ];

  return (
    <div className="travel-section py-5">
      <Container>
        <h2 className="text-center mb-4">Fall into travel</h2>
        <Row className="g-4">
          {places.map((place, idx) => (
            <Col md={4} key={idx}>
              <Card>
                {/* Card Image */}
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    src={place.image}
                    alt={place.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", 
                    }}
                  />
                </div>
                {/* Card Body */}
                <Card.Body>
                  <Card.Title>{place.name}</Card.Title>
                  <Card.Text>{place.price}</Card.Text>
                  <Button variant="primary">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TravelSection;
