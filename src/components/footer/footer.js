import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <footer className="footer-section text-light pt-5">
        <Container>
          <Row className="gy-4">
            {/* Logo and Info */}
            <Col lg={4} md={6} data-aos="fade-right">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="./images/logo.png"
                    alt="Travila"
                    width="100"
                    height="100"
                    className="me-2"
                  />
                  {/* <h5 className="fw-bold text-white mb-0">Travila</h5>   */}
                </div>
                <p className="small text-secondary">
                  Dive into local recommendations for a truly authentic
                  experience.
                </p>

                <ul className="list-unstyled small mt-3 text-secondary">
                  <li className="mb-2">
                    <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-clock-fill me-2 text-warning"></i>
                    Hours: 8:00 - 17:00, Mon - Sat
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill me-2 text-warning"></i>
                    support@travila.com
                  </li>
                </ul>
              </motion.div>
            </Col>

            {/* Company Links */}
            <Col lg={2} md={3} sm={6} data-aos="fade-up">
              <h6 className="fw-semibold text-white mb-3">Company</h6>

              <ul className="list-unstyled small text-secondary">
                <li>
                  <NavLink
                    to="/aboutus"
                    className="text-light text-decoration-none"
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/blog"
                    className="text-light text-decoration-none"
                  >
                    Community Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/careers"
                    className="text-light text-decoration-none"
                  >
                    Jobs & Careers
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contactus"
                    className="text-light text-decoration-none"
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/awards"
                    className="text-light text-decoration-none"
                  >
                    Our Awards
                  </NavLink>
                </li>
              </ul>
            </Col>

            {/* Services */}
            <Col lg={2} md={3} sm={6} data-aos="fade-up" data-aos-delay="100">
              <h6 className="fw-semibold text-white mb-3">Services</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Tour Guide</li>
                <li>Tour Booking</li>
                <li>Hotel Booking</li>
                <li>Ticket Booking</li>
                <li>Rental Services</li>
              </ul>
            </Col>

            {/* Newsletter */}
            <Col lg={4} md={12} data-aos="fade-left">
              <h6 className="fw-semibold text-white mb-3">Newsletter</h6>
              <div className="newsletter-form d-flex align-items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control rounded-pill me-2"
                />
                <button className="btn btn-warning rounded-pill fw-semibold px-4">
                  Subscribe
                </button>
              </div>
            </Col>
          </Row>

          {/* CTA Panel */}
          <Row className="mt-5">
            <Col>
              <motion.div
                className="cta-panel d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start p-4 rounded-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-telephone-outbound fs-1 text-warning"></i>
                  <div>
                    <p className="mb-0 small text-secondary">
                      Need help? Call us
                    </p>
                    <h5 className="mb-0 text-white">1-800-222-8888</h5>
                  </div>
                </div>

                <div className="divider my-3 my-lg-0"></div>

                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-person-plus-fill fs-1 text-warning"></i>
                  <div>
                    <h6 className="text-white mb-1">
                      Join Travila Affiliate Program Today!
                    </h6>
                  </div>
                </div>

                <div className="divider my-3 my-lg-0"></div>

                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-chat-dots-fill fs-1 text-warning"></i>
                  <div>
                    <h6 className="text-white mb-1">Send us a message</h6>
                    <p className="small text-secondary mb-0">
                      Contact our agents about your booking and we’ll reply
                      ASAP.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Bottom Bar */}
          <Row className="align-items-center mt-4 pt-3 border-top border-secondary">
            <Col
              md={6}
              className="text-center text-md-start small text-secondary"
            >
              © 2024 Travila Inc. All rights reserved.
            </Col>
            <Col
              md={6}
              className="text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center gap-3"
            >
              <span className="text-white small">Follow us</span>
              <div className="social-icons d-flex gap-2">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
