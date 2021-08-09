import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          {" "}
          <p  style={{color: "#f2f5f7"}} id="aboutMe">
            Currently, I am living in Iowa. As of right now, I am currently a
            student learning programming languages. In my free time, I work on
            websites and I practice my coding skills. Becoming a software
            developer is what I believed to be my future career. I graduated
            from Southeastern Community College and decided that I would attend
            DevCodeCamp in hopes of learning things about software development I
            was unable to learn in college. As of right now, I am studying
            Javascript, Python, and C#. In my future I see myself learning
            multiple different languages to progress throughout my career. I
            also travel throughout the country, the two places I traveled to
            recently are El Paso Texas, and Breckenridge Colorado.
          </p>
        </Col>
        <Col>

        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
