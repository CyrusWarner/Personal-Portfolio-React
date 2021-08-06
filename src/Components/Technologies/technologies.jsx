import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./technology.css";
import {FaReact, FaPython} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {FaWordpress} from 'react-icons/fa'
import { motion } from "framer-motion";

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
            <h6 className="mb-3">Currently I have gained experience with these technologies, but I am always looking to learn more.</h6>
            <div className="technologyList">
              <motion.div
              drag
              dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
              dragElastic={1}
              whileHover={{scale: 1.2}}
              >
            <h6 className="technologyItem">React <FaReact size="2rem"/></h6>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
              dragElastic={1}
              whileHover={{scale: 1.2}}
              >
            <h6 className="technologyItem">Python <FaPython size="2rem"/></h6>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
              dragElastic={1}
              whileHover={{scale: 1.2}}
              >
            <h6 className="technologyItem">JavaScript <DiJavascript1 size="2rem" /></h6>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
              dragElastic={1}
              whileHover={{scale: 1.2}}
              >
            <h6 className="technologyItem">C# <span class="iconify" data-icon="simple-icons:csharp" data-width="32" data-height="32"></span></h6>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
              dragElastic={1}
              whileHover={{scale: 1.2}}
              >
            <h6 className="technologyItem">WordPress <FaWordpress size="2rem"/></h6>
            </motion.div>
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
