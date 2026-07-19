import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import "./ProjectCards.css";

function ProjectCards(props) {
  const hasGh = props.ghLink && props.ghLink !== "#";
  const hasDemo = props.demoLink && props.demoLink !== "#";
  const noLinks = !hasGh && !hasDemo;

  return (
    <Card className="project-card-view h-100">
      <div className="project-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
        <span className="project-img-overlay" />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-desc">{props.description}</Card.Text>

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
        <div className="mt-auto project-btn-row">
          {hasGh && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "Code"}
            </Button>
          )}

          {!props.isBlog && hasDemo && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}

          {noLinks && (
            <span className="project-private-badge">
              <AiOutlineLock /> &nbsp; Private project
            </span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
