import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

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
];

const Blog = () => {
  return (
    <section id="blog" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>HealthNook Blog</h2>
          <p className="text-muted">Stay informed with our latest articles on health and wellness.</p>
        </div>
        <Row>
          {blogs.map((blog) => (
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
      </Container>
    </section>
  );
};

export default Blog;
