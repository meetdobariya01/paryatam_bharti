import React, { useEffect } from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./testimonial.css";

const testimonials = [
  {
    text: "Visiting Hodka through Paryatam Bharti was a life-changing experience. The warm hospitality of the Kutchi people, the beautiful mud houses, and the night under the starry desert sky made me feel truly connected to nature. I never knew rural India had so much beauty and peace!",
    name: "Ramesh Patel",
    location: "Hodka Village, Gujarat",
    img: "./images/testimonial-1.jpg",
    rating: 5,
  },
  {
    text: "Kumarakom’s backwaters are pure magic! Staying with a local family and helping them with traditional cooking was the highlight of my trip. Paryatam Bharti made everything so comfortable and authentic. I felt like part of their home, not just a tourist.",
    name: "Priya Nair",
    location: "Kumarakom Village, Kerala",
    img: "./images/testimonial-2.jpg",
    rating: 4,
  },
  {
    text: "I always wanted to explore India’s cleanest village, and Mawlynnong exceeded my expectations. The people here live so close to nature — no pollution, no noise, just serenity. The bamboo bridges and waterfalls were incredible. A must-visit destination!",
    name: "Arjun Mehta",
    location: "Mawlynnong Village, Meghalaya",
    img: "./images/testimonial-3.jpg",
    rating: 5,
  },
  {
    text: "Khonoma showed me how beautifully traditions and conservation can coexist. The village is breathtaking, and the locals take immense pride in preserving their environment. Traveling here with Paryatam Bharti was both educational and inspiring.",
    name: "Kavita Sharma",
    location: "Khonoma Village, Nagaland",
    img: "./images/testimonial-4.jpg",
    rating: 5,
  },
  {
    text: "As someone who loves Indian crafts, visiting Pochampally was a dream come true. Watching artisans weave intricate ikat patterns right before my eyes was unforgettable. It’s amazing to see how rural tourism is helping preserve such heritage.",
    name: "Amitabh Singh",
    location: "Pochampally Village, Telangana",
    img: "./images/testimonial-5.jpg",
    rating: 4,
  },
  {
    text: "Cherrapunji’s misty hills and lush greenery were straight out of a dream! I loved staying in a small homestay overlooking the valley. The guided treks and local meals made the entire experience authentic and soulful. Highly recommend it!",
    name: "Neha Verma",
    location: "Cherrapunji, Meghalaya",
    img: "./images/testimonial-6.jpg",
    rating: 5,
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = chunkArray(testimonials, 3);
  return (
    <div>
      <div className="testimonial-wrapper position-relative py-5">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold">They Love Travila</h2>
            <p className="text-muted">What our clients are saying about us?</p>
          </motion.div>

          {/* Working Carousel */}
          <Carousel
            indicators={false}
            interval={4000}
            controls
            className="testimonial-carousel"
          >
            {slides.map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="g-4 justify-content-center">
                  {group.map((t, i) => (
                    <Col
                      key={i}
                      lg={4}
                      md={6}
                      sm={12}
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="testimonial-card border-0 rounded-4 shadow-sm p-4">
                          <Card.Body>
                            <h5 className="fw-semibold mb-3">
                              The best booking system
                            </h5>
                            <p className="text-muted small">{t.text}</p>
                            <div className="d-flex align-items-center mt-3">
                              <img
                                src={t.img}
                                alt={t.name}
                                className="rounded-circle me-3"
                                width="45"
                                height="45"
                              />
                              <div>
                                <h6 className="fw-bold mb-0">{t.name}</h6>
                                <small className="text-muted">
                                  {t.location}
                                </small>
                              </div>
                            </div>
                            <div className="mt-2 text-warning fs-5">
                              {"★".repeat(t.rating)}
                              {"☆".repeat(5 - t.rating)}
                            </div>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

        {/* Decorative Elements */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Decor left"
          className="decor-left"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
          alt="Decor right"
          className="decor-right"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Testimonial;
