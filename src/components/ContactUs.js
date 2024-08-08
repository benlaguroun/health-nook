import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-section">
      <Container id="contact">
        <h2 className="section-heading">Contact Us</h2>
        <Row>
          <Col md={6}>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
