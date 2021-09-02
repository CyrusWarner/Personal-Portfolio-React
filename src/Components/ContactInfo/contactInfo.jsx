import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactEmailFormModal from '../ContactEmailFormModal/contactEmailFormModal';
import './contactInfo.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {IoIosArrowUp} from "react-icons/io"
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';

const ContactInfo = () => {
    const variants = {
        hover: {
            scale: 1.1,
            transition: {
                duration:0.5,
                yoyo: Infinity
            }
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return(
        <div id="contactInfo">
        <Container className="Contact">
            <Row>
            <Col sm={8}>
            <h1 className="title">Contact</h1>
            </Col>
            <Col sm={4}></Col>
        </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={8}>
                    <ContactEmailFormModal />
                    <div style={{color: "#f2f5f7"}} className="hoverDiv mt-2 mb-2">Phone:<a className="phone" href="tel:1-319-457-1202">1-319-457-1202</a></div>
                    <a
              href="https://www.linkedin.com/in/cyrus-warner-687311215/"
              target="_blank"
            >
              <FaLinkedin  className="mb-2" size="3rem" />
            </a>
            <a href="https://github.com/CyrusWarner" target="_blank">
              <FaGithub className="ms-3 mb-2" color="white" size="3rem" />
            </a>
                </Col>
                <Col sm={4}></Col>
            </Row>
            <Container className="d-flex justify-content-center">
                <motion.div
                variants={variants}
                whileHover="hover"
                >
                <Link onClick={scrollToTop}>
                <IoIosArrowUp className="mb-5" cursor="pointer" size="4rem"  color="white"/>
                </Link>
                </motion.div>
            </Container>
        </Container>
        </div>
    )
}

export default ContactInfo