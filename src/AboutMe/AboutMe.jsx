import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import "./AboutMe.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="aboutme">
      <Container>
        <Row className="sub_aboutme">
          <Col
            className="content_aboutme"
            style={{ color: "black" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 style={{ color: "blue" }}>About Me</h1>
            <p>
              Hi! This is Vijay Pratap Singh. I am a Frontend Developer and Java
              Programmer. I am pursuing MCA(Master in Computer Application) from
              CSJM University, Kanpur, Uttar Pradesh. I have done B.Sc.(Computer
              Application) from CCS University, Meerut, Uttar Pradesh.{" "}
            </p>
            <h2 style={{ color: "blue" }}>Web Developer</h2>
            <p>
              I have learned all about the building blocks of frontend
              development. I have learned HTML, CSS and JavaScript from scratch.
              I have also done work on CSS and Javascript frameworks like
              Bootstrap and React.js repectively. I have done many projects
              using frontend development skills. I have provided the link of all
              these projects you can also{" "}
              <a href="https://bhartiyabank.glitch.me">click here </a>to visit!
            </p>
            <h2 style={{ color: "blue" }}>Java Programmer</h2>
            <p>
              I am a 5 star java coder at hackerrank. I have strong concepts
              about the working of java programming. I am a certified core java
              programmer from Hebeon Technology.
            </p>
          </Col>
          <Col
            className="details"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <ReactTooltip />
            <div>
              <h1 style={{ color: "blue" }}>Contact Me</h1>
              <br />
              <i className="far fa-envelope" data-tip="Email"></i>
              <br />
              <p>vijaypratapsingh845@gmail.com</p>
              <i className="fab fa-linkedin" data-tip="linkedin"></i>
              <br />
              <a href="https://linkedin.com/pratapsingh845">
                https://linkedin.com/pratapsingh845
              </a>
              <br />
              <br />
              <i className="fab fa-github-square" data-tip="github"></i>
              <br />
              <a href="https://github.com">https://github.com</a>
              <br />
              <br />
              <i className="fas fa-mobile-alt" data-tip="phone"></i>
              <br />
              <p>9068718571</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutMe;
