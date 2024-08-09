import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const products = [
  {
    id: 1,
    image: require('../images/product1.jpg'),
    title: 'Super Greens Powder Premium Antioxidant Superfood',
    description: 'Organic Greens Fruit and Veggie Vegan Supplement | 40+ Greens and Superfoods Including Wheatgrass & Spirulina | Probiotic Powder Greens, Sweet Berry',
    link: 'https://amzn.to/4cji1Sc',
  },
  {
    id: 2,
    image: require('../images/product2.jpg'),
    title: 'Yoga Mat with Alignment Lines',
    description: 'Durable and comfortable yoga mat with alignment lines to help improve your practice.',
    link: 'https://www.amazon.com/dp/B07YJ8J2J7',
  },
  {
    id: 3,
    image: require('../images/product3.jpg'),
    title: 'Vitamins & Supplements Set',
    description: 'Complete set of essential vitamins and supplements to support your immune system.',
    link: 'https://www.amazon.com/dp/B00X5MJ3GG',
  },
  {
    id: 4,
    image: require('../images/product4.jpg'),
    title: 'BPA-Free Water Bottle',
    description: 'Eco-friendly and BPA-free water bottle with a convenient carrying handle.',
    link: 'https://amzn.to/3AfL0ZH',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured-products" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2>Featured Health Products</h2>
          <p className="text-muted">Explore our curated selection of health and wellness products.</p>
        </div>
        <Row>
          {products.slice(0, 3).map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to="/products">
                      <Button variant="outline-primary">View More</Button>
                    </Link>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary">Buy Now</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/products">
            <Button variant="primary">View All Products</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
