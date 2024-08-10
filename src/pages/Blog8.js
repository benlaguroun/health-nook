import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlender, faLeaf, faAppleAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Blog8.css'; // Custom CSS file for Blog8
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog8 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog8-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">The Ultimate Guide to High-Speed Blending: Why You Need a Personal Blender</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBlender} className="fa-icon animated-icon" />
            </div>
            <p>
              If you’re someone who loves smoothies, shakes, or any type of blended drink, then you know the importance of a good blender. But not just any blender—a high-speed personal blender that can handle anything you throw at it. 
            </p>
            <Button variant="primary" className="cta-button" href="#">Shop Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Why Go High-Speed?</h3>
            <p>
              A high-speed blender ensures your smoothies are silky smooth, with no chunks left behind. It's perfect for breaking down even the toughest ingredients like ice, nuts, and fibrous vegetables, making it a must-have in any health-conscious kitchen.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Your Blender</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. The Benefits of Smoothies</h3>
            <p>
              Smoothies are a fantastic way to pack in nutrients, especially when you're short on time. With the right ingredients, you can create a balanced meal in a cup—perfect for breakfast on the go or a post-workout refuel.
            </p>
            <Button variant="success" className="cta-button" href="#">Explore Smoothie Recipes</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Perfect for Busy Lifestyles</h3>
            <p>
              Whether you're heading to the gym, running errands, or just need a quick meal, a high-speed blender makes it easy to whip up something nutritious in minutes. It's a game-changer for those with a busy lifestyle.
            </p>
            <Button variant="success" className="cta-button" href="#">Buy Now</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog8;
