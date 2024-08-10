import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllBlogs.css'; // Custom CSS file for AllBlogs

const blogs = [
  // (Include the same blogs data here)
];

const AllBlogs = () => {
  return (
    <section id="all-blogs" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>All Blog Posts</h2>
          <p className="text-muted">Browse through all our articles on health and wellness.</p>
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

export default AllBlogs;
