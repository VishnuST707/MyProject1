import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="py-5" style={{backgroundColor:"#04BADE"}}>
      <Container>
        <Row className="mb-4">
          {/* Company Info */}
          <Col md={4}>
            <h5 className="mb-3">g-lobe</h5>
            <p>
              Make your travel wishlist, we'll do the rest.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h6 className="mb-3">Company</h6>
            <Nav className="flex-column">
              <Nav.Link href="#about" className="text-dark">
                About Us
              </Nav.Link>
              <Nav.Link href="#careers" className="text-dark">
                Careers
              </Nav.Link>
              <Nav.Link href="#press" className="text-dark">
                Press
              </Nav.Link>
            </Nav>
          </Col>

          {/* Resources */}
          <Col md={2}>
            <h6 className="mb-3">Resources</h6>
            <Nav className="flex-column">
              <Nav.Link href="#help" className="text-dark">
                Help Center
              </Nav.Link>
              <Nav.Link href="#privacy" className="text-dark">
                Privacy Policy
              </Nav.Link>
              <Nav.Link href="#terms" className="text-dark">
                Terms of Service
              </Nav.Link>
            </Nav>
          </Col>

          {/* Social Links */}
          <Col md={4}>
            <h6 className="mb-3">Follow Us</h6>
            <div className="d-flex">
              <a href="#facebook" className="me-3 text-dark">
              <i class="bi bi-facebook"></i>
              </a>
              <a href="#twitter" className="me-3 text-dark">
              <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#instagram" className="me-3 text-dark">
              <i class="bi bi-instagram"></i>
              </a>
              <a href="#linkedin" className="text-dark">
              <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="pt-4 border-top">
          <Col md={6}>
            <p className="mb-0 text-muted">&copy; 2024 g-lobe. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-end">
              <Nav.Link href="#terms" className="text-dark">
                Terms
              </Nav.Link>
              <Nav.Link href="#privacy" className="text-dark">
                Privacy
              </Nav.Link>
              <Nav.Link href="#cookies" className="text-dark">
                Cookies
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
