import React, { useState } from "react";
import {
  Container,
  Row,
  Breadcrumb,
  Tab,
  Tabs,
  Form,
  Button,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-bootstrap";
// import { HouseFill } from "react-bootstrap-icons";
import "./discoverindia.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const attractions = [
  {
    id: 1,
    title: "Junagarh Fort, Bikaner",
    img: "./images/popular-india.jpg",
    short: "Junagarh Fort, Bikaner, is a stunning 16th-century...",
    full: "Junagarh Fort is an architectural masterpiece built in the late 16th century. It is one of the few major forts in Rajasthan that is not built on a hill. Inside, it features palaces, temples, pavilions, and rich art from various eras.",
  },
  {
    id: 2,
    title: "Keoladeo National Park, Bharatpur",
    img: "./images/popular-india-2.jpg",
    short: "Keoladeo National Park, a UNESCO World Heritage Si...",
    full: "Keoladeo National Park is one of the world's most important bird sanctuaries. It hosts over 350 species of birds including migratory species from as far as Siberia and Central Asia.",
  },
  {
    id: 3,
    title: "Hawa Mahal",
    img: "./images/popular-india-3.jpg",
    short: "An architectural marvel, Hawa Mahal features a font...",
    full: "Hawa Mahal, also known as the 'Palace of Winds,' was built in 1799. With 953 small windows (jharokhas), it allowed royal women to observe street festivals without being seen.",
  },
];
const faqData = [
  {
    id: "Q1",
    question: "When is the best time to visit Rajasthan?",
    answer:
      "The best time to visit Rajasthan is from October to March when the weather is pleasant.",
  },
  {
    id: "Q2",
    question: "What is the best way to travel to Rajasthan?",
    answer:
      "You can reach Rajasthan by air, train, or road. Jaipur, Udaipur, and Jodhpur have major airports.",
  },
  {
    id: "Q3",
    question: "Is Rajasthan safe for solo women travelers?",
    answer:
      "Yes, Rajasthan is generally safe. Stick to tourist-friendly areas and basic safety guidelines.",
  },
  {
    id: "Q4",
    question: "What are the must-try dishes in Rajasthan?",
    answer:
      "Dal Baati Churma, Ghevar, Laal Maas, and Ker Sangri are must-try foods.",
  },
  {
    id: "Q5",
    question: "Why book Rajasthan tour packages with us?",
    answer:
      "We offer curated tours, experienced guides, 24/7 support, and best-price guarantees.",
  },
  {
    id: "Q6",
    question: "How many days are required to visit Rajasthan?",
    answer:
      "A 5–10 day trip is ideal to explore major destinations comfortably.",
  },
  {
    id: "Q7",
    question: "Are camel safaris available in Rajasthan?",
    answer:
      "Yes, camel safaris are available in Jaisalmer, Bikaner, and Pushkar.",
  },
];

