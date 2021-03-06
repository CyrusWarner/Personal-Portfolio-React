import React, {useState} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import './navbar.css';

const Navigationbar = ({width}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} sticky="top" bg="dark" variant="dark" expand="lg">
      <Container className="h-100">
        <Navbar.Brand>Cyrus The Developer</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav">
          <span>
            <GiHamburgerMenu color="crimson" size="1.75rem"/>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
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
              onClick={() => setExpanded(false)}
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
              onClick={() => setExpanded(false)}
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
              onClick={() => setExpanded(false)}
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
              onClick={() => setExpanded(false)}
            >
              Contact Me
            </Link>
            <Nav.Link
              href="https://www.linkedin.com/in/cyrus-warner-687311215/"
              target="_blank"
            >
              <FaLinkedin size="2rem" color="#0a58ca" />
            </Nav.Link>
            <Nav.Link href="https://github.com/CyrusWarner" target="_blank">
              <FaGithub size="2rem" color="white" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
