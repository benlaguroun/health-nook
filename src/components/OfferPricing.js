import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OfferPricing.css';

const offers = [
  {
    id: 1,
    title: 'Personalized Nutrition Plans',
    price: 'Free',
    summary: 'Get a tailored nutrition plan based on your lifestyle and health goals.',
  },
  {
    id: 2,
    title: 'Exclusive Workout Guides',
    price: '$29.99',
    summary: 'Access our top-rated workout plans to build strength and endurance.',
  },
  {
    id: 3,
    title: 'Wellness Coaching Session',
    price: '$99',
    summary: 'One-on-one virtual coaching to help you achieve optimal wellness.',
  },
];

const OfferPricing = () => {
  return (
    <div className="offer-section">
      <Container className="py-5" id="offers">
        <h2 className="section-heading">Our Health & Wellness Offers</h2>
        <Row>
          {offers.map((offer) => (
            <Col md={4} key={offer.id}>
              <Card className="mb-4 offer-card">
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{offer.price}</Card.Subtitle>
                  <Card.Text>{offer.summary}</Card.Text>
                  <Link to={`/offer/${offer.id}`}>
                    <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OfferPricing;
