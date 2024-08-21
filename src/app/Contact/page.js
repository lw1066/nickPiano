"use client";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const emailLink =
    "mailto:lewis_webster@hotmail.com?subject=Information request";

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleShowModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setShowModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    console.log(formData);

    try {
      const response = await fetch("/api/emailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        resetForm();
        handleShowModal(
          `Hi ${name}`,
          `Thanks for getting in touch. We'll reply to ${email} as soon as possible.`
        );
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        handleShowModal(
          "Sorry - something went wrong",
          `There was a problem with your submission. Status: ${
            response.status
          }. Error: ${JSON.stringify(errorData)}`
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
      handleShowModal(
        "Sorry - something went wrong",
        `An unexpected error occurred: ${error.message}`
      );
    }
  };

  return (
    <>
      <div className="contact-form">
        <h2>Get in contact!</h2>
        <p>
          If you&apos;d like more information please get in contact using the
          form below - I&apos;ll get right back to you. Alternatively you can
          email me on EMAIL, phone me on PHONE or contact me on WhatsApp
          WHATSAPP.
        </p>
        <p>
          If you&apos;d like to book a service please include your name, address
          of piano and contact number. Please also include a brief description
          of what you think you need and a couple of preferred times. I will
          contact you with a suggested appointment.
        </p>

        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formName" className="input-group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="input-group mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="input-group mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            variant="outline-success"
            className="mt-3"
            size="sm"
            type="submit"
          >
            Send
          </Button>
        </Form>

        <div className="modal-wrapper">
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            className="modal-box"
          >
            <Modal.Header>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMessage}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Contact;
