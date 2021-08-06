import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Navigationbar = () => {
    return (     
<Navbar  sticky="top" bg="dark" variant="dark" expand="lg">
  <Container className="h-100">
    <Navbar.Brand >Cyrus The Developer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="https://www.linkedin.com/in/cyrus-warner-687311215/" target="_blank"><FaLinkedin size="2rem" /></Nav.Link>
        <Nav.Link href="https://github.com/CyrusWarner" target="_blank"><FaGithub size="2rem"/></Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigationbar