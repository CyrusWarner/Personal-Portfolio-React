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
          <Col sm={8}>
            <p >React</p>
            <p>python</p>
            <p>C#</p>
            <p>Javascript</p>
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Technologies;
