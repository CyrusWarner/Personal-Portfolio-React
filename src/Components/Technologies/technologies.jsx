import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./technology.css";

const Technologies = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={8}>
            <h1 className="title ">Technologies</h1>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <h5 className="technology-title">Front-End</h5>
          </Col>
          <Col sm={4}>
            <h5 className="technology-title">Back-End</h5>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <p >React</p>
          </Col>
          <Col sm={4}>
            <p> Django</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Technologies;
