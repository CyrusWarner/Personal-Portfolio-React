import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#About me">About Me</Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
    )
}

export default Navigationbar