const places = [
  {
    id: 1,
    title: "Jaipur",
    img: "./images/work-section.jpg",
    short: "Known for its royal palaces, forts, and bustling bazaars.",
    full: "Jaipur, the Pink City, is famous for Hawa Mahal, Amber Fort, City Palace, vibrant markets, and rich Rajasthani culture.",
  },
  {
    id: 2,
    title: "Udaipur",
    img: "./images/work-section-2.jpg",
    short: "The romantic city of lakes with stunning palaces.",
    full: "Udaipur offers Lake Pichola, City Palace, boat rides, historic temples, scenic viewpoints, and luxury stays.",
  },
  {
    id: 3,
    title: "Jodhpur",
    img: "./images/work-section-3.jpg",
    short: "The Blue City, famous for Mehrangarh Fort.",
    full: "Jodhpur features blue houses, majestic Mehrangarh Fort, ancient stepwells, desert vibes, and local crafts.",
  },
];
const Discoverindia = () => {
  const items = [
    {
      title: "Heritage Tour",
      img: "https://via.placeholder.com/600x400?text=Heritage+Tour",
    },
    {
      title: "Honeymoon Tour",
      img: "https://via.placeholder.com/600x400?text=Honeymoon+Tour",
    },
    {
      title: "Family Tour",
      img: "https://via.placeholder.com/600x400?text=Family+Tour",
    },
    {
      title: "Wildlife Tour",
      img: "https://via.placeholder.com/600x400?text=Wildlife+Tour",
    },
    {
      title: "Cultural Tour",
      img: "https://via.placeholder.com/600x400?text=Cultural+Tour",
    },
  ];

  // const [openId, setOpenId] = useState(null);

  const toggleMore = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const [key, setKey] = useState("accommodation");

  const [activeId, setActiveId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const packages = [
    {
      img: "./images/featured-place.jpg",
      days: "7 Nights-8 Days",
      title: "Royal Rajasthan Tour",
    },
    {
      img: "./images/featured-place2.jpg",
      days: "6 Nights-7 Days",
      title: "Desert Safari & Forts",
    },
    {
      img: "./images/featured-place3.jpg",
      days: "9 Nights-10 Days",
      title: "Rajasthan Heritage & Culture Tour",
    },
    {
      img: "./images/featured-place4.jpg",
      days: "5 Nights-6 Days",
      title: "Romantic Udaipur & Jaipur Tour",
    },
  ];

  const morePackages = [
    {
      img: "./images/featured-place5.jpg",
      days: "8 Nights-9 Days",
      title: "Jodhpur & Jaisalmer Tour",
    },
    {
      img: "./images/featured-place6.jpg",
      days: "10 Nights-11 Days",
      title: "Luxury Rajasthan Tour",
    },
    {
      img: "./images/featured-place.jpg",
      days: "4 Nights-5 Days",
      title: "Jaipur Pink City Tour",
    },
    {
      img: "./images/featured-place2.jpg",
      days: "6 Nights-7 Days",
      title: "Bikaner & Camel Safari Tour",
    },
  ];

  return (
    <div>

        {/* Header section */}
        <Header />

        {/* first section */}
      <div
        style={{
          backgroundImage: "url('./images/discover-india.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "140px 0 200px",
          color: "black",
        }}
      >
        {/* ---------- HEADING SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 style={{ fontSize: "60px", fontWeight: "800" }}>
            Rajasthan <span style={{ color: "#ff6600" }}>Tourism</span>
          </h1>
          <p className="text-light" style={{ fontSize: "26px", marginTop: "10px" }}>
            Discover Rajasthan's vibrant culture, majestic architectures, and
            golden deserts.
          </p>
        </motion.div>

        {/* ---------- CARD SECTION ---------- */}
        <Container className="mt-5">
          <Row className="g-4 justify-content-center">
            {/* ================== CARD 1 ================== */}
            <Col md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg text-center p-4 rounded-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
                    alt="heritage"
                    width="120"
                    className="mx-auto"
                  />
                  <h3 className="mt-4 fw-bold">Heritage</h3>
                  <p className="mt-2">
                    Witness the Unprecedented Architectural Grandeur.
                  </p>

                  <Link to="/heritage" className="btn btn-outline-danger mt-3">
                    Explore More
                  </Link>
                </Card>
              </motion.div>
            </Col>

            {/* ================== CARD 2 ================== */}
            <Col md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg text-center p-4 rounded-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                    alt="wildlife"
                    width="120"
                    className="mx-auto"
                  />
                  <h3 className="mt-4 fw-bold">Wildlife</h3>
                  <p className="mt-2">
                    Marvel at the Unique Ecosystem and Diverse Wildlife.
                  </p>

                  <Link to="/wildlife" className="btn btn-outline-warning mt-3">
                    Explore More
                  </Link>
                </Card>
              </motion.div>
            </Col>

            {/* ================== CARD 3 ================== */}
            <Col md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
              >
                <Card className="shadow-lg text-center p-4 rounded-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/831/831415.png"
                    alt="festivals"
                    width="120"
                    className="mx-auto"
                  />
                  <h3 className="mt-4 fw-bold">Festivals</h3>
                  <p className="mt-2">
                    Take a Plunge in the Rich Culture – Fairs & Festivals.
                  </p>

                  <Link
                    to="/festivals"
                    className="btn btn-outline-primary mt-3"
                  >
                    Explore More
                  </Link>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* secound section */}

      <Container className="py-5">
        {/* ---------- BREADCRUMB ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Breadcrumb>
            {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home" }}>
              <HouseFill size={18} className="me-1" />
              Home
            </Breadcrumb.Item> */}

            <Breadcrumb.Item active>Rajasthan</Breadcrumb.Item>
          </Breadcrumb>
        </motion.div>

        {/* ---------- HEADING ---------- */}
        <motion.h1
          className="mt-4 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Rajasthan Tourism
        </motion.h1>

        {/* ---------- PARAGRAPH ---------- */}
        <motion.p
          className="mt-3 fs-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Rajasthan, the land of kings, is a majestic state in northwestern
          India known for its rich cultural heritage, stunning palaces, historic
          forts, and vibrant festivals. Spanning an area of 342,239 sq. km, it
          is the largest state in India by area. Rajasthan is a treasure trove
          for history enthusiasts, architecture lovers, and cultural explorers,
          offering a perfect blend of royal history, desert landscapes, colorful
          traditions, and warm hospitality.
        </motion.p>

        {/* ---------- READ MORE BUTTON ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/details">
            <Button
              size="lg"
              className="px-4 mt-3"
              style={{
                backgroundColor: "#3b82f6",
                border: "none",
                borderRadius: "10px",
                fontSize: "20px",
                padding: "10px 25px",
              }}
              as={motion.button}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </Button>
          </Link>
        </motion.div>
      </Container>
      {/* third section */}

      <Container className="py-5">
        {/* Title */}
        <motion.h2
          className="fw-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Best Selling Rajasthan Tour Packages
        </motion.h2>

        {/* Cards */}
        <Row>
          {[...packages, ...(showMore ? morePackages : [])].map(
            (pkg, index) => (
              <Col md={3} sm={6} xs={12} className="mb-5" key={index}>
                <motion.div
                  className="package-card"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="img-fluid rounded shadow-sm"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <h5 className="mt-3 fw-bold text-secondary">{pkg.days}</h5>

                  <div className="d-flex align-items-start mt-2">
                    <div
                      style={{
                        width: "4px",
                        height: "40px",
                        background: "#3b82f6",
                        marginRight: "10px",
                        borderRadius: "5px",
                      }}
                    ></div>

                    <p className="m-0 fs-5">{pkg.title}</p>
                  </div>
                </motion.div>
              </Col>
            )
          )}
        </Row>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {!showMore ? (
            <motion.button
              className="btn btn-link fs-3 fw-semibold"
              onClick={() => setShowMore(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textDecoration: "none" }}
            >
              View More
            </motion.button>
          ) : (
            <motion.button
              className="btn btn-link fs-3 fw-semibold"
              onClick={() => setShowMore(false)}
              whileHover={{ scale: 1.1 }}
              style={{ textDecoration: "none" }}
            >
              View Less
            </motion.button>
          )}
        </motion.div>
      </Container>
      {/* forth section */}

      <section className="py-5">
        <Container>
          <h2 className="mb-5 fw-bold text-center">
            Best Places to Visit in Rajasthan
          </h2>

          <Row className="g-5 justify-content-center">
            {places.map((place) => (
              <Col key={place.id} md={6} lg={4}>
                <motion.div
                  className="place-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={place.img}
                    className="place-img"
                    alt={place.title}
                  />

                  <h3 className="mt-3 fw-bold">{place.title}</h3>

                  <p className="short-text">{place.short}</p>

                  <Button
                    variant="link"
                    className="explore-btn"
                    onClick={() => setActiveId(place.id)}
                  >
                    Explore →
                  </Button>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* ================= FULL DETAILS ================ */}
          <AnimatePresence>
            {activeId && (
              <motion.div
                className="detail-panel"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const item = places.find((p) => p.id === activeId);
                  return (
                    <div className="detail-box">
                      <h3 className="fw-bold">{item.title}</h3>
                      <p>{item.full}</p>

                      <Button
                        variant="primary"
                        onClick={() => setActiveId(null)}
                      >
                        Close
                      </Button>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
      {/* fifth section */}

      <div className="container py-4">
        <h2 className="mb-4 fw-bold">Rajasthan Essential Information</h2>

        <div className="row">
          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-8 mb-4">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 custom-tabs"
            >
              {/* Accommodation */}
              <Tab eventKey="accommodation" title="Accommodation">
                <div className="content-box fadeIn">
                  <p>
                    Rajasthan offers a wide range of accommodations from luxury
                    heritage hotels to budget guesthouses, desert camps, and
                    boutique hotels.
                  </p>
                </div>
              </Tab>

              {/* Activities */}
              <Tab eventKey="activities" title="Activities">
                <div className="content-box fadeIn">
                  <h5 className="fw-bold">
                    Major Activities for Tourists in Rajasthan
                  </h5>
                  <p>
                    Explore the royal forts, enjoy desert safaris, shop for
                    handicrafts, experience local festivals, and indulge in
                    traditional Rajasthani cuisine.
                  </p>
                </div>
              </Tab>

              {/* Travel Tips */}
              <Tab eventKey="travel-tips" title="Travel tips">
                <div className="content-box fadeIn">
                  <h5 className="fw-bold">Travel Tips for Rajasthan</h5>
                  <ul>
                    <li>
                      Plan your visit during the cooler months (October to
                      March).
                    </li>
                    <li>
                      Wear comfortable and modest clothing, especially at
                      religious sites.
                    </li>
                    <li>
                      Stay hydrated, especially while exploring desert areas.
                    </li>
                    <li>Bargain in local markets for the best prices.</li>
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </div>

          {/* RIGHT SIDE ENQUIRY FORM */}
          <div className="col-lg-4">
            <div className="form-box p-3 shadow rounded fadeInRight">
              <h5 className="fw-bold mb-3">Enquiry Form</h5>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tour Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your tour description..."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Button variant="primary" className="w-100">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* sixth section */}

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-muted mb-5">
          Here are some of the most common questions about Rajasthan.
        </p>

        <div className="row g-4">
          {faqData.map((faq, index) => (
            <div className="col-lg-6" key={faq.id}>
              <div
                className="faq-card shadow-sm"
                onClick={() => toggleFAQ(faq.id)}
              >
                {/* Question Row */}
                <div className="faq-header">
                  <span className="faq-id">{faq.id}</span>
                  <span className="faq-question">{faq.question}</span>
                  <span
                    className={`arrow ${openId === faq.id ? "rotate" : ""}`}
                  >
                    ➤
                  </span>
                </div>

                {/* Answer Section */}
                <div
                  className={`faq-answer ${openId === faq.id ? "open" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* seven section */}

      <div className="container py-5">
        <h2 className="fw-bold mb-4">
          Popular Tourist Attractions in Rajasthan
        </h2>

        <div className="row g-4">
          {attractions.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="attraction-card shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid attraction-img"
                />

                <h4 className="mt-3 fw-bold">{item.title}</h4>

                <p className="short-desc">{item.short}</p>

                {/* View More */}
                <div className="view-more" onClick={() => toggleMore(item.id)}>
                  View More <span className="arrow">➤</span>
                </div>

                {/* Full Details */}
                <div
                  className={`full-details ${openId === item.id ? "open" : ""}`}
                >
                  <p>{item.full}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* eaight section */}

      {/* <div className="container py-4">
        <h2 className="fw-bold text-center mb-4">
          Rajasthan Tour Packages by Interest
        </h2>
        <Carousel indicators={true} controls={true} interval={3000} fade>
          {items.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-center">
                <img
                  className="d-block w-100 rounded-4 shadow"
                  src={item.img}
                  alt={item.title}
                  style={{ maxHeight: "420px", objectFit: "cover" }}
                />
              </div>
              <Carousel.Caption>
                <h3 className="fw-bold bg-dark bg-opacity-50 px-3 py-1 rounded-3">
                  {item.title}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}

        {/* footer section */}
        <Footer />
    </div>
  );
};

export default Discoverindia;
