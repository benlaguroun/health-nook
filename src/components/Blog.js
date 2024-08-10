import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

// Sample blogs data
const blogs = [
  {
    id: 1,
    image: require('../images/blog1.jpg'),
    title: 'The Benefits of Maintaining a Healthy Diet',
    snippet: 'Discover how a balanced diet can boost your immune system, support weight management, and improve mental health...',
  },
  {
    id: 2,
    image: require('../images/blog2.jpg'),
    title: 'The Importance of Regular Exercise',
    snippet: 'Learn about the various benefits of regular exercise and how it can positively impact your physical and mental health...',
  },
  {
    id: 3,
    image: require('../images/blog3.jpg'),
    title: 'Creating a Balanced Wellness Routine',
    snippet: 'Find out how to create a holistic wellness routine that includes nutrition, exercise, and mindfulness practices...',
  },
  {
    id: 4,
    image: require('../images/blog4.jpg'),
    title: 'Understanding Mental Health',
    snippet: 'Explore the importance of mental health and learn strategies for maintaining emotional well-being...',
  },
  {
    id: 5,
    image: require('../images/blog5.jpg'),
    title: 'The Power of Meditation',
    snippet: 'Discover the benefits of meditation and how it can enhance your overall quality of life...',
  },
  {
    id: 6,
    image: require('../images/blog6.jpg'),
    title: 'Healthy Eating on a Budget',
    snippet: 'Get tips on how to eat healthy while staying within your budget, including meal planning and smart shopping strategies...',
  },
  {
    id: 7,
    image: require('../images/blog7.jpg'),
    title: 'Fitness Trends to Watch',
    snippet: 'Stay updated with the latest fitness trends and find out which ones might be right for you...',
  },
  {
    id: 8,
    image: require('../images/blog8.jpg'),
    title: 'The Benefits of Hydration',
    snippet: 'Learn about the importance of staying hydrated and how it impacts your overall health...',
  },
];

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="blog" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Peaks-Picks Blog</h2>
          <p className="text-muted">Stay informed with our latest articles on health and wellness.</p>
        </div>
        <Row>
          {blogs.slice(0, showAll ? blogs.length : 6).map((blog) => (
            <Col md={4} key={blog.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={blog.image} alt={blog.title} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.snippet}</Card.Text>
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button 
            variant="secondary" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More Blogs'}
          </Button>
        </div>
        <div className="text-center mt-4">
          {showAll && (
            <Link to="/all-blogs">
              <Button variant="primary">View All Blogs</Button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
