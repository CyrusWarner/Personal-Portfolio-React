import { Container, Col, Row } from "react-bootstrap";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";

const Title = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Engineer"],
    });
  }, []);
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h1 className="title">Hi I'm Cyrus Warner</h1>
          <p className="fs-4">
            I Am a Fullstack{" "}
            <span ref={textRef} className="textChange">
            </span>
            
          </p>
          {/* <img>INSERT IMAGE HERE</img> */}
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default Title;
