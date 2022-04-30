import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-auto bg-dark text-light">
      <div className="container my-5">
        <Row>
          <Col lg={4}>
            <div className="px-3 border-light border-end">
              <h1>hhjkh</h1>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 border-light border-end">
              <h1>hhjkh</h1>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3">
              <h1>hhjkh</h1>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <h4>ghhjjjjkk</h4>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;