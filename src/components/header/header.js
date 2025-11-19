import React, { useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  const [showTourism, setShowTourism] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar
          expand="lg"
          bg="light"
          className="shadow-sm py-3 sticky-top animated-header"
        >
          <Container>
            <Navbar.Brand
              as={NavLink}
              to="/"
              className="fw-bold fs-3 brand-text"
            >
              <img
                src="./images/logo.png"
                alt="Tour Logo"
                className="logo-img me-2"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="mainNavbar" />

            <Navbar.Collapse id="mainNavbar">
              <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link as={NavLink} to="/" className="nav-item-custom">
                  Home
                </Nav.Link>
               
                <Nav.Link
                  as={NavLink}
                  to="/accommodation"
                  className="nav-item-custom"
                >
                  Eco-tourism
                </Nav.Link>
                 <Nav.Link
                  as={NavLink}
                  to="/accommodation"
                  className="nav-item-custom"
                >
                  Sport-tourism
                </Nav.Link>
                 <Nav.Link
                  as={NavLink}
                  to="/discover-india"
                  className="nav-item-custom"
                >
                  Heritage-tourism
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/tourism"
                  className="nav-item-custom"
                >
                  Wildlife-Tourism
                </Nav.Link>
                <Nav.Link as={NavLink} to="/faqs" className="nav-item-custom">
                  FAQS
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/aboutus"
                  className="nav-item-custom"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contactus"
                  className="nav-item-custom"
                >
                  Contact
                </Nav.Link>
              </Nav>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as={NavLink}
                  to="/login"
                  variant="primary"
                  className="px-4 py-2 rounded-pill login-btn"
                >
                  Login
                </Button>
              </motion.div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </div>
  );
};

export default Header;
