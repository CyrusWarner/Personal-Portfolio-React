import emailjs from "emailjs-com";
import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import "./contactEmailFormModal.css";

const ContactEmailFormModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_3ov28jj", "template_6f00f07", event.target, "user_AUMUh4EYkrvWv50ynhpxX")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      event.target.reset();
  };

  return (
    <React.Fragment >
      <Button style={{background: "crimson", borderColor: "crimson"}} onClick={handleShow}>
        Contact Me Via Email
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="customModal">
        <Modal.Header  closeButton>
          <Modal.Title style={{color: "#f2f5f7"}}>Contact Me Via Email</Modal.Title>
        </Modal.Header>
        <Container>
        <form onSubmit={sendEmail}>
          <div>
          <label style={{color: "#f2f5f7"}}>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name..."
            className="form-control mb-2"
          ></input>
          </div>
          <label style={{color: "#f2f5f7"}}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email..."
            className="form-control mb-2"
          ></input>
          <label style={{color: "#f2f5f7"}}>Message:</label>
          <input
            type="text"
            name="message"
            placeholder="Please enter your message..."
            className="form-control"
          ></input>
          <div className="d-flex justify-content-end">
          <input type="submit" style={{background: "crimson", borderColor: "crimson"}} className="btn btn-primary m-2" value="Send Email" onClick={handleClose}></input>
          </div>
        </form>
        </Container>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ContactEmailFormModal;
