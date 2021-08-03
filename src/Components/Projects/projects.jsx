import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Projects = (props) => {
    console.log(props)
  return (
      <React.Fragment>
  <Container>
      <Row>
          <Col sm={8}>
              <h1 className="title">Projects</h1>
          </Col>
          <Col sm={4}></Col>
      </Row>
  </Container>
  <Container fluid>
      <Row>
          {props.projectsData.map((project) => {
              return(
                  <React.Fragment>
                  <h1>{project.title}</h1>
                  </React.Fragment>
              )
          })}
      </Row>
  </Container>
  </React.Fragment>

  )
};

export default Projects;
