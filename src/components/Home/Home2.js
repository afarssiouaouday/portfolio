import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { myData } from "../../data/mydata";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about software engineering and fullstack development,
              constantly learning and growing in this exciting field… 🚀
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> Java, JavaScript, TypeScript, PHP and C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building modern &nbsp;
              <i>
                <b className="purple">Web Applications and Platforms </b> with
                focus on{" "}
                <b className="purple">
                  Fullstack Development and Microservices Architecture.
                </b>
              </i>
              <br />
              <br />
              I develop robust applications using <b className="purple">Spring Boot</b> for 
              backend and modern frontend frameworks like
              <i>
                <b className="purple">
                  {" "}
                  React.js and Angular
                </b>
              </i>
              &nbsp; with expertise in
              <i>
                <b className="purple"> PostgreSQL, Docker and CI/CD</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  border: "5px solid #c770f0",
                  boxShadow: "0 4px 15px rgba(199, 112, 240, 0.3)"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={myData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={myData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={myData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;