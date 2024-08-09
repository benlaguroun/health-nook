import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHandHoldingHeart, faDumbbell, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Blog4.css'; // Custom CSS file for Blog4
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog4 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog4-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Unlock the Benefits of Hydrolyzed Collagen Peptides</h1>
            <p className="lead">
              Discover how our Hydrolyzed Collagen Peptides Powder can help you maintain youthful skin, support joint health, and boost muscle recovery.
            </p>
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHeartbeat} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Support Skin Elasticity</h3>
            <p>
              As we age, our skin loses its natural elasticity, leading to wrinkles and sagging. Hydrolyzed collagen peptides are broken down into smaller, more easily absorbed particles, helping to restore your skin’s firmness and hydration. This powerful supplement can help you maintain a youthful glow by supporting your body’s natural collagen production.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Collagen Peptides</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Promote Joint Health</h3>
            <p>
              Joint discomfort can limit your mobility and affect your quality of life. Collagen is a major component of cartilage, the tissue that cushions joints. By supplementing with hydrolyzed collagen peptides, you can help protect your joints, reduce stiffness, and maintain an active lifestyle, regardless of age.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Joint Support</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Enhance Muscle Recovery</h3>
            <p>
              Whether you’re a fitness enthusiast or just starting your workout journey, muscle recovery is key to achieving your goals. Hydrolyzed collagen peptides provide the amino acids needed to repair and rebuild muscles after exercise. Adding this supplement to your routine can help you recover faster and stay on track with your fitness goals.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Fitness Supplements</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. A Natural, Clean Supplement</h3>
            <p>
              Our Hydrolyzed Collagen Peptides Powder is sourced from high-quality ingredients, ensuring you get a clean, natural supplement free from artificial additives. It’s a great addition to your daily wellness routine, whether you mix it in your morning smoothie, coffee, or favorite recipe.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Clean Nutrition</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog4;
