import React from "react";
import { Container, Row, Col, Button, Dropdown, Carousel  } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import "./featuredtour.css";

const Featuredtour = () => {
  const tours = [
    {
      id: 1,
      title: "California Sunset/Twilight Boat Cruise",
      days: "2 days 3 nights",
      guests: "4-6 guest",
      price: "$48.25",
      rating: 4.96,
      reviews: 672,
      tag: "Top Rated",
      image: "./images/featured-place.jpg",
    },
    {
      id: 2,
      title: "NYC: Food Tastings and Culture Tour",
      days: "3 days 3 nights",
      guests: "4-6 guest",
      price: "$17.32",
      rating: 4.96,
      reviews: 672,
      tag: "Best Sale",
      image: "./images/featured-place2.jpg",
    },
    {
      id: 3,
      title: "Grand Canyon Horseshoe Bend 2 days",
      days: "7 days 6 nights",
      guests: "4-6 guest",
      price: "$15.63",
      rating: 4.96,
      reviews: 672,
      tag: "25% Off",
      image: "./images/featured-place3.jpg",
    },
    {
      id: 4,
      title: "California Sunset/Twilight Boat Cruise",
      days: "2 days 3 nights",
      guests: "4-6 guest",
      price: "$48.25",
      rating: 4.96,
      reviews: 672,
      tag: "Top Rated",
      image: "./images/featured-place4.jpg",
    },
    {
      id: 5,
      title: "NYC: Food Tastings and Culture Tour",
      days: "3 days 3 nights",
      guests: "4-6 guest",
      price: "$17.32",
      rating: 4.96,
      reviews: 672,
      tag: "Best Sale",
      image: "./images/featured-place5.jpg",
    },
    {
      id: 6,
      title: "Grand Canyon Horseshoe Bend 2 days",
      days: "7 days 6 nights",
      guests: "4-6 guest",
      price: "$15.63",
      rating: 4.96,
      reviews: 672,
      tag: "25% Off",
      image: "./images/featured-place6.jpg",
    },
  ];
  return (
    <div>
      <section className="featured-tours py-5">
        <Container>
          <div className="text-center mb-3">
            <h2 className="fw-bold display-6">Our Featured Tours</h2>
            <p className="text-muted">
              Favorite destinations based on customer reviews
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="filter-btns mb-4">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-categories">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Adventure</Dropdown.Item>
                <Dropdown.Item>Food & Drink</Dropdown.Item>
                <Dropdown.Item>City Tours</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-duration">Duration</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>1-2 Days</Dropdown.Item>
                <Dropdown.Item>3-5 Days</Dropdown.Item>
                <Dropdown.Item>1 Week+</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-rating">
                Review / Rating
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>4 Stars & Up</Dropdown.Item>
                <Dropdown.Item>Best Reviewed</Dropdown.Item>
                <Dropdown.Item>Newest</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-price">Price Range</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Under $20</Dropdown.Item>
                <Dropdown.Item>$20 - $50</Dropdown.Item>
                <Dropdown.Item>$50+</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* TOUR CARDS */}
          <Row className="g-4">
            {tours.map((tour) => (
              <Col key={tour.id} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="tour-card shadow-sm"
                >
                  <NavLink
                    to={`/tour/${tour.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="tour-img position-relative">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-100"
                      />
                      <span className="badge position-absolute top-0 start-0 m-3 bg-warning text-dark fw-semibold">
                        {tour.tag}
                      </span>
                    </div>

                    <div className="p-3 bg-white">
                      <div className="d-flex align-items-center mb-2 text-warning">
                        <FaStar className="me-1" />
                        <span className="fw-semibold">{tour.rating}</span>
                        <small className="text-muted ms-1">
                          ({tour.reviews} reviews)
                        </small>
                      </div>

                      <h6 className="fw-semibold">{tour.title}</h6>

                      <div className="d-flex text-muted small my-2">
                        <MdAccessTime className="me-1" /> {tour.days}
                        <FaUserFriends className="ms-3 me-1" /> {tour.guests}
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold fs-6">{tour.price}</span>
                        <button className="btn btn-dark btn-sm rounded-pill px-3">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </NavLink>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* LOAD MORE BUTTON */}
          <div className="text-center mt-5">
            <Button className="load-btn rounded-pill px-4 py-2">
              Load More Tours
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Featuredtour;
