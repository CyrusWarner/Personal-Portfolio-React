import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../Constants/constants";
import "./projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <React.Fragment>
      <Container id="projects">
        <Row>
          <Col sm={8}>
            <h1 className="title">Projects</h1>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <section className="customProjectGridContainer">
        {projects.map(({ id, image, title, description, source }) => {
          return (
            <div className="customCard">
              <img className="projectImage" src={image}></img>
              <div className="projectTitle">
                <h3 className="projectHeader">{title}</h3>
                <hr className="Seperate"></hr>
              </div>
              <p className="projectDescription">{description}</p>
              <div>
                  <ul className="utilityList">
                      <motion.a 
                      whileHover={{
                        scale: 1.2,
                      }}
                      className="projectLinks" href={source} target="_blank">Visit</motion.a> 
                      
                  </ul>
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Projects;
