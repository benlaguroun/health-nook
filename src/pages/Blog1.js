import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faAppleAlt, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import './Blog1.css'; // Custom CSS file for Blog
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="blog-title">The Power of Super Greens: Elevate Your Health Naturally</h1>
            <p className="blog-subtitle">Discover the benefits of adding Super Greens Powder to your daily routine</p>
          </div>
          
          <div className="blog-content">
            <Row className="mb-5">
              <Col md={6} className="mb-4">
                <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
                <h3>Why Super Greens?</h3>
                <p>
                  In a world where convenience often trumps nutrition, getting your daily dose of essential nutrients can be challenging. That's where Super Greens Powder comes in. This powerhouse supplement is packed with over 40 greens and superfoods, including wheatgrass, spirulina, and kale, providing you with a convenient way to boost your intake of vital vitamins and minerals.
                </p>
                <Button variant="success" href="https://amzn.to/4dhYsLi">Shop Super Greens Now</Button>
              </Col>
              <Col md={6} className="mb-4">
                <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
                <h3>Benefits for Your Body</h3>
                <p>
                  Super Greens Powder is more than just a supplement; it’s a game-changer for your overall health. From boosting your immune system to improving digestion and detoxifying your body, this nutrient-dense powder offers a host of benefits that support your well-being.
                </p>
                <Button variant="success" href="https://benlaguroun.github.io/SuperGreens/">Get FREE Guide</Button>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6} className="mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="fa-icon animated-icon" />
                <h3>Immune System Support</h3>
                <p>
                  A strong immune system is your body’s best defense against illness. The antioxidants and phytonutrients found in Super Greens Powder help fight off harmful free radicals and support your immune system, keeping you healthy and resilient.
                </p>
                <Button variant="success" href="#">Boost Your Immunity</Button>
              </Col>
              <Col md={6} className="mb-4">
                <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
                <h3>Improved Digestion & Gut Health</h3>
                <p>
                  A healthy gut is key to overall well-being. With added probiotics, Super Greens Powder aids digestion, reduces bloating, and helps maintain a balanced gut flora. Say goodbye to digestive discomfort and hello to a happier, healthier you.
                </p>
                <Button variant="success" href="#">Support Your Gut Health</Button>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={12}>
                <h2>How to Use Super Greens Powder</h2>
                <p>
                  Incorporating Super Greens Powder into your daily routine is easy. Simply add a scoop to your morning smoothie, juice, or even a glass of water. It’s a simple way to start your day with a burst of nutrients, ensuring you’re fueling your body with the best nature has to offer.
                </p>
                <Button variant="primary" href="https://amzn.to/4dhYsLi">Get Your Super Greens Today</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog;
