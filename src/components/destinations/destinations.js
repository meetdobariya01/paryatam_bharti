import React from "react";
import { motion } from "framer-motion";
import { Carousel, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./destinations.css";

const destinations = [
  {
    name: "Eiffel Tower",
    image: "./images/logo.png",
    link: "/destination/eiffel",
  },
  {
    name: "Machu Picchu",
    image: "./images/logo.png",
    link: "/destination/machu",
  },
  {
    name: "Great Wall",
    image: "./images/logo.png",
    link: "/destination/greatwall",
  },
  {
    name: "Statue of Liberty",
    image: "./images/logo.png",
    link: "/destination/liberty",
  },
  {
    name: "Taj Mahal",
    image: "./images/logo.png",
    link: "/destination/tajmahal",
  },
  {
    name: "Opera House",
    image: "./images/logo.png",
    link: "/destination/opera",
  },
  {
    name: "Colosseum",
    image: "./images/logo.png",
    link: "/destination/colosseum",
  },
  {
    name: "Grand Canyon",
    image: "./images/logo.png",
    link: "/destination/canyon",
  },
   {
    name: "Colosseum",
    image: "./images/logo.png",
    link: "/destination/colosseum",
  },
  {
    name: "Grand Canyon",
    image: "./images/logo.png",
    link: "/destination/canyon",
  },
  
];

const Destinations = () => {
  const chunkSize = 5;
  const slides = Array.from(
    { length: Math.ceil(destinations.length / chunkSize) },
    (_, i) => destinations.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
  return (
    <div>
      <section className="popular-destinations py-5 text-center">
        <Container>
          <motion.h2
            className="fw-bold display-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Popular Destinations
          </motion.h2>
          <motion.p
            className="text-muted mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Navigate the Globe with Confidence
          </motion.p>

          <Carousel
            indicators={false}
            controls={true}
            interval={3000}
            pause="hover"
            className="destination-carousel"
          >
            {slides.map((group, index) => (
              <Carousel.Item key={index}>
                <motion.div
                  className="d-flex justify-content-center flex-wrap gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {group.map((item, i) => (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={i}
                      className="destination-card text-center"
                    >
                      <NavLink
                        to={item.link}
                        className="text-decoration-none text-dark"
                      >
                        <div className="image-container mb-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="destination-img"
                          />
                        </div>
                        <h5 className="fw-semibold">{item.name}</h5>
                        <p className="text-muted small">356 Tours</p>
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default Destinations;
