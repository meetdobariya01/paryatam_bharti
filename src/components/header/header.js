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
                <NavDropdown
                  title="Discover India"
                  id="discover-dropdown"
                  className="nav-item-custom mega-menu-wrapper"
                  show={showDiscover}
                  onMouseEnter={() => setShowDiscover(true)}
                  onMouseLeave={() => setShowDiscover(false)}
                >
                  <div className="mega-menu-container">
                    <div className="mega-column">
                      <h6>Northern India</h6>
                      <NavDropdown.Item as={NavLink} to="/north/jammu-kashmir">
                        Jammu & Kashmir
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/north/himachal">
                        Himachal Pradesh
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/north/punjab">
                        Punjab
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/north/uttarakhand">
                        Uttarakhand
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/north/delhi">
                        Delhi
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Southern India</h6>
                      <NavDropdown.Item as={NavLink} to="/south/kerala">
                        Kerala
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/south/tamil-nadu">
                        Tamil Nadu
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/south/karnataka">
                        Karnataka
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/south/andhra-pradesh">
                        Andhra Pradesh
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/south/telangana">
                        Telangana
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Eastern India</h6>
                      <NavDropdown.Item as={NavLink} to="/east/west-bengal">
                        West Bengal
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/east/odisha">
                        Odisha
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/east/bihar">
                        Bihar
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/east/jharkhand">
                        Jharkhand
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Western India</h6>
                      <NavDropdown.Item as={NavLink} to="/west/rajasthan">
                        Rajasthan
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/west/gujarat">
                        Gujarat
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/west/goa">
                        Goa
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/west/maharashtra">
                        Maharashtra
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>North-Eastern India</h6>
                      <NavDropdown.Item as={NavLink} to="/ne/assam">
                        Assam
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/ne/sikkim">
                        Sikkim
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/ne/meghalaya">
                        Meghalaya
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/ne/nagaland">
                        Nagaland
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Union Territories</h6>
                      <NavDropdown.Item as={NavLink} to="/ut/ladakh">
                        Ladakh
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/ut/andaman">
                        Andaman & Nicobar
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/ut/chandigarh">
                        Chandigarh
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/ut/daman-diu">
                        Daman & Diu
                      </NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>

                {/* TOURISM DROPDOWN */}
                <NavDropdown
                  title="Tourism"
                  id="tourism-dropdown"
                  className="nav-item-custom mega-menu-wrapper"
                  show={showTourism}
                  onMouseEnter={() => setShowTourism(true)}
                  onMouseLeave={() => setShowTourism(false)}
                >
                  <div className="mega-menu-container">
                    <div className="mega-column">
                      <h6>Packages</h6>
                      <NavDropdown.Item as={NavLink} to="/event-management">
                        Event Management
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/yoga-ayurveda">
                        Yoga & Ayurveda
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/destination-wedding">
                        Destination Wedding
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/honeymoon">
                        Honeymoon
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Tour Types</h6>
                      <NavDropdown.Item as={NavLink} to="/leisure">
                        Leisure Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/eco">
                        Eco-tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/education">
                        Educational Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/heritage">
                        Heritage Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/wildlife">
                        Wildlife Tourism
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Specialty Tours</h6>
                      <NavDropdown.Item as={NavLink} to="/business">
                        Business Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/food-wine">
                        Food & Wine Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/sustainable">
                        Sustainable Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/religious">
                        Religious Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/cruise">
                        Cruise Tourism
                      </NavDropdown.Item>
                    </div>

                    <div className="mega-column">
                      <h6>Adventure & More</h6>
                      <NavDropdown.Item as={NavLink} to="/adventure">
                        Adventure Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/medical">
                        Medical Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/urban">
                        Urban Tourism
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/tribal">
                        Tribal Tourism
                      </NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>

                <Nav.Link
                  as={NavLink}
                  to="/accommodation"
                  className="nav-item-custom"
                >
                  Accommodation
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/transportation"
                  className="nav-item-custom"
                >
                  Transportation
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
