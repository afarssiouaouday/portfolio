import React from "react";
import { Container } from "react-bootstrap";
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

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div className="experience-timeline-item" key={idx}>
              <div className="experience-timeline-marker">
                <div className="experience-logo-circle">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className={exp.logoFull ? "logo-full" : ""}
                    />
                  ) : (
                    <span className="experience-logo-fallback">
                      {exp.company.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="experience-timeline-line" />
              </div>

              <div className="experience-card">
                <div className="experience-date">
                  ({exp.date}){exp.location ? ` · ${exp.location}` : ""}
                </div>
                <h5 className="experience-title">{exp.title}</h5>
                <div className="experience-company">{exp.company}</div>

                {exp.techstack && exp.techstack.length > 0 && (
                  <div className="experience-tech-icons">
                    {exp.techstack.map((icon, i) => (
                      <span key={i} className="experience-tech-icon">
                        {icon}
                      </span>
                    ))}
                  </div>
                )}

                {exp.description && (
                  <p className="experience-description">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experiences;
