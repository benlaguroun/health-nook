import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faSuitcaseRolling, faHome, faRunning } from '@fortawesome/free-solid-svg-icons';
import './Blog3.css'; // Custom CSS file for Blog3
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog3 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog3-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Maximize Your Home Workouts: The Power of Resistance Bands</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <p>
              In today's fast-paced world, finding time to hit the gym can be challenging. That's why more people are turning to home workouts. But how do you make the most of your workout without all the bulky, expensive gym equipment? The answer lies in resistance bands – a simple, effective tool that can transform your fitness routine.
            </p>
            <Button variant="primary" className="cta-button" href="#">Discover More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHome} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Versatility at Its Best</h3>
            <p>
              Resistance bands are incredibly versatile, making them suitable for any fitness level. Whether you're a beginner or a seasoned athlete, these bands can help you target various muscle groups, improve flexibility, and enhance strength. From squats to bicep curls, the possibilities are endless.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Your Set</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSuitcaseRolling} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. The Perfect Travel Companion</h3>
            <p>
              One of the best things about resistance bands is their portability. Unlike heavy weights, these bands are light and easy to carry, making them the perfect travel companion. Whether you're on a business trip or a vacation, you can stay fit and maintain your routine with ease.
            </p>
            <Button variant="success" className="cta-button" href="#">Order Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faRunning} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Affordable & Effective</h3>
            <p>
              Gym memberships and home gym equipment can be expensive. Resistance bands offer a cost-effective alternative without compromising on effectiveness. These bands can deliver a full-body workout at a fraction of the cost, making fitness accessible to everyone.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Ideal for Home Workouts</h3>
            <p>
              With more people working out at home, having versatile and effective equipment is essential. Resistance bands allow you to perform a wide range of exercises without taking up much space. They are easy to store and can be used in any room, making them perfect for home workouts.
            </p>
            <Button variant="success" className="cta-button" href="#">Buy Your Set</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog3;
