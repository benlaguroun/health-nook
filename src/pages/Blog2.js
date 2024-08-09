import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDumbbell, faSeedling, faHeart, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './Blog2.css'; // Custom CSS file for Blog2
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog2 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog2-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">The Power of Plant-Based Organic Protein: Fuel Your Body, Fuel the Planet</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <p>
              In today's world, health and sustainability are more important than ever. Our **Plant-Based Organic Protein Powder** is here to help you achieve your fitness goals while staying true to your values. Whether you're an athlete, a vegan, or simply someone who cares about clean eating, this protein powder is designed to support your lifestyle.
            </p>
            <Button variant="primary" className="cta-button" href="#">Learn More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Boost Your Workout with Clean Protein</h3>
            <p>
              Fuel your workouts with pure, plant-based protein that provides essential amino acids without any artificial additives. Whether you're hitting the gym or doing yoga at home, this protein powder helps you recover faster and build lean muscle, all while staying true to a clean and organic diet.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSeedling} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Sustainable and Eco-Friendly</h3>
            <p>
              Our protein powder isn't just good for you—it's good for the planet. Made from sustainably sourced, organic ingredients, it offers a clean source of nutrition that aligns with environmentally conscious values. By choosing plant-based protein, you're helping reduce the environmental impact associated with animal agriculture.
            </p>
            <Button variant="success" className="cta-button" href="#">Discover More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHeart} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Perfect for All Lifestyles</h3>
            <p>
              Whether you're vegan, vegetarian, or just looking to incorporate more plant-based options into your diet, this protein powder fits seamlessly into any lifestyle. It's dairy-free, gluten-free, and free from any artificial ingredients, making it an excellent choice for those with dietary restrictions or food sensitivities.
            </p>
            <Button variant="success" className="cta-button" href="#">Find Out More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBalanceScale} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Balanced Nutrition for Your Body</h3>
            <p>
              Packed with essential nutrients, our plant-based protein powder offers more than just protein. It provides a balanced source of nutrition that includes vitamins, minerals, and antioxidants, all of which are crucial for maintaining a healthy body. Whether you're using it post-workout or as a meal replacement, it's a versatile addition to your daily routine.
            </p>
            <Button variant="success" className="cta-button" href="#">Order Now</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog2;
