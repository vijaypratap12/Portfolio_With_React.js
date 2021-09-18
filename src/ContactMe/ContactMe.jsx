import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactMe.css";

const ContactMe = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container>
      <Row>
        <Col
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="parent-wrapper">
            <span className="close-btn glyphicon glyphicon-remove"></span>
            <div className="subscribe-wrapper">
              <h4>WANT TO BE IN TOUCH, JUST ENTER YOUR EMAIL</h4>
              <input
                data-tip="Enter your email"
                type="email"
                name="email"
                className="subscribe-input"
              />
              <div className="submit-btn">SUBMIT</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
