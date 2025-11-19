import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import "./contactus.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Contactus = () => {
  return (
    <div>
      {/* Header section */}
      <Header />

      <section className="contact-section text-white py-5 position-relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="animated-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>

        <Container className="position-relative z-3">
          {/* Header Section */}
          <motion.div
            className="text-center mb-5"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold mb-3 text-warning">
              Connect With Rural India
            </h1>
            <p className="lead mx-auto w-75">
              Step into the heart of India’s countryside. Whether you're looking
              to book a rustic village stay, experience a local festival, or
              simply explore untouched beauty — our team is here to guide your
              journey. Let us help you design a personalized travel experience
              that celebrates simplicity, culture, and tradition.
            </p>
          </motion.div>

          <Row className="gy-5 align-items-stretch">
            {/* Left Section: Info */}
            <Col md={5}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="contact-info h-100 p-4 rounded-4 shadow-lg bg-gradient"
              >
                <h3 className="fw-bold mb-4 text-warning">
                  Our Contact Details
                </h3>
                <p className="mb-4">
                  Our doors are always open to travelers, storytellers, and
                  those who wish to experience the roots of India. You can reach
                  us at our main office or through any of the following
                  channels.
                </p>

                <div className="d-flex align-items-start mb-4">
                  <FaMapMarkerAlt className="me-3 fs-4 text-warning" />
                  <div>
                    <h5>Head Office</h5>
                    <p>
                      Rural Routes Travel Pvt. Ltd. <br />
                      Shanti Niwas, Near Greenfield Road, Anand, Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaPhoneAlt className="me-3 fs-4 text-warning" />
                  <div>
                    <h5>Phone Support</h5>
                    <p>
                      +91 98765 43210 <br />
                      +91 91234 56789
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaEnvelope className="me-3 fs-4 text-warning" />
                  <div>
                    <h5>Email Us</h5>
                    <p>
                      info@ruralroutes.in <br />
                      support@ruralroutes.in
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaClock className="me-3 fs-4 text-warning" />
                  <div>
                    <h5>Working Hours</h5>
                    <p>Monday - Saturday: 9:00 AM to 7:00 PM</p>
                  </div>
                </div>

                <motion.div
                  className="mt-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="warning"
                    size="lg"
                    className="fw-bold text-dark rounded-pill px-5 py-3 shadow-sm"
                    href="tel:+919876543210"
                  >
                    Call Now
                  </Button>
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Section: Form */}
            <Col md={7}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Card className="border-0 shadow-lg p-4 rounded-4 bg-light">
                  <Card.Body>
                    <h3 className="fw-bold text-center mb-4 text-dark">
                      Send Us a Message
                    </h3>
                    <p className="text-center text-muted mb-4">
                      Have questions about tours, rural homestays, or cultural
                      events? Share your query below, and our travel experts
                      will get back to you within 24 hours.
                    </p>
                    <Form>
                      <Row className="gy-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter your email"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your number"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Tour Type</Form.Label>
                            <Form.Select>
                              <option>Select Tour Type</option>
                              <option>Village Experience</option>
                              <option>Farm Stay</option>
                              <option>Tribal Art & Culture</option>
                              <option>Eco Retreat</option>
                              <option>Spiritual Journey</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={6}
                              placeholder="Tell us about your travel plans..."
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12} className="text-center">
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <Button
                              variant="warning"
                              size="lg"
                              type="submit"
                              className="mt-3 fw-bold text-dark rounded-pill px-5 py-3 shadow-sm"
                            >
                              Submit Inquiry
                            </Button>
                          </motion.div>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Google Map Section */}
          <motion.div
            className="mt-5 map-container shadow-lg overflow-hidden rounded-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.485877338349!2d72.92758627516249!3d22.99790737919561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f9671f7e55%3A0x8a05eae299bb8b3!2sAnand%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1693423892264!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </Container>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contactus;
