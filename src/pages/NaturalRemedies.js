import React from 'react';
import './NaturalRemedies.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faLemon, faSpa, faPepperHot } from '@fortawesome/free-solid-svg-icons';

const NaturalRemedies = () => {
  return (
    <div className="natural-remedies">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover the Power of Nature</h1>
          <p className="hero-subtitle">Explore natural remedies to enhance your health and well-being</p>
        </div>
      </div>
      <div className="content-container">
        <section className="introduction">
          <h2>About Our Natural Remedies</h2>
          <p>
            Our natural remedies offer holistic solutions to various health concerns. From herbal treatments to essential oils, we provide comprehensive guides and tips for a healthier lifestyle through nature's gifts.
          </p>
          <a href="https://www.yourcpalink.com" className="cpa-link">
            Explore Our Natural Remedies Now!
          </a>
        </section>

        <section className="remedies-categories">
          <h2>Remedies Categories</h2>
          <div className="remedies-card">
            <FontAwesomeIcon icon={faLeaf} size="2x" className="card-icon" />
            <h3>Herbal Treatments</h3>
            <p>Explore a variety of herbs that can help alleviate common ailments.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Herbal Treatments</a>
          </div>
          <div className="remedies-card">
            <FontAwesomeIcon icon={faLemon} size="2x" className="card-icon" />
            <h3>Essential Oils</h3>
            <p>Discover the benefits of essential oils for relaxation and healing.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Essential Oils</a>
          </div>
          <div className="remedies-card">
            <FontAwesomeIcon icon={faSpa} size="2x" className="card-icon" />
            <h3>Aromatherapy</h3>
            <p>Learn about aromatherapy and how it can improve your well-being.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Aromatherapy</a>
          </div>
          <div className="remedies-card">
            <FontAwesomeIcon icon={faPepperHot} size="2x" className="card-icon" />
            <h3>Natural Supplements</h3>
            <p>Find natural supplements that support various aspects of health.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Natural Supplements</a>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Embrace Nature's Healing Power?</h2>
          <p>Join our community and discover the benefits of natural remedies.</p>
          <a href="https://www.yourcpalink.com" className="btn btn-secondary cta-button">Get Started Now</a>
        </section>
      </div>
    </div>
  );
};

export default NaturalRemedies;
