import { Container, Col, Row } from "react-bootstrap";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    },
  },
}

const letter = {
  hidden: {opacity: 0, y:50},
  visible: {
    opacity: 1,
    y:0,
  },
}

const Title = () => {
  const textRef = useRef();
  const header = "Hi I'm Cyrus Warner"

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
          <motion.h1
          className="title"
          variants={sentence}
          initial="hidden"
          animate="visible"
          >
          {header.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
            )
          })}
          </motion.h1>
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
