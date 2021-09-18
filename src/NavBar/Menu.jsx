import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Menu = () => {
  return (
    <div className="nav_bar">
      <Container>
        <Row className="sub_nav_bar">
          <Col className="sub_sub_nav_bar">
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
      </Container>
    </div>
  );
};
export default Menu;
