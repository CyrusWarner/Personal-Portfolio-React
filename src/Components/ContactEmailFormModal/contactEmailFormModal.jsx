import emailjs from "emailjs-com";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ContactEmailFormModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendEmail = (event) => {
      console.log(event)
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
    <React.Fragment>
      <Button style={{background: "crimson", borderColor: "crimson"}} onClick={handleShow}>
        Contact Me Via Email
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me Via Email</Modal.Title>
        </Modal.Header>
        <form onSubmit={sendEmail}>
          <label className=" ms-3">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name..."
            className="form-control"
          ></input>
          <label className="ms-3">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email..."
            className="form-control"
          ></input>
          <label className="ms-3">Message:</label>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ContactEmailFormModal;
