import { Container, Col, Row } from "react-bootstrap";

const Title = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h2 className="text-center mt-5">Hi I'm Cyrus Warner.</h2>
          <p className="text-center fs-5">I am a fullstack developer.</p>
          {/* <img>INSERT IMAGE HERE</img> */}
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default Title;
