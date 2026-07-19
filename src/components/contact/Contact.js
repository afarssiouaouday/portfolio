import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { myData } from "../../data/mydata";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const today = new Date().toISOString().split("T")[0];
      // Configuration EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        to_email: "afarsiouoday8@gmail.com",
        message: formData.message,
        time: today,
      };
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setAlertType("success");
      setAlertMessage("Message envoyé avec succès ! Je vous répondrai bientôt.");
      setShowAlert(true);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setAlertType("danger");
      setAlertMessage(
        "Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement."
      );
      setShowAlert(true);
    }

    setIsLoading(false);
  };

  return (
    <Container fluid className="experience-section" id="contact">
      <Particle />
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="contact-heading">
              CONTACT <strong className="purple">WITH ME</strong>
            </h1>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* Left Side - Contact Form */}
          <Col lg={6} md={8} className="contact-form">
            {showAlert && (
              <Alert
                variant={alertType}
                onClose={() => setShowAlert(false)}
                dismissible
                style={{ marginBottom: "20px" }}
              >
                {alertMessage}
              </Alert>
            )}

            <div className="contact-card">
              <p className="contact-intro">
                If you have any questions or concerns, please don't hesitate to
                contact me. I am open to any work opportunities that align with
                my skills and interests.
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="contact-label">Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className="contact-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="contact-label">Your Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className="contact-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="contact-label">Your Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    className="contact-input"
                    style={{ resize: "vertical" }}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isLoading}
                >
                  <AiOutlineMail style={{ marginRight: "8px" }} />
                  {isLoading ? "Envoi..." : "Send Message"}
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Side - Contact Info */}
          <Col lg={6} md={8} className="contact-info">
            <div className="contact-info-row">
              <div className="contact-info-icon">
                <AiOutlineMail />
              </div>
              <span className="contact-info-text">{myData.email}</span>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-icon">
                <AiOutlinePhone />
              </div>
              <span className="contact-info-text">{myData.phone}</span>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-icon">
                <ImLocation />
              </div>
              <span className="contact-info-text">{myData.location}</span>
            </div>

            <div className="contact-social">
              <a href={myData.github} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href={myData.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
