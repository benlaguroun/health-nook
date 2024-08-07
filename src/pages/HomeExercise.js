import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './HomeExercise.css';

const HomeExercise = () => {
  return (
    <div className="home-exercise-container">
      <header className="hero-section">
        <div className="hero-content">
          <FontAwesomeIcon icon={faHome} size="6x" className="icon" />
          <h1>Home Exercise</h1>
          <p>Get fit from the comfort of your home with these simple and effective exercise routines.</p>
        </div>
      </header>

      <main className="content-section">
        <div className="content-container">
          <section className="introduction">
            <h2>Welcome to Home Exercise</h2>
            <p>Maintaining a healthy lifestyle doesn't require a gym membership. With our comprehensive guide to home exercise, you can achieve your fitness goals from the comfort of your own home. Whether you're looking to build strength, improve flexibility, or boost your cardiovascular health, we have workouts and tips to help you succeed.</p>
          </section>

          <section className="benefits">
            <h3>Why Home Exercise?</h3>
            <ul>
              <li>Convenience: Work out on your own schedule without commuting.</li>
              <li>Privacy: Exercise in the comfort of your own home.</li>
              <li>Cost-Effective: Save money on gym memberships and equipment.</li>
              <li>Variety: Explore a range of exercises suitable for all levels.</li>
            </ul>
          </section>

          <section className="featured-workouts">
            <h3>Featured Workouts</h3>
            <p>Here are some of the popular home workout routines:</p>
            <ul>
              <li>Bodyweight Training</li>
              <li>Yoga and Pilates</li>
              <li>HIIT (High-Intensity Interval Training)</li>
              <li>Cardio Workouts</li>
              <li>Strength Training with Dumbbells</li>
            </ul>
          </section>

          <section className="cta-section">
            <h4>Ready to Get Started?</h4>
            <p>Explore our curated list of workout plans and start your home exercise journey today!</p>
            <a href="https://www.yourcpaofferlink.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Check Out Our Home Workout Plans
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomeExercise;
