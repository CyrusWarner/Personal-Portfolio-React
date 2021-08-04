import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./technology.css";
import {FaReact, FaPython} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'

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
      <Container >
        <Row>
          <Col sm={8}>
            <h6 className="mb-3">Currently I have gained experience with these technologies, but I am always looking to learn more!</h6>
            <div className="d-flex">
            <h6  >React <FaReact size="2rem"/></h6>
            <h6 className="ms-5">python <FaPython size="2rem"/></h6>
            <h6 className="ms-5">Javascript <DiJavascript1 size="2rem" /></h6>
            <h6 className="ms-5">C# <span class="iconify" data-icon="simple-icons:csharp" data-width="32" data-height="32"></span></h6>
            </div>
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Technologies;
