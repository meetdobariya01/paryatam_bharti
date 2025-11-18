import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaStar, FaSearch, FaPhoneAlt } from "react-icons/fa";
import "./herosection.css";

const Herosection = () => {
  return (
    <div>
      <section className="hero-section position-relative overflow-hidden">
        <Container className="py-5">
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col lg={6} className="text-center text-lg-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button className="explore-btn mb-3 px-4 py-2 rounded-pill fw-semibold">
                  🏠 Explore the Rural
                </Button>

                <h1 className="display-5 fw-bold text-dark">
                  Unveil the Beauty of the World Every Day
                </h1>

                <p className="text-muted mt-3 mb-4">
                  Travel Without Limits — Browse, Book, Explore the most
                  breathtaking destinations around the globe.
                </p>

                {/* Review + Help */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="d-flex align-items-center">
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning" />
                    <span className="fw-semibold ms-2">5.0 Stars</span>
                    <span className="text-muted ms-2">69K Reviews</span>
                  </div>
                  <span className="help-text ms-3">Need some help?</span>
                </div>

                {/* Booking Box */}
                <motion.div
                  className="booking-box shadow rounded-4 p-4 bg-white"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {/* Tabs */}
                  <div className="booking-tabs mb-4 d-flex justify-content-around">
                    {["Tours", "Hotels", "Tickets", "Rental", "Activities"].map(
                      (tab, i) => (
                        <button
                          key={i}
                          className={`tab-btn ${
                            i === 0 ? "active" : ""
                          } rounded-pill px-3 py-2`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>

                  {/* Form */}
                  <Row className="g-3 align-items-end">
                    <Col md={5}>
                      <Form.Label className="fw-semibold text-muted">
                        Location
                      </Form.Label>
                      <Form.Select>
                        <option>Mawlynnong, Meghalaya</option>
                        <option>Khonoma, Nagaland</option>
                        <option>Hodka, Gujarat</option>
                        <option>Poovar, Kerala</option>
                        <option>Chopta, Uttarakhand</option>
                        <option>Mandawa, Rajasthan</option>
                        <option>Shani Shingnapur, Maharashtra</option>
                        <option>Raghurajpur, Odisha</option>
                        <option>Diskit, Ladakh</option>
                      </Form.Select>
                    </Col>
                    <Col md={5}>
                      <Form.Label className="fw-semibold text-muted">
                        Check In
                      </Form.Label>
                      <Form.Control type="date" />
                    </Col>
                    <Col md={2} className="text-center">
                      <Button className="search-btn rounded-circle p-3">
                        <FaSearch />
                      </Button>
                    </Col>
                  </Row>
                </motion.div>

                {/* Hotline */}
                <motion.div
                  className="hotline mt-4 d-flex align-items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="hotline-icon d-flex align-items-center justify-content-center">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="mb-0 text-muted small">Hotline Booking</p>
                    <h5 className="fw-bold mb-0">+1 800-222-8888</h5>
                  </div>
                </motion.div>
              </motion.div>
            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col
              lg={6}
              className="text-center position-relative mt-5 mt-lg-0 hero-image-container"
            >
              <motion.img
                src="./images/hero-section.jpg"
                alt="Traveler"
                className="img-fluid hero-img"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Herosection;
