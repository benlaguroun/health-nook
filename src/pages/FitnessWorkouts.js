import React from 'react';
import './FitnessWorkouts.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faBicycle, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const FitnessWorkouts = () => {
  return (
    <div className="fitness-workouts">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Get Fit with Our Workout Plans</h1>
          <p className="hero-subtitle">Explore effective exercises for every fitness level</p>
        </div>
      </div>
      <div className="content-container">
        <section className="introduction">
          <h2>About Our Workout Programs</h2>
          <p>
            Our workout plans are designed to cater to all fitness levels, from beginners to advanced athletes. Whether you're looking to build muscle, lose weight, or improve your overall fitness, we have something for everyone. Explore our variety of exercises and find the perfect routine to help you achieve your fitness goals.
          </p>
          <a href="https://www.yourcpalink.com" className="cpa-link">
            Start Your Fitness Journey Today!
          </a>
        </section>

        <section className="workout-categories">
          <h2>Workout Categories</h2>
          <div className="workout-card">
            <FontAwesomeIcon icon={faDumbbell} size="2x" className="card-icon" />
            <h3>Strength Training</h3>
            <p>Build muscle and increase strength with our weight training routines.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Strength Training</a>
          </div>
          <div className="workout-card">
            <FontAwesomeIcon icon={faRunning} size="2x" className="card-icon" />
            <h3>Cardio Workouts</h3>
            <p>Boost your endurance and burn calories with high-intensity cardio exercises.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Cardio Workouts</a>
          </div>
          <div className="workout-card">
            <FontAwesomeIcon icon={faBicycle} size="2x" className="card-icon" />
            <h3>Outdoor Activities</h3>
            <p>Enjoy the outdoors with activities like cycling, hiking, and more.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Outdoor Activities</a>
          </div>
          <div className="workout-card">
            <FontAwesomeIcon icon={faSwimmer} size="2x" className="card-icon" />
            <h3>Swimming</h3>
            <p>Improve your fitness and have fun with our swimming exercises.</p>
            <a href="https://www.yourcpalink.com" className="btn btn-primary">Explore Swimming Workouts</a>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Sign up for personalized workout plans and exclusive offers.</p>
          <a href="https://www.yourcpalink.com" className="btn btn-secondary cta-button">Join Now</a>
        </section>
      </div>
    </div>
  );
};

export default FitnessWorkouts;
