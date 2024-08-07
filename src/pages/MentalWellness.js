import React from 'react';
import './MentalWellness.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faSmile, faLeaf, faSpa } from '@fortawesome/free-solid-svg-icons';

const MentalWellness = () => {
  return (
    <div className="mental-wellness">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Nurture Your Mind & Soul</h1>
          <p className="hero-subtitle">Discover techniques to enhance your mental well-being</p>
        </div>
      </div>
      <div className="content-container">
        <section className="introduction">
          <h2>About Our Mental Wellness Programs</h2>
          <p>
            Our mental wellness programs focus on providing practical tips and techniques to improve your mental health. From mindfulness practices to stress management, we offer a variety of resources to help you achieve a balanced and peaceful state of mind.
          </p>
          <a href="https://www.yourcpalink.com" className="cpa-link">
            Start Your Mental Wellness Journey Now!
          </a>
        </section>

        <section className="wellness-categories">
          <h2>Wellness Categories</h2>
          <div className="wellness-card">
            <FontAwesomeIcon icon={faBrain} size="2x" className="card-icon" />
            <h3>Mindfulness & Meditation</h3>
            <p>Learn how to calm your mind and stay present with guided meditation sessions.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Mindfulness</a>
          </div>
          <div className="wellness-card">
            <FontAwesomeIcon icon={faSmile} size="2x" className="card-icon" />
            <h3>Stress Management</h3>
            <p>Discover effective strategies to manage stress and improve your emotional well-being.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Stress Management</a>
          </div>
          <div className="wellness-card">
            <FontAwesomeIcon icon={faLeaf} size="2x" className="card-icon" />
            <h3>Healthy Living</h3>
            <p>Find tips on maintaining a healthy lifestyle that supports your mental wellness.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Healthy Living</a>
          </div>
          <div className="wellness-card">
            <FontAwesomeIcon icon={faSpa} size="2x" className="card-icon" />
            <h3>Relaxation Techniques</h3>
            <p>Unwind and relax with our selection of relaxation techniques.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Relaxation</a>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Enhance Your Mental Well-being?</h2>
          <p>Join our community and access personalized mental wellness plans.</p>
          <a href="https://www.yourcpalink.com" className="btn btn-secondary cta-button">Get Started Now</a>
        </section>
      </div>
    </div>
  );
};

export default MentalWellness;
