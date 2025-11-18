import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import "./error.css";
import Footer from "../../components/footer/footer";

const Error = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Error Message Section */}
      <div className="error-page d-flex align-items-center justify-content-center flex-column text-center">
        {/* Animated Airplane */}
        <motion.div
          className="plane-container"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <img src="./images/logo.png" alt="plane" className="plane-img" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          className="display-1 fw-bold text-primary mt-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
        >
          404
        </motion.h1>

        <motion.h4
          className="mt-3 fw-semibold text-dark"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.h4>

        <motion.p
          className="text-muted mt-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          It looks like you’ve taken a wrong turn. Let’s get you back on track!
        </motion.p>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            as={NavLink}
            to="/"
            variant="primary"
            className="px-4 py-2 rounded-pill fw-bold back-home-btn"
          >
            🏠 Back to Home
          </Button>
        </motion.div>

        {/* Decorative Cloud Background */}
        <div className="clouds">
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Error;
