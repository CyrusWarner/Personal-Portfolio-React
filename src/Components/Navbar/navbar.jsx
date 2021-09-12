import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './navbar.css'

const Navigationbar = ({width}) => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container className="h-100">
        <Navbar.Brand>Cyrus The Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {width < 992 &&
            <div>
          <Link
              className="scrollLinks nav-link fs-4"
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              About Me
            </Link>
            <Link
              className="scrollLinks nav-link fs-4"
              activeClass="active"
              to="technologies"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Technologies
            </Link>
            <Link
              className="scrollLinks nav-link fs-4"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
            </div>
            }
            <Link
              className="scrollLinks nav-link fs-4"
              activeClass="active"
              to="contactInfo"
              smooth={true}
              spy={true}
              duration={500}
            >
              Contact Me
            </Link>
            <Nav.Link
              href="https://www.linkedin.com/in/cyrus-warner-687311215/"
              target="_blank"
            >
              <FaLinkedin size="2rem" />
            </Nav.Link>
            <Nav.Link href="https://github.com/CyrusWarner" target="_blank">
              <FaGithub size="2rem" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
