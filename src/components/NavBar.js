import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
  <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#">Birbo</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#">Inicio</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#">Tienda</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#">Nosotros</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#">Contacto</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar
