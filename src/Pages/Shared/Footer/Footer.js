import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-auto  text-light">
      <div className="container my-5">
        <Row>
          <Col lg={4}>
            <div className="px-3 border-light border-end">
              <h1>hhjkh</h1>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 border-light border-end">
              <h1>OUR SERVICES</h1>
              <div className='text-secondary'>
                <h5>All Services</h5>
                <h5>Ground Transport</h5>
                <h5>Shipping free</h5>
                <h5>Logistic Service</h5>
                <h5>Laptop Service</h5>
                <h5>Storage</h5>
              </div>

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