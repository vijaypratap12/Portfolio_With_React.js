import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "react-bootstrap/Card";
const Education = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <Container>
      <Row className="education_section">
        <Col
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Card bg="primary" className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Master of Computer Application</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                2019-2022
              </Card.Subtitle>
              <Card.Text>
                I am pursuing MCA final sem from CSJM University Kanpur Uttar
                Pradesh.
              </Card.Text>
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
              <Card.Title>Bachelor of Science</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                2016-2019
              </Card.Subtitle>
              <Card.Text>
                I have done B.Sc.(Computer Application) from CCS University,
                Meerut, Uttar Pradesh
              </Card.Text>
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
              <Card.Title>10+2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                2015-2016
              </Card.Subtitle>
              <Card.Text>
                I have done 10+2 from Tagore Baal Niketan Sr. Sec. School,
                Karnal, Haryana
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Education;
