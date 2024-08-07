import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faRunning, faAppleAlt, faSpa, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Blog2.css'; // Custom CSS file for Blog2
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog2 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog2-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Top 5 Habits for a Healthier Lifestyle</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <p>
              Adopting healthy habits can significantly improve your overall well-being. Here are five essential habits to incorporate into your daily routine for a healthier lifestyle.
            </p>
            <Button variant="primary" className="cta-button" href="#">Discover More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faRunning} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Regular Exercise</h3>
            <p>
              Engaging in regular physical activity is crucial for maintaining a healthy body and mind. Whether it's jogging, cycling, yoga, or strength training, exercise helps improve cardiovascular health, strengthen muscles, and boost mood. Aim for at least 30 minutes of exercise most days of the week.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Workout Gear</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Balanced Nutrition</h3>
            <p>
              Eating a balanced diet rich in fruits, vegetables, whole grains, and lean proteins is essential for optimal health. Avoid processed foods and sugars, and focus on nutrient-dense options. Proper nutrition fuels the body, supports immune function, and helps maintain a healthy weight.
            </p>
            <Button variant="success" className="cta-button" href="#">Find Healthy Recipes</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSpa} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Stress Management</h3>
            <p>
              Managing stress is vital for maintaining mental and physical health. Techniques such as meditation, deep breathing, and mindfulness can help reduce stress levels. Taking breaks, engaging in hobbies, and spending time with loved ones are also effective ways to relax and recharge.
            </p>
            <Button variant="success" className="cta-button" href="#">Explore Relaxation Techniques</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUtensils} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Adequate Hydration</h3>
            <p>
              Staying hydrated is crucial for overall health. Water plays a key role in bodily functions such as digestion, temperature regulation, and nutrient transport. Aim to drink at least eight 8-ounce glasses of water daily. Keep a water bottle with you to make staying hydrated easier.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Water Bottles</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">5. Quality Sleep</h3>
            <p>
              Quality sleep is essential for overall well-being. It helps with cognitive function, mood regulation, and physical health. Create a calming bedtime routine, limit screen time before bed, and aim for 7-9 hours of sleep each night. A comfortable sleep environment also contributes to better rest.
            </p>
            <Button variant="success" className="cta-button" href="#">Find Sleep Solutions</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog2;
