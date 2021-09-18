import React, { useEffect } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="footer">
      <Container>
        <Row className="sub_footer">
          <Col className="footer_contact">
            <ul>
              <li data-tip="Phone">
                <i class="fas fa-phone-alt"></i>+919068718571
              </li>
              <li data-tip="Email">
                <i class="fas fa-envelope"></i>vijaypratapsingh845@gmail.com
              </li>
            </ul>
          </Col>

          <Col className="footer_menu">
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/education">
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/technicalskill">
                  Technical Skills
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={{ border: "0px solid green" }}>
          <Col>
            <p style={{ textAlign: "center" }}>
              2021 | Copyright &copy; All Rights Reserved
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="footer_icons">
            <i class="fas fa-envelope" data-tip="Email"></i>
            <i class="fab fa-github-square" data-tip="Github"></i>
            <i class="fab fa-facebook-square" data-tip="facebook"></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
