import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHeartbeat, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Blog9.css'; // Custom CSS file for Blog9
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog9 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog9-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Maximize Your Muscle Recovery with the High-Density Foam Roller</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <p>
              Recovery is just as important as your workout. The **High-Density Foam Roller for Muscle Recovery** is an essential tool for anyone serious about their fitness routine. It helps alleviate muscle soreness, improve flexibility, and enhance overall recovery.
            </p>
            <Button variant="primary" className="cta-button" href="#">Shop Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHeartbeat} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Why Use a Foam Roller?</h3>
            <p>
              Foam rolling is a form of self-myofascial release, which helps release tension in your muscles and connective tissue. Regular use can improve blood flow, reduce the risk of injury, and speed up recovery time.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Your Foam Roller</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. How to Use It</h3>
            <p>
              Using a foam roller is simple. Place it under the muscle group you're targeting, apply pressure, and slowly roll back and forth. It’s especially beneficial for areas like the calves, hamstrings, quads, and back.
            </p>
            <Button variant="success" className="cta-button" href="#">Learn More Techniques</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Benefits Beyond Recovery</h3>
            <p>
              In addition to speeding up muscle recovery, foam rolling can improve your flexibility, enhance your range of motion, and even reduce the appearance of cellulite. It’s a versatile tool that’s great for both pre- and post-workout routines.
            </p>
            <Button variant="success" className="cta-button" href="#">Start Rolling Today</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog9;
