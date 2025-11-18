import React, { useEffect } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Header from "../../components/header/header";
import Herosection from "../../components/herosection/herosection";
import Destinations from "../../components/destinations/destinations";
import Featuredtour from "../../components/featured-tour/featuredtour";
import Testimonial from "../../components/testimonial/testimonial";
import Popularplace from "../../components/popularplace/popularplace";
import Footer from "../../components/footer/footer";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <Herosection />

      {/* Destinations Component */}
      <Destinations />

      {/* Featured Tours Component */}
      <Featuredtour />

      {/* Additional sections can be added here */}
      <div className="tour-wrapper">
        {/* ====== Carousel Section ====== */}
        <img
          src="./images/poster.png"
          alt="Travel Destination"
          className="w-100 rounded"
          style={{ height: "auto" }}
        />

        {/* ====== How It Works Section ====== */}
        <Container className="how-it-work text-center my-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="fw-bold">How It Work?</h2>
            <p className="text-muted">
              Competitive fares for your route-specific searches.
            </p>
          </motion.div>

          <Row className="align-items-start gy-4 mt-5">
            {/* Left Side Images */}
            <Col lg={6} md={12}>
              <Row className="g-4">
                <Col xs={12} data-aos="fade-right">
                  <motion.img
                    src="./images/work-section.jpg"
                    className="img-fluid rounded-4 shadow-sm main-img"
                    alt="Travel group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                </Col>
                <Col xs={6} data-aos="fade-up">
                  <motion.img
                    src="./images/work-section-2.jpg"
                    className="img-fluid rounded-4 shadow-sm small-img"
                    alt="Suitcase"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </Col>
                <Col xs={6} data-aos="fade-up" data-aos-delay="150">
                  <motion.img
                    src="./images/work-section-3.jpg"
                    className="img-fluid rounded-4 shadow-sm small-img"
                    alt="Plane"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </Col>
              </Row>
            </Col>

            {/* Right Side Cards */}
            <Col lg={6} md={12}>
              <motion.div
                className="info-card pink-card p-4 rounded-4 text-start shadow-sm mb-4"
                data-aos="fade-left"
              >
                <div className="d-flex align-items-start">
                  <div className="icon me-3 bg-white rounded-circle p-2 shadow-sm">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/854/854929.png"
                      width="28"
                      alt="icon"
                    />
                  </div>
                  <div>
                    <h5 className="fw-bold">Find Your Destination</h5>
                    <p className="text-muted small mb-2">
                      Choose your destination based on weather, activities, and
                      budget. Check travel advisories, visa requirements, and
                      safety concerns.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 text-primary fw-semibold"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="info-card cyan-card p-4 rounded-4 text-start shadow-sm mb-4"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <div className="d-flex align-items-start">
                  <div className="icon me-3 bg-white rounded-circle p-2 shadow-sm">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                      width="28"
                      alt="icon"
                    />
                  </div>
                  <div>
                    <h5 className="fw-bold">Book a Ticket</h5>
                    <p className="text-muted small mb-2">
                      Choose reputable platforms or book directly. Read reviews
                      and understand cancellation policies.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 text-primary fw-semibold"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="info-card blue-card p-4 rounded-4 text-start shadow-sm"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-start">
                  <div className="icon me-3 bg-white rounded-circle p-2 shadow-sm">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
                      width="28"
                      alt="icon"
                    />
                  </div>
                  <div>
                    <h5 className="fw-bold">Pay and Go</h5>
                    <p className="text-muted small mb-2">
                      Ensure secure transactions. Save and print confirmation
                      emails. Consider travel insurance for unforeseen events.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 text-primary fw-semibold"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonial Component - Can be added here */}
      <Testimonial />

      {/* New Sections can be added similarly */}
      <section className="home-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col
              lg={6}
              md={12}
              className="text-section mb-5 mb-lg-0"
              data-aos="fade-right"
            >
              <span className="badge bg-light text-dark px-3 py-2 rounded-pill shadow-sm mb-3">
                Easy payment
              </span>
              <h1 className="fw-bold mb-4">
                Discover Dream <br /> Destinations with{" "}
                <span className="text-primary">Ease</span>
              </h1>

              <ul className="list-unstyled fs-5 mb-4">
                <li className="mb-2">✅ Security Assurance</li>
                <li className="mb-2">✅ Customer Support</li>
                <li className="mb-2">✅ Transparent Policies</li>
                <li className="mb-2">✅ Reputable Affiliations</li>
              </ul>

              <div className="payment-logos d-flex gap-3 flex-wrap">
                <img src="./images/paypal.png" alt="PayPal" className="w-25" />
                <img src="./images/stripe.png" alt="Stripe" className="w-25" />
                <img src="./images/skrill.png" alt="Skrill" className="w-25" />
              </div>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg={6} md={12} data-aos="fade-left">
              <div className="video-container">
                <video
                  src="./images/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-100 rounded shadow video-box"
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Popular Places Component can be added here */}
      <Popularplace />

      {/* Poster Section */}
      <div className="text-center">
        <NavLink to="/contactus">
          <img
            src="./images/poster-2.png"
            alt="Indian Village"
            className="img-fluid rounded shadow my-5"
            style={{ width: "auto", height: "auto" }}
          />
        </NavLink>
      </div>

      {/* Footer Component can be added here */}
      <Footer />
    </div>
  );
};

export default Home;
