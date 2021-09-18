import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <h1 className="name">VIJAY PRATAP SINGH</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title">Web Developer | Java Programmer</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
