import React, { useEffect } from "react";
import "./TechnicalSkill.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnicalSkill = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      <Container>
        <Row className="technicalskill">
          <Col
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Card bg="primary" className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Programming Languages</Card.Title>
                <Card.Subtitle style={{ color: "white", marginTop: "60px" }}>
                  C, C++, Java Programming
                </Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Card bg="primary" className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Web Development Skills</Card.Title>
                <Card.Subtitle style={{ color: "white", marginTop: "60px" }}>
                  HTML5, CSS3, JavaScript, Bootstrap, Reactjs, Php and MySql
                </Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Card bg="primary" className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>IDE Used</Card.Title>
                <Card.Subtitle style={{ color: "white", marginTop: "60px" }}>
                  VS Code, Eclipse, Code Blocks, Brackets etc.
                </Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="projects">
        <Container>
          <Row>
            <Col>
              <h1>Projects</h1>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  1. Banking Website
                  <a href="https://bhartiyabank.glitch.me">
                    bhartiyabank.glitch.me
                  </a>
                  Using HTML,CSS,JavaScript,Bootstrap
                </li>
                <li class="list-group-item">
                  2. Fitness Website
                  <a href="https://fitnessbar.glitch.me">
                    fitnessbar.glitch.me
                  </a>
                  Using HTML,CSS,JavaScript,Bootstrap, PHP and MySql
                </li>
                <li class="list-group-item">
                  3. Github Projects
                  <a href="https://github.com/vijaypratap12/Web-Development">
                    github.com/vijaypratap12/Web-Development
                  </a>
                  Using HTML,CSS,JavaScript,Bootstrap
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default TechnicalSkill;
