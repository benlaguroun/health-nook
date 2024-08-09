import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faHeartbeat, faMoon, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './Blog5.css'; // Custom CSS file for Blog5
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog5 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog5-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Stay on Track with a Waterproof Fitness Tracker</h1>
            <p className="lead">
              Learn how our Waterproof Fitness Tracker with Heart Rate Monitor can help you achieve your health goals by tracking your activity, heart rate, and sleep patterns.
            </p>
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faRunning} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Monitor Your Daily Activity</h3>
            <p>
              Staying active is crucial for maintaining good health, and our fitness tracker makes it easy to monitor your daily steps, calories burned, and distance covered. Whether you're walking, running, or cycling, you can keep track of your progress and stay motivated.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Fitness Trackers</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHeartbeat} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Keep an Eye on Your Heart Rate</h3>
            <p>
              Understanding your heart rate is essential for optimizing your workouts and ensuring you're exercising within your target heart rate zone. Our tracker provides real-time heart rate monitoring, allowing you to adjust your intensity and maximize your results.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Heart Rate Monitors</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faMoon} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Track Your Sleep Patterns</h3>
            <p>
              Sleep is a vital part of overall health, and our fitness tracker helps you understand your sleep patterns by monitoring the duration and quality of your sleep. With insights into your sleep, you can make adjustments to improve your rest and recovery.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Sleep Trackers</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faMobileAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Waterproof and Durable</h3>
            <p>
              Our fitness tracker is designed to keep up with your active lifestyle. It's waterproof, so you can wear it while swimming, showering, or during rainy runs without worrying about damage. It's built to last, making it a reliable companion for all your fitness activities.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Durable Trackers</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog5;
