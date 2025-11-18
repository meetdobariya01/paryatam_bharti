import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./popularplace.css";

const spots = [
  { id: 1, name: "Venice", image: "./images/featured-place.jpg" },
  { id: 2, name: "New York", image: "./images/featured-place5.jpg" },
  { id: 3, name: "Amsterdam", image: "./images/featured-place4.jpg" },
  { id: 4, name: "Budapest", image: "./images/featured-place2.jpg" },
  { id: 5, name: "Lisbon", image: "./images/featured-place.jpg" },
  { id: 6, name: "London", image: "./images/featured-place6.jpg" },
  { id: 7, name: "Ottawa", image: "./images/featured-place3.jpg" },
  { id: 8, name: "Paris", image: "./images/featured-place.jpg" },
];

const Popularplace = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div>
      <section className="popular-spots py-5">
        <Container>
          {/* Title */}
          <div className="text-center mb-4" data-aos="fade-down">
            <h2 className="fw-bold">Popular Spots</h2>
            <p className="text-muted">
              Dare to live the life you’ve always wanted
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="d-flex flex-wrap justify-content-center gap-3 mb-5"
            data-aos="fade-up"
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="rounded-pill shadow-sm"
              >
                Categories
              </Dropdown.Toggle>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="rounded-pill shadow-sm"
              >
                Duration
              </Dropdown.Toggle>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="rounded-pill shadow-sm"
              >
                Review / Rating
              </Dropdown.Toggle>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="rounded-pill shadow-sm"
              >
                Price Range
              </Dropdown.Toggle>
            </Dropdown>
          </div>

          {/* Cards Grid */}
          <Row className="g-4">
            {spots.map((spot, index) => (
              <Col
                key={spot.id}
                lg={3}
                md={4}
                sm={6}
                xs={6}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Card className="spot-card shadow-sm border-0">
                  <div className="img-container">
                    <Card.Img
                      variant="top"
                      src={spot.image}
                      alt={spot.name}
                      className="rounded"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">{spot.name}</Card.Title>
                    <Card.Text className="text-muted small">
                      356 Tours, 248 Activities
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Popularplace;
