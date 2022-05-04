import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-auto  text-light">
      <div className="container my-5">
        <Row className='align-items-stretch'>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
              <h1>hhjkh</h1>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
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
            <div className="px-3 h-100">
              <h1>Contact Us</h1>
              <div className='d-flex mb-3'>
                <a className='text-decoration-none text-light' rel='noreferrer' target='_blank' href='https://www.facebook.com/mdabbasali185'><FontAwesomeIcon className='px-2 fs-1 fb' icon={faFacebook}></FontAwesomeIcon></a>
                <h3><FontAwesomeIcon className='px-2 fs-1 github' icon={faGithub}></FontAwesomeIcon></h3>
                <h3><FontAwesomeIcon className='px-2 fs-1 google' icon={faGoogle}></FontAwesomeIcon></h3>
                <h3><FontAwesomeIcon className='px-2 fs-1 instagram' icon={faInstagram}></FontAwesomeIcon></h3>
                <h3><FontAwesomeIcon className='px-2 fs-1 linkedin' icon={faLinkedin}></FontAwesomeIcon></h3>
              </div>
              <h4>Email: <a className='text-info text-decoration-none' href='mailto:mdabbasali185@gmail.com' target='_blank' rel='noreferrer' >mdabbasali185@gmail.com</a> </h4>
              <h4>Phone: <a className='text-info text-decoration-none' href='tel:01962844395' target='_blank' rel='noreferrer'>01962844395</a> </h4>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <h4><span> &#169; Copyright all right reserved by Abbas Ali in 2022</span></h4>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;