import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactEmailFormModal from '../ContactEmailFormModal/contactEmailFormModal';

const ContactInfo = () => {
    return(
        <React.Fragment>
        <Container>
            <Row>
            <Col sm={8}>
            <h1 className="title">Contact Info</h1>
            </Col>
            <Col sm={4}></Col>
        </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={8}>
                    <ContactEmailFormModal />
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

export default ContactInfo