import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        {/* 🔹 Technologies en ligne qui défilent */}
        {props.techstack && props.techstack.length > 0 && (
          <div className="tech-icons-slider">
            <div className="tech-icons-track">
              {props.techstack.map((icon, idx) => (
                <span key={idx} className="tech-icon">
                  {icon}
                </span>
              ))}
              {/* duplication pour défilement infini */}
              {props.techstack.map((icon, idx) => (
                <span key={`dup-${idx}`} className="tech-icon">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 🔹 Boutons */}
        <div className="mt-auto d-flex">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="ms-2"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
