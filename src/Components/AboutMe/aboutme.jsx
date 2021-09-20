import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          {" "}
          <p style={{ color: "#f2f5f7" }} id="aboutMe">
            Currently, I am living in Iowa. As of right now, I am currently a
            graduate from devCodeCamp, enhancing my skills in several
            programming languages. In my free time, I work on websites and I
            practice my coding skills. Becoming a Software Developer is what I
            believe to be my future career. I graduated from Southeastern
            Community College and decided that I would attend devCodeCamp in
            hopes of learning new things about software development I was unable
            to learn in college. As of right now, I am studying Typescript,
            React, and C#. In the future I see myself learning multiple
            different programming languages and frameworks to progress
            throughout my career. I also travel throughout the country, the
            three places I traveled to recently are El Paso Texas, Breckenridge
            Colorado, and Jamaica.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
