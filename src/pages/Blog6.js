import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPrayingHands, faRecycle, faHandHoldingHeart, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './Blog6.css'; // Custom CSS file for Blog6
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog6 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog6-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Finding Balance: The Importance of an Eco-Friendly Non-Slip Yoga Mat</h1>
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <p>
              In the pursuit of physical and mental well-being, yoga has become a beloved practice for millions worldwide. Whether you're a beginner or an experienced yogi, the foundation of your practice starts with the right mat. The <strong>Eco-Friendly Non-Slip Yoga Mat</strong> is not just another accessory; it's an essential tool that enhances your experience while aligning with your values.
            </p>
            <Button variant="primary" className="cta-button" href="#">Shop Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faPrayingHands} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. The Benefits of Using an Eco-Friendly Yoga Mat</h3>
            <p>
              Choosing an eco-friendly yoga mat isn't just about supporting sustainable practices; it's about committing to a healthier lifestyle for both yourself and the planet. Made from environmentally friendly materials, this yoga mat ensures that your practice is as kind to the Earth as it is to your body. By opting for a mat free of harmful chemicals and PVC, you're making a conscious choice to protect the environment and your health.
            </p>
            <Button variant="success" className="cta-button" href="#">Find Eco-Friendly Mats</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Non-Slip Surface: Stability in Every Pose</h3>
            <p>
              One of the most frustrating experiences during a yoga session is losing your grip. The <strong>Eco-Friendly Non-Slip Yoga Mat</strong> is designed with a superior non-slip surface that ensures stability in every pose. Whether you're practicing hot yoga or gentle stretches, this mat provides the traction needed to keep you grounded.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Your Non-Slip Mat</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faRecycle} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Durability and Longevity</h3>
            <p>
              Investing in a durable yoga mat is essential for long-term practice. The <strong>Eco-Friendly Non-Slip Yoga Mat</strong> is built to withstand rigorous use, making it a cost-effective choice. Its high-quality materials resist wear and tear, ensuring that your mat remains a reliable companion on your wellness journey.
            </p>
            <Button variant="success" className="cta-button" href="#">Explore Durable Options</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHandsHelping} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Comfort and Support</h3>
            <p>
              Comfort is key when it comes to yoga practice. This mat offers the perfect balance of cushioning and support, protecting your joints and allowing you to focus on your practice. The comfort provided by this mat can enhance your yoga sessions, making it easier to maintain poses and achieve deeper stretches.
            </p>
            <Button variant="success" className="cta-button" href="#">Check Out Comfortable Mats</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog6;
