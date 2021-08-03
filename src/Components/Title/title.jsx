import { Container, Col, Row } from "react-bootstrap";


const Title = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h1  className="title">Hi I'm Cyrus Warner.</h1>
          <p className="fs-4">I am a fullstack developer.</p>
          {/* <img>INSERT IMAGE HERE</img> */}
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default Title;
