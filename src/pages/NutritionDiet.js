import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NutritionDiet.css'; // Custom CSS for styling

const NutritionDiet = () => {
  return (
    <Container className="nutrition-diet-container my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Nutrition & Diet</h1>
          <p className="lead text-center text-muted">
            Explore the best diet plans, nutritional advice, and tips for maintaining a healthy lifestyle.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="./images/diet-plan.jpg" alt="Diet Plan" />
            <Card.Body>
              <Card.Title>Personalized Diet Plans</Card.Title>
              <Card.Text>
                Discover the perfect diet plan tailored to your needs. Whether you're looking to lose weight, gain muscle, or maintain a balanced diet, we've got you covered.
              </Card.Text>
              {/* CPA Link - Diet Plans */}
              <Button variant="primary" as={Link} to="/cpa-link-diet-plans">
                Get Your Personalized Plan
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="/images/nutrition-tips.jpg" alt="Nutrition Tips" />
            <Card.Body>
              <Card.Title>Expert Nutrition Tips</Card.Title>
              <Card.Text>
                Get professional advice on how to balance your meals, select nutritious foods, and understand the importance of vitamins and minerals.
              </Card.Text>
              {/* CPA Link - Nutritionist Consultation */}
              <Button variant="primary" as={Link} to="/cpa-link-nutrition-consultation">
                Consult with a Nutritionist
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="/images/meal-prep.jpg" alt="Meal Prep" />
            <Card.Body>
              <Card.Title>Meal Preparation Tips</Card.Title>
              <Card.Text>
                Learn how to prepare healthy and delicious meals efficiently. Our tips will help you save time and stay on track with your diet goals.
              </Card.Text>
              {/* CPA Link - Meal Prep Kits */}
              <Button variant="primary" as={Link} to="/cpa-link-meal-prep-kits">
                Explore Meal Prep Kits
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="/images/superfoods.jpg" alt="Superfoods" />
            <Card.Body>
              <Card.Title>The Power of Superfoods</Card.Title>
              <Card.Text>
                Superfoods are packed with nutrients that can boost your health. Learn which superfoods to include in your diet for maximum benefits.
              </Card.Text>
              {/* CPA Link - Superfoods */}
              <Button variant="primary" as={Link} to="/cpa-link-superfoods">
                Discover Superfoods
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center">Join Our Nutrition Community</Card.Title>
              <Card.Text className="text-center">
                Get access to exclusive recipes, meal plans, and a supportive community to help you achieve your health goals.
              </Card.Text>
              {/* CPA Link - Community Sign-up */}
              <div className="text-center">
                <Button variant="success" as={Link} to="/cpa-link-community-signup">
                  Join Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NutritionDiet;
