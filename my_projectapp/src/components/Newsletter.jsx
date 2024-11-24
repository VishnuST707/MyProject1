import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Newsletter() {
  return (
    <div className="newsletter py-5" style={{backgroundColor:"#55E2E9"}}>
      <Container>
        <h2 className="text-start mb-4">Subscribe to our Newsletter</h2>
        <Row className="align-items-center">
          {/* Left Side: Email Input and Button */}
          <Col md={8}>
            <Form className="d-grid">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ marginRight: "10px",width:"30vw" }}
              />
              <Button variant="primary" type="submit" style={{ margin: "10px" ,width:"10vw" }}>
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Newsletter;
