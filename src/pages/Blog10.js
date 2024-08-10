import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faAppleAlt, faSeedling } from '@fortawesome/free-solid-svg-icons';
import './Blog10.css'; // Custom CSS file for Blog10
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog10 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog10-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Unlock the Power of Organic Spirulina Powder</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <p>
              Spirulina has been hailed as one of nature’s most powerful superfoods. The **Organic Spirulina Powder** offers a concentrated dose of essential nutrients, including high-quality protein, vitamins, minerals, and antioxidants.
            </p>
            <Button variant="primary" className="cta-button" href="#">Shop Now</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAppleAlt} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">1. Nutrient-Dense Superfood</h3>
            <p>
              Spirulina is packed with nutrients, including B vitamins, iron, and essential amino acids. It’s a complete protein source, making it especially beneficial for vegans and vegetarians looking to boost their protein intake naturally.
            </p>
            <Button variant="success" className="cta-button" href="#">Learn More</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSeedling} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">2. Detoxify and Energize</h3>
            <p>
              The detoxifying properties of spirulina help cleanse the body of toxins, while its rich nutrient profile supports increased energy levels. Incorporating spirulina into your daily routine can help you feel more energized and vibrant.
            </p>
            <Button variant="success" className="cta-button" href="#">Discover the Benefits</Button> {/* CPA Link Placeholder */}
          </div>

          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLeaf} className="fa-icon animated-icon" />
            </div>
            <h3 className="blog-subtitle">3. Easy to Incorporate into Your Diet</h3>
            <p>
              Spirulina powder is versatile and easy to add to your daily meals. Blend it into smoothies, mix it into juices, or sprinkle it on salads. It’s an effortless way to boost your nutrition with minimal effort.
            </p>
            <Button variant="success" className="cta-button" href="#">Get Spirulina Now</Button> {/* CPA Link Placeholder */}
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog10;
