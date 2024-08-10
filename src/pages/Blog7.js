import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBrain, faFish } from '@fortawesome/free-solid-svg-icons';
import './Blog7.css'; // Custom CSS file for Blog7
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog7 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog7-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">The Benefits of Omega-3 Fish Oil for Heart and Brain Health</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHeart} className="fa-icon animated-icon" />
            </div>
            <p>
              Omega-3 Fish Oil supplements are packed with essential fatty acids that have been shown to support heart health, reduce inflammation, and enhance brain function. In this blog, we'll explore the many benefits of incorporating Omega-3s into your daily routine.
            </p>
            <Button variant="primary" className="cta-button" href="#">Discover Omega-3 Fish Oil</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHeart} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Heart Health</h3>
            <p>
              Omega-3 fatty acids are known to reduce the risk of heart disease by lowering triglyceride levels, reducing blood pressure, and preventing plaque buildup in the arteries. These benefits make Omega-3 Fish Oil a key supplement for anyone looking to improve cardiovascular health.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Omega-3 Fish Oil</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBrain} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Brain Health</h3>
            <p>
              The DHA component of Omega-3s is crucial for brain health, supporting cognitive function and reducing the risk of cognitive decline. Regular intake of Omega-3 Fish Oil has been linked to improved memory and learning abilities, making it a valuable supplement for brain health.
            </p>
            <Button variant="success" className="cta-button" href="#">Learn More About Brain Health</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faFish} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Inflammation Reduction</h3>
            <p>
              Omega-3s have powerful anti-inflammatory properties that can help reduce chronic inflammation, a key factor in many diseases. This makes Omega-3 Fish Oil beneficial not only for heart and brain health but also for joint health and overall well-being.
            </p>
            <Button variant="success" className="cta-button" href="#">Explore Anti-Inflammatory Benefits</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog7;
