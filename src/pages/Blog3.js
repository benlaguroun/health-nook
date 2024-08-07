import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faDumbbell, faBed, faSpa, faLeaf } from '@fortawesome/free-solid-svg-icons';
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
            <h1 className="text-center blog-title">7 Essential Tips for a Healthier Lifestyle</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <p>
              Maintaining a healthy lifestyle involves various aspects, from nutrition to exercise. Explore these seven essential tips and discover how they can benefit your well-being.
            </p>
            <Button variant="primary" className="cta-button" href="#">Learn More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Eat a Balanced Diet</h3>
            <p>
              A balanced diet includes a variety of foods, providing essential nutrients for the body. Focus on incorporating fruits, vegetables, lean proteins, and whole grains. Avoid processed foods, sugars, and excessive fats. Balanced nutrition supports energy levels, immune function, and overall health.
            </p>
            <Button variant="success" className="cta-button" href="#">Find Healthy Recipes</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faDumbbell} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Stay Active</h3>
            <p>
              Regular physical activity strengthens the heart, muscles, and bones. Activities like walking, running, cycling, or strength training can help you stay fit. Aim for at least 30 minutes of moderate exercise most days of the week. Physical activity also improves mental health and reduces the risk of chronic diseases.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Fitness Gear</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBed} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Get Enough Sleep</h3>
            <p>
              Quality sleep is vital for physical and mental well-being. It helps the body recover, improves mood, and boosts cognitive function. Establish a regular sleep schedule, create a calming bedtime routine, and ensure your sleep environment is comfortable. Aim for 7-9 hours of sleep per night.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Sleep Aids</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSpa} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Manage Stress</h3>
            <p>
              Chronic stress can have detrimental effects on health. Techniques like mindfulness, meditation, and yoga can help manage stress levels. Taking time to relax, practicing deep breathing exercises, and engaging in hobbies can reduce stress and enhance mental clarity.
            </p>
            <Button variant="success" className="cta-button" href="#">Explore Relaxation Techniques</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">5. Stay Hydrated</h3>
            <p>
              Water is essential for various bodily functions, including digestion, circulation, and temperature regulation. Drinking adequate water daily can improve skin health, aid digestion, and prevent dehydration. Carry a water bottle and aim to drink at least eight 8-ounce glasses of water daily.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Water Bottles</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">6. Avoid Unhealthy Habits</h3>
            <p>
              Limiting alcohol consumption and avoiding smoking are crucial for maintaining health. Alcohol can affect liver function, and smoking increases the risk of respiratory diseases. Opt for healthier alternatives and seek support if needed to break these habits.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Support</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">7. Regular Check-ups</h3>
            <p>
              Regular medical check-ups are vital for early detection and prevention of illnesses. Schedule annual physicals, dental check-ups, and screenings as recommended by healthcare providers. Early detection can lead to more effective treatment and a healthier life.
            </p>
            <Button variant="success" className="cta-button" href="#">Find a Doctor</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog3;
