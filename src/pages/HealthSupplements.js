import React from 'react';
import './HealthSupplements.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial, faCapsules, faPills, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons';

const HealthSupplements = () => {
  return (
    <div className="health-supplements">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Boost Your Health with Supplements</h1>
          <p className="hero-subtitle">Discover the benefits of various health supplements</p>
        </div>
      </div>
      <div className="content-container">
        <section className="introduction">
          <h2>About Our Health Supplements</h2>
          <p>
            Our collection of health supplements is designed to support various aspects of your well-being. From vitamins and minerals to specialized formulations, we offer comprehensive information to help you make informed choices.
          </p>
          <a href="https://www.yourcpalink.com" className="cpa-link">
            Explore Our Health Supplements Now!
          </a>
        </section>

        <section className="supplements-categories">
          <h2>Supplements Categories</h2>
          <div className="supplements-card">
            <FontAwesomeIcon icon={faVial} size="2x" className="card-icon" />
            <h3>Vitamins & Minerals</h3>
            <p>Find essential vitamins and minerals to support your health.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Vitamins & Minerals</a>
          </div>
          <div className="supplements-card">
            <FontAwesomeIcon icon={faCapsules} size="2x" className="card-icon" />
            <h3>Herbal Supplements</h3>
            <p>Discover the benefits of herbal supplements for various needs.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Herbal Supplements</a>
          </div>
          <div className="supplements-card">
            <FontAwesomeIcon icon={faPills} size="2x" className="card-icon" />
            <h3>Probiotics</h3>
            <p>Learn about probiotics and their role in digestive health.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Probiotics</a>
          </div>
          <div className="supplements-card">
            <FontAwesomeIcon icon={faPrescriptionBottleAlt} size="2x" className="card-icon" />
            <h3>Specialty Formulations</h3>
            <p>Explore specialized supplements for unique health needs.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Specialty Formulations</a>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Enhance Your Wellness?</h2>
          <p>Join our community and discover the right supplements for you.</p>
          <a href="https://www.yourcpalink.com" className="btn btn-secondary cta-button">Get Started Now</a>
        </section>
      </div>
    </div>
  );
};

export default HealthSupplements;
