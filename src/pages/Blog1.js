import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCarrot, faFish, faBreadSlice, faLemon } from '@fortawesome/free-solid-svg-icons';
import './Blog1.css'; // Custom CSS file for Blog1
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog1 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog1-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">The Benefits of Maintaining a Healthy Diet</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <p>
              A healthy diet is vital for maintaining good health and well-being. By consuming a balanced diet, you provide your body with essential nutrients, improve energy levels, and reduce the risk of chronic diseases. Let's explore some of the key benefits of maintaining a healthy diet.
            </p>
            <Button variant="primary" className="cta-button" href="#">Learn More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faCarrot} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Boosts Immune System</h3>
            <p>
              A diet rich in fruits, vegetables, and whole grains provides essential vitamins, minerals, and antioxidants that boost your immune system. These nutrients help your body fight off infections and illnesses, keeping you healthy and strong.
            </p>
            <Button variant="success" className="cta-button" href="#">Find Immune Boosters</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faFish} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Supports Weight Management</h3>
            <p>
              Eating a balanced diet helps you maintain a healthy weight. By choosing nutrient-dense foods over processed, high-calorie options, you can manage your calorie intake more effectively. Incorporating lean proteins, healthy fats, and fiber-rich foods keeps you full and satisfied, reducing the likelihood of overeating.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Diet Plans</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBreadSlice} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Improves Mental Health</h3>
            <p>
              A healthy diet can have a positive impact on mental health. Foods rich in omega-3 fatty acids, such as fish and nuts, support brain health. Additionally, complex carbohydrates like whole grains can help regulate blood sugar levels, improving mood and energy stability.
            </p>
            <Button variant="success" className="cta-button" href="#">Shop Omega-3 Supplements</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLemon} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">4. Reduces Risk of Chronic Diseases</h3>
            <p>
              Consuming a diet high in fruits, vegetables, whole grains, and lean proteins can reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers. These foods provide essential nutrients that support overall health and prevent inflammation and oxidative stress.
            </p>
            <Button variant="success" className="cta-button" href="#">Explore Healthy Foods</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">5. Enhances Energy Levels</h3>
            <p>
              A well-balanced diet provides the necessary nutrients and energy to fuel your daily activities. By choosing a variety of nutrient-rich foods, you can maintain stable energy levels throughout the day, improving productivity and overall well-being.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Energy Boosters</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog1;
