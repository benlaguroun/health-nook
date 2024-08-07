import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './Hero.css';

import image1 from '../images/hero-1.jpg';
import image2 from '../images/hero-2.jpg';
import image3 from '../images/hero-3.jpg';

const Hero = () => {
  return (
    <Carousel className="hero" interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center text-white" md={8}>
                <h1 className="hero-title">Welcome to HealthNook</h1>
                <p>Your ultimate destination for health and wellness tips and offers.</p>
                <Button className="btn btn-primary hero-button">Explore Offers</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center text-white" md={8}>
                <h1 className="hero-title">Exclusive Health Deals</h1>
                <p>Unlock amazing health and wellness deals tailored for you.</p>
                <Button className="btn btn-primary hero-button">Get Started</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center text-white" md={8}>
                <h1 className="hero-title">Join Our Health Community</h1>
                <p>Stay updated with the latest health tips and offers.</p>
                <Button className="btn btn-primary hero-button">Join Now</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
