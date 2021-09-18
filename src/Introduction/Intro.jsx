import React, { useEffect } from "react";
import ProfilePic from "../assets/profile_pic.png";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Intro.css";

const Intro = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="intro">
      <Container>
        <Row style={{ border: "0px solid green" }}>
          <Col
            className="sub_intro"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="intro_tag">Web Developer</h1>
            <p className="intro_sub_tag">Hii, I am Vijay Pratap Singh.</p>
          </Col>
          <Col style={{ border: "0px solid green" }}>
            <img src={ProfilePic} alt="Profile_Pic" id="profilepic" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Intro;
