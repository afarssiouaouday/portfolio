import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Particle from "../Particle";
import { myData } from "../../data/mydata";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const today = new Date().toISOString().split('T')[0];
      // Configuration EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        to_email: 'afarsiouoday8@gmail.com',
        message: formData.message,
        time: today,
      };
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setAlertType('success');
      setAlertMessage('Message envoyé avec succès ! Je vous répondrai bientôt.');
      setShowAlert(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setAlertType('danger');
      setAlertMessage('Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.');
      setShowAlert(true);
    }

    setIsLoading(false);
  };

  return (
    <Container fluid className="experience-section" id="contact">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 className="contact-heading" style={{
              fontSize: "2.1em",
              paddingBottom: "20px",
              color: "#fff",
              textAlign: "left",
            }}>
              CONTACT{" "}
              <strong className="purple">
                WITH ME
              </strong>
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

            <div style={{
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "15px",
              padding: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)"
            }}>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.8)", 
                marginBottom: "30px",
                lineHeight: "1.6"
              }}>
                If you have any questions or concerns, please don't hesitate to contact me. I am open to any
                work opportunities that align with my skills and interests.
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white", marginBottom: "10px" }}>
                    Your Name:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      color: "white",
                      padding: "12px 15px"
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white", marginBottom: "10px" }}>
                    Your Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      color: "white",
                      padding: "12px 15px"
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: "white", marginBottom: "10px" }}>
                    Your Message:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      color: "white",
                      padding: "12px 15px",
                      resize: "vertical"
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    background: isLoading 
                      ? "rgba(102, 126, 234, 0.5)" 
                      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    borderRadius: "25px",
                    padding: "12px 30px",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                >
                  <AiOutlineMail style={{ marginRight: "8px" }} />
                  {isLoading ? 'Envoi...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Side - Contact Info */}
          <Col lg={6} md={8} className="contact-info" style={{ paddingLeft: "50px" }}>
            <div style={{ paddingTop: "40px" }}>
              {/* Email */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px"
              }}>
                <div style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px"
                }}>
                  <AiOutlineMail style={{ fontSize: "20px", color: "white" }} />
                </div>
                <span style={{ color: "white", fontSize: "18px" }}>
                  {myData.email}
                </span>
              </div>

              {/* Phone */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px"
              }}>
                <div style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px"
                }}>
                  <AiOutlinePhone style={{ fontSize: "20px", color: "white" }} />
                </div>
                <span style={{ color: "white", fontSize: "18px" }}>
                  {myData.phone}
                </span>
              </div>

              {/* Location */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "40px"
              }}>
                <div style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px"
                }}>
                  <ImLocation style={{ fontSize: "20px", color: "white" }} />
                </div>
                <span style={{ color: "white", fontSize: "18px" }}>
                  {myData.location}
                </span>
              </div>

              {/* Social Links */}
              <div style={{ display: "flex", gap: "15px" }}>
                <a 
                  href={myData.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#c770f0";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <AiFillGithub style={{ fontSize: "20px" }} />
                </a>

                <a 
                  href={myData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#c770f0";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <FaLinkedinIn style={{ fontSize: "20px" }} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;