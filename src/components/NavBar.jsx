import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/logo.png"
              width="120px"
              className="d-inline-block align-top"
              alt="Birbo Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">BirboFriends</Nav.Link>
            <Nav.Link href="#">BirboLux</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
