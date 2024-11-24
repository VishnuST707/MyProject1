import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
       
        <Nav className="me-auto d-flex align-items-center">
        <i class="bi bi-airplane-fill"></i>
          <Nav.Link href="#find-flight">Find Flight</Nav.Link>
          <i class="bi bi-house-fill"></i>
          <Nav.Link href="#find-stay">Find Stay</Nav.Link>
        </Nav>

      
        <Navbar.Brand className="mx-auto position-absolute start-50 translate-middle-x" href="#home">
          g-lobe
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#wishlist">Login</Nav.Link>
           <Button  variant="success">Sign IN</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
