// ProductPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProductPage.css'; // Custom CSS for styling

const products = [
  {
    id: 1,
    image: require('../images/product1.jpg'),
    title: 'Super Greens Powder Premium Antioxidant Superfood',
    description: 'Organic Greens Fruit and Veggie Vegan Supplement | 40+ Greens and Superfoods Including Wheatgrass & Spirulina | Probiotic Powder Greens, Sweet Berry',
    link: 'https://amzn.to/4cji1Sc', // Amazon affiliate link
  },
  {
    id: 2,
    image: require('../images/product2.jpg'),
    title: 'Yoga Mat with Alignment Lines',
    description: 'Durable and comfortable yoga mat with alignment lines to help improve your practice.',
    link: 'https://www.amazon.com/dp/B07Q7VL6K7',
  },
  {
    id: 3,
    image: require('../images/product3.jpg'),
    title: 'Vitamins & Supplements Set',
    description: 'Complete set of essential vitamins and supplements to support your immune system.',
    link: 'https://www.amazon.com/dp/B08D6J1YF9',
  },
  {
    id: 4,
    image: require('../images/product4.jpg'),
    title: 'BPA-Free Water Bottle',
    description: 'Eco-friendly and BPA-free water bottle with a convenient carrying handle.',
    link: 'https://www.amazon.com/dp/B07W5Y3V5G',
  },
  // Add more products as needed
];

const ProductPage = () => {
  return (
    <section id="product-page" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>All Health Products</h2>
          <p className="text-muted">Explore our full range of health and wellness products.</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductPage;
