import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "react-bootstrap";
import "./faqs.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Faqs = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      <div className="faq-wrapper py-5">
        <div className="container">
          {/* Page Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center fw-bold faq-title"
          >
            FAQs – Paryatam Bharti
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-muted mb-5 faq-subtitle"
          >
            Find answers to commonly asked questions about our Rural Tourism
            services.
          </motion.p>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Accordion defaultActiveKey="0" className="faq-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Paryatam Bharti?</Accordion.Header>
                <Accordion.Body>
                  Paryatam Bharti is a rural tourism platform dedicated to
                  providing authentic village experiences, showcasing local
                  culture, food, and traditions of Indian rural destinations.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What experiences do you offer?
                </Accordion.Header>
                <Accordion.Body>
                  We offer a variety of rural experiences such as farm visits,
                  village walks, handicraft workshops, local food tasting,
                  cultural performances, and eco-friendly stays.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How can I book a rural tour?
                </Accordion.Header>
                <Accordion.Body>
                  You can explore tours on our website and book directly through
                  the tour details page. We also provide custom itineraries
                  based on your preferences.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Is rural tourism safe for families?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Our rural tourism experiences are safe, family-friendly,
                  and guided by trained locals committed to providing a warm and
                  secure environment.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Do you offer group or corporate packages?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely! We provide personalized group tours, school trips,
                  corporate outings, and educational rural exposure tours.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Faqs;
