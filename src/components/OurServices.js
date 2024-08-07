import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faHeartbeat, faDumbbell, faSpa, faLeaf, faVial } from '@fortawesome/free-solid-svg-icons';
import './OurServices.css'; // Custom CSS for styling

const services = [
  { icon: faAppleAlt, title: 'Nutrition & Diet', description: 'Explore the best diet plans and nutritional advice.', link: '/nutrition-diet' },
  { icon: faHeartbeat, title: 'Fitness & Workouts', description: 'Find effective workout routines for all fitness levels.', link: '/fitness-workouts' },
  { icon: faDumbbell, title: 'Home Exercise', description: 'Get fit from the comfort of your home.', link: '/home-exercise' },
  { icon: faSpa, title: 'Mental Wellness', description: 'Tips and techniques for mental well-being.', link: '/mental-wellness' },
  { icon: faLeaf, title: 'Natural Remedies', description: 'Discover natural ways to boost your health.', link: '/natural-remedies' },
  { icon: faVial, title: 'Health Supplements', description: 'Learn about supplements to enhance your health.', link: '/health-supplements' },
];

const OurServices = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Health & Wellness Offers</h2>
          <p className="text-muted">Explore a variety of services to support your health journey.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow hover-shadow h-100 text-center">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary animated-icon" />
                  </div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <div className="mt-auto">
                    <Link to={service.link} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
