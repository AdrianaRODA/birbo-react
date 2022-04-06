import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img
              src="/logo.png"
              width="120px"
              className="d-inline-block align-top"
              alt="Birbo Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/productos/friends">BirboFriends</Nav.Link>
              <Nav.Link as={Link} to="/productos/lux">BirboLux</Nav.Link>
              <Nav.Link href="/">Nosotros</Nav.Link>
              <Nav.Link href="/">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

