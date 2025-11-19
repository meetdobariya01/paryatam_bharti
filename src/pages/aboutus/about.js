import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const About = () => {
  return (
    <div>
      {/* Header can be added here if needed */}
      <Header />

      <section className="about-section text-dark py-5 position-relative overflow-hidden">
        <div className="animated-bg"></div>

        <div className="container position-relative z-2">
          {/* ===================== INTRO ===================== */}
          <div className="row align-items-center mb-5">
            <motion.div
              className="col-lg-6 mb-4 mb-lg-0"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="./images/aboutus.jpg"
                alt="Rural India Landscape"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="fw-bold display-5 mb-3 text-primary">
                About Rural Routes
              </h1>
              <p className="lead text-muted">
                Welcome to <strong>Rural Routes</strong> — where every journey
                takes you beyond the map and into the heart of India’s villages.
                We’re more than a travel company; we’re a movement to rediscover
                the beauty of simplicity, authenticity, and community-driven
                experiences.
              </p>
              <p>
                Born from a love for India’s countryside,{" "}
                <strong>Rural Routes</strong> connects travelers to the
                heartbeat of the nation — the people, the traditions, and the
                landscapes that define rural life. Every tour we curate
                celebrates sustainability, storytelling, and soul.
              </p>
            </motion.div>
          </div>

          {/* ===================== OUR STORY ===================== */}
          <motion.div
            className="row py-5 align-items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img
                src="./images/aboutus-2.jpg"
                alt="Village Experience"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="fw-bold text-primary mb-3">Our Story</h2>
              <p>
                It all began when a small group of travelers realized that true
                peace wasn’t found in luxury hotels or crowded resorts — it was
                found in the laughter of farmers, the rhythm of bullock carts,
                and the aroma of freshly cooked rotis on a chulha.
              </p>
              <p>
                We wanted others to experience this magic. So, we started
                partnering with local families, village councils, and artisans
                to create tours that would let visitors live rural life — not
                just observe it. Today, we’re proud to bring the soul of the
                countryside to curious explorers from all over the world.
              </p>
            </div>
          </motion.div>

          {/* ===================== OUR MISSION & VALUES ===================== */}
          <motion.div
            className="row py-5"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                <h3 className="fw-bold text-primary mb-3">Our Mission</h3>
                <p>
                  To make rural India a global travel destination by promoting
                  authentic, community-based tourism that benefits both
                  travelers and locals. Our mission is to provide immersive,
                  respectful, and sustainable travel experiences that uplift the
                  communities we visit.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                <h3 className="fw-bold text-primary mb-3">Our Values</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    🌿 <strong>Sustainability:</strong> Travel that protects
                    nature and culture.
                  </li>
                  <li className="mb-2">
                    🤝 <strong>Community:</strong> Empowering rural families
                    through tourism.
                  </li>
                  <li className="mb-2">
                    💚 <strong>Authenticity:</strong> Real stories, real
                    experiences, no filters.
                  </li>
                  <li>
                    🌎 <strong>Responsibility:</strong> Every trip leaves a
                    positive footprint.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ===================== WHAT WE OFFER ===================== */}
          <motion.div
            className="row py-5 align-items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="./images/aboutus-3.jpg"
                alt="Cultural Travel"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold text-primary mb-3">What We Offer</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  🏡 <strong>Village Homestays:</strong> Stay with warm-hearted
                  families, share meals, and learn rural traditions.
                </li>
                <li className="mb-3">
                  🧺 <strong>Handicraft Workshops:</strong> Try your hand at
                  pottery, weaving, and traditional art forms.
                </li>
                <li className="mb-3">
                  🚜 <strong>Farm Life Tours:</strong> Experience ploughing
                  fields, milking cows, and organic farming firsthand.
                </li>
                <li className="mb-3">
                  🪔 <strong>Festive Journeys:</strong> Celebrate harvest
                  festivals, local fairs, and folk performances.
                </li>
                <li>
                  🌾 <strong>Eco Retreats:</strong> Stay in eco-friendly
                  cottages surrounded by nature and tranquility.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ===================== IMPACT SECTION ===================== */}
          <motion.div
            className="py-5 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="fw-bold text-primary mb-4">Our Impact So Far</h2>
            <div className="row justify-content-center">
              <div className="col-md-3 col-6 mb-4">
                <h3 className="display-5 fw-bold text-success">120+</h3>
                <p className="text-muted">Villages Connected</p>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <h3 className="display-5 fw-bold text-success">2500+</h3>
                <p className="text-muted">Travelers Hosted</p>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <h3 className="display-5 fw-bold text-success">300+</h3>
                <p className="text-muted">Local Jobs Created</p>
              </div>
            </div>
          </motion.div>

          {/* ===================== OUR TEAM ===================== */}
          <motion.div
            className="py-5"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-center fw-bold text-primary mb-5">
              Meet Our Team
            </h2>
            <div className="row text-center">
              {[
                {
                  name: "Arjun Mehta",
                  role: "Founder & Explorer",
                  img: "https://randomuser.me/api/portraits/men/41.jpg",
                },
                {
                  name: "Kavita Singh",
                  role: "Cultural Curator",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Rohit Sharma",
                  role: "Operations Head",
                  img: "https://randomuser.me/api/portraits/men/47.jpg",
                },
              ].map((member, i) => (
                <div key={i} className="col-md-4 mb-4">
                  <div className="team-card bg-light rounded-4 p-4 shadow-sm">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle mb-3 shadow-lg team-img"
                    />
                    <h5 className="fw-bold">{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===================== CTA ===================== */}
          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="fw-bold text-primary mb-3">Travel with Purpose</h2>
            <p className="lead text-muted mb-4">
              Each journey you take with us contributes to preserving the
              traditions, art, and culture of rural India. Join us in rewriting
              the story of responsible travel.
            </p>
            <a
              href="/contactus"
              className="btn btn-primary btn-lg rounded-pill shadow-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
