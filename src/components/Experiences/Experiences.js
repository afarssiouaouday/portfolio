import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LaptopImg from "../../Assets/laptop.png";
import Particle from "../Particle";
import { experiences } from "../../data/experiences";

function Experiences() {
  return (
    <Container fluid className="experience-section" id="experiences">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experiences</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          Here are some experiences I've had so far.
        </p>

        <Row style={{ alignItems: "center" }}>
          {/* Image */}
          <Col lg={5} md={12} className="experience-img">
            <img src={LaptopImg} alt="Experience illustration" />
          </Col>

          {/* Cards */}
          <Col lg={7} md={12}>
            {experiences.map((exp, idx) => (
              <Card key={idx} className="experience-card">
                <div className="experience-date">({exp.date})</div>
                <h5 className="experience-title">{exp.title}</h5>
                <div className="experience-company">{exp.company}</div>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
