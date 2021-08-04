import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactEmailFormModal from '../ContactEmailFormModal/contactEmailFormModal';
import './contactInfo.css'

const ContactInfo = () => {
    return(
        <React.Fragment>
        <Container>
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
                    <div className="hoverDiv mt-2">Phone:<a className="phone" href="tel:1-319-457-1202">1-319-457-1202</a></div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

export default ContactInfo