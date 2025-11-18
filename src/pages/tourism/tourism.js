import React, { useEffect, useState } from "react";
import AOS from "aos";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./tourism.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Tourism = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 120 });
    AOS.refresh();
  }, []);

  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setContact((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const validate = () => {
    const err = {};
    if (!contact.name) err.name = "Name is required";
    if (!contact.email || !/\S+@\S+\.\S+/.test(contact.email))
      err.email = "Valid email required";
    if (!contact.message || contact.message.length < 20)
      err.message = "Message should be 20+ chars";
    return err;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // No backend — simulate success
      setSent(true);
      setContact({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }
  };

  // Content arrays for many sections
  const sectors = [
    {
      title: "Sustainable Agriculture",
      desc: "Organic methods, value-added produce, cooperative farms, seeds & soil health.",
      img: "https://images.pexels.com/photos/132995/pexels-photo-132995.jpeg",
    },
    {
      title: "Handicrafts & Textiles",
      desc: "Traditional weaving, block-printing, pottery & contemporary design collaborations.",
      img: "https://images.pexels.com/photos/1134846/pexels-photo-1134846.jpeg",
    },
    {
      title: "Food Processing",
      desc: "Local jams, pickles, cold-pressed oils, and small-scale processing units for export-ready products.",
      img: "https://images.pexels.com/photos/208762/pexels-photo-208762.jpeg",
    },
    {
      title: "Eco & Agro-Tourism",
      desc: "Farm stays, nature trails, community-hosted experiences and sustainable hospitality.",
      img: "https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg",
    },
    {
      title: "Rural Tech & Startups",
      desc: "IoT in farming, supply-chain apps, drone services and rural fintech bridges.",
      img: "https://images.pexels.com/photos/4393912/pexels-photo-4393912.jpeg",
    },
    {
      title: "Women-led Enterprises",
      desc: "Self-help groups, cooperatives and women artisans powering local commerce.",
      img: "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg",
    },
  ];

  const itineraries = [
    {
      title: "2-Day Farm Immersion",
      days: "2 Days",
      bullets: [
        "Farm tour & hands-on planting",
        "Dairy demonstration",
        "Community market visit",
        "Local culinary session",
      ],
    },
    {
      title: "5-Day Rural Business Bootcamp",
      days: "5 Days",
      bullets: [
        "Workshops with local entrepreneurs",
        "Market linkage sessions",
        "Mini trade fair visit",
        "Product packaging clinic",
      ],
    },
    {
      title: "10-Day Deep-Dive Exchange",
      days: "10 Days",
      bullets: [
        "Partner with local SMEs",
        "Export readiness training",
        "Study of value-chains",
        "Field visits & mentoring",
      ],
    },
  ];

  const stories = [
    {
      name: "The Weaver Collective",
      text: "Women artisans formed a co-op, modernised designs, reached urban boutiques and exported handloom.",
      impact:
        "Increased household incomes, school fees paid, skills training scaled.",
    },
    {
      name: "Organic Spice Cluster",
      text: "A cluster of 20 farms unified processing, standardized quality, and now supply premium restaurants.",
      impact: "Premium pricing unlocked; market access improved.",
    },
    {
      name: "AgroTech Youth",
      text: "Local youth launched a soil-testing service using mobile labs and subscription model.",
      impact: "Productivity gains and new jobs.",
    },
  ];

  return (
    <div>
      {/* Header section */}
      <Header />

      <div>
        {/* HERO */}
        <header
          className="hero text-white d-flex align-items-center"
          style={{
            background:
              "linear-gradient(0deg, rgba(9,29,52,0.5), rgba(9,29,52,0.5)), url('./images/popular-india-2.jpg') center/cover",
            minHeight: "88vh",
          }}
        >
          <div className="container text-center" data-aos="fade-up">
            <h1 className="display-4 fw-bold">
              Rural Business Tourism — FULL 360°
            </h1>
            <p className="lead mt-3 max-w-800 mx-auto">
              Explore how villages become hubs of entrepreneurship — discover
              agri-value chains, artisanal excellence, community enterprises and
              investment opportunities — all in one immersive tour.
            </p>
            <div className="mt-4">
              <a
                href="#sectors"
                className="btn btn-warning btn-lg me-2"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Discover Sectors
              </a>
              <a
                href="#itinerary"
                className="btn btn-outline-light btn-lg"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                View Itineraries
              </a>
            </div>
          </div>
        </header>

        {/* ABOUT LONG CONTENT */}
        <section id="about" className="py-5">
          <div className="container">
            <div className="row align-items-start g-4">
              <div className="col-lg-8" data-aos="fade-right">
                <h2 className="fw-bold mb-3">
                  Why Rural Business Tourism matters
                </h2>
                <p className="text-muted">
                  Rural Business Tourism builds bridges between urban markets
                  and village economies. Beyond sightseeing, it is a purposeful
                  journey — businesses, students, investors and policymakers
                  come to observe value-chains, co-invest, mentor, and create
                  market linkages for micro and small enterprises.
                </p>

                <h5 className="mt-4">Core benefits</h5>
                <ul>
                  <li>Direct market access and buyer-seller meetings.</li>
                  <li>Knowledge transfer through workshops & mentorship.</li>
                  <li>Recognition and premium for authentic rural brands.</li>
                  <li>
                    Social impact: jobs, income diversification and women
                    empowerment.
                  </li>
                </ul>

                <p className="mt-3 text-muted">
                  Every tour is designed with sustainability in mind —
                  low-impact stays, local procurement, and revenue-sharing with
                  host communities. The goal: tourism that leaves villages
                  richer in skills, not just in dollars.
                </p>

                <blockquote className="blockquote ps-3 border-start border-3 border-warning">
                  <p className="mb-0">
                    "We measure success by the number of new buyers who visit,
                    the orders placed, and the number of youth trained." —
                    Program Lead, Rural360
                  </p>
                </blockquote>
              </div>

              <div className="col-lg-4" data-aos="fade-left">
                <div className="p-4 bg-light rounded shadow-sm">
                  <h5 className="fw-bold">Trip Snapshot</h5>
                  <p className="mb-1">
                    <strong>Type:</strong> Business + Experiential
                  </p>
                  <p className="mb-1">
                    <strong>Audience:</strong> Investors, SMEs, Corporates,
                    Students
                  </p>
                  <p className="mb-1">
                    <strong>Focus Areas:</strong> Agriculture, Crafts,
                    Processing, Tech
                  </p>
                  <p className="mb-0">
                    <strong>Impact Model:</strong> Revenue share + Skills
                    training + Market linkages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section id="sectors" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
              Rural Business Sectors — Deep Dive
            </h2>
            <div className="row g-4">
              {sectors.map((s, i) => (
                <div
                  key={i}
                  className="col-md-6 col-lg-4"
                  data-aos="flip-left"
                  data-aos-delay={(i % 3) * 100}
                >
                  <div className="card h-100 border-0 shadow-sm sector-card">
                    <img
                      src={s.img}
                      className="card-img-top"
                      alt={s.title}
                      style={{ height: "210px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{s.title}</h5>
                      <p className="card-text text-muted">{s.desc}</p>
                      <a
                        className="stretched-link"
                        href="#market"
                        aria-label={`Explore ${s.title}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE CHAIN SECTION */}
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Rural Value-Chain — Example (From Farm to Market)
            </h2>
            <div className="row align-items-center g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <ol className="timeline list-unstyled">
                  <li>
                    <strong>Input & Seed Selection</strong> — Quality seeds,
                    soil testing & training on crop calendar.
                  </li>
                  <li>
                    <strong>Cultivation Practices</strong> — Organic
                    alternatives, drip irrigation, mixed cropping for
                    resilience.
                  </li>
                  <li>
                    <strong>Processing</strong> — Food processing units for
                    jams, pickles, cold-pressed oils.
                  </li>
                  <li>
                    <strong>Branding & Packaging</strong> — Product design
                    clinics during the tour make products market-ready.
                  </li>
                  <li>
                    <strong>Market Linkages</strong> — Buyer visits, e-commerce
                    onboarding and cooperative selling.
                  </li>
                  <li>
                    <strong>Aftercare</strong> — Follow-up mentorship, finance
                    linkages and quality monitoring.
                  </li>
                </ol>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <img
                  src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"
                  className="img-fluid rounded shadow"
                  alt="value chain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCES — LONG CONTENT */}
        <section id="itinerary" className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Experiential Itineraries & Workshops
            </h2>
            <p
              className="lead text-center text-muted mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sample programs curated for maximum learning, business outcomes
              and community benefit.
            </p>

            <div className="row g-4">
              {itineraries.map((it, i) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 150}
                >
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-bold">{it.title}</h5>
                      <p className="text-warning mb-2">{it.days}</p>
                      <ul>
                        {it.bullets.map((b, idx) => (
                          <li key={idx} className="text-muted">
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        <a className="btn btn-outline-warning" href="#contact">
                          Book Inquiry
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5" data-aos="fade-up">
              <h5>Workshop Themes</h5>
              <p className="text-muted">
                Packaging & design clinics, digital marketing for rural brands,
                quality compliance for exports, co-op governance & financing for
                scale.
              </p>
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES (LONGER NARRATIVE) */}
        <section id="stories" className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Success Stories & Impact
            </h2>
            <div className="row g-4">
              {stories.map((st, i) => (
                <div
                  key={i}
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className="p-4 bg-white rounded shadow-sm h-100">
                    <h5 className="fw-bold">{st.name}</h5>
                    <p className="text-muted">{st.text}</p>
                    <p className="mb-0">
                      <strong>Impact:</strong>{" "}
                      <span className="text-success">{st.impact}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5 g-4">
              <div className="col-md-6" data-aos="fade-right">
                <h5>Measuring Impact</h5>
                <p className="text-muted">
                  Each tour captures metrics: orders placed, jobs created, women
                  trained, new buyer partnerships, and follow-up investments. We
                  publish anonymized reports to return value to our sponsors and
                  communities.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  className="img-fluid rounded shadow"
                  alt="impact"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MARKETPLACE & EXPORTS */}
        <section id="market" className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Marketplace — From Village Stalls to Global Shelves
            </h2>
            <p
              className="text-muted text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Tours create direct leads and orders. We host pop-up bazaars, B2B
              meetups and export readiness clinics.
            </p>

            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-right">
                <h5>Pop-Up Bazaars</h5>
                <p className="text-muted">
                  Curated weekend markets where visitors buy direct — helping
                  small producers earn fair retail prices without middlemen.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <h5>Export Readiness</h5>
                <p className="text-muted">
                  Quality labs, packaging partners and logistics partners join
                  during deep-dive programs to evaluate product for export
                  standards and buyer requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS & FAIRS */}
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Fairs, Seasonal Markets & Festivals
            </h2>
            <p className="text-muted text-center">
              Local fairs drive huge demand. Tours timed to festivals produce
              natural buyer footfall and unique cultural exchange.
            </p>

            <div className="row mt-4 g-4">
              <div className="col-md-4" data-aos="flip-left">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h6 className="fw-bold">Harvest Fairs</h6>
                  <p className="text-muted">
                    Where fresh produce, seeds, and equipment meet buyers &
                    traders.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="flip-up">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h6 className="fw-bold">Handicraft Melas</h6>
                  <p className="text-muted">
                    Melas showcase craft clusters, live demonstrations and bulk
                    order opportunities.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="flip-right">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h6 className="fw-bold">Agri-Expos</h6>
                  <p className="text-muted">
                    Technology providers, banks and input suppliers meet farmers
                    and entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRAINING & SKILLS */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Training, Incubation & Skill Centres
            </h2>
            <p className="text-muted text-center mb-4">
              Every tour includes at least one hands-on training for host
              communities and visitors.
            </p>

            <div className="row g-4">
              <div className="col-md-4" data-aos="zoom-in">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h6 className="fw-bold">Product Design Clinics</h6>
                  <p className="text-muted">
                    Local artists work with designers to create market-fit SKUs.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="zoom-in" data-aos-delay="120">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h6 className="fw-bold">Digital Onboarding</h6>
                  <p className="text-muted">
                    E-commerce, payments and social media training to list
                    products online.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="zoom-in" data-aos-delay="240">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h6 className="fw-bold">Quality & Standards</h6>
                  <p className="text-muted">
                    Hygiene, packaging and compliance workshops preparing
                    producers for national/international buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">
              Frequently Asked Questions
            </h2>

            <div className="accordion" id="faqAccordion">
              {/* Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Who should join a Rural Business Tour?
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">
                    Investors, buyers, CSR teams, students, researchers, and
                    policy professionals.
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do tours benefit the local community?
                  </button>
                </h2>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">
                    Yes — Tours include revenue sharing, training programs, and
                    local market development.
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How are accommodations arranged?
                  </button>
                </h2>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">
                    Homestays, eco lodges, farmstays — operated by local
                    families and cooperatives.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY CAROUSEL */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
              Gallery — Glimpses of Tours
            </h2>
            <div
              id="galleryCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-aos="zoom-in"
            >
              <div className="carousel-inner rounded shadow">
                {[
                  "https://images.pexels.com/photos/36717/pexels-photo.jpg",
                  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
                  "https://images.pexels.com/photos/1435892/pexels-photo-1435892.jpeg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <img
                      className="d-block w-100"
                      style={{ height: "420px", objectFit: "cover" }}
                      alt={`slide-${i}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4" data-aos="fade-up">
              Contact & Inquiry
            </h2>
            <div className="row justify-content-center">
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="120">
                <form
                  className="p-4 rounded shadow-sm bg-white"
                  onSubmit={handleSubmit}
                >
                  {sent && (
                    <div className="alert alert-success">
                      Your inquiry was sent (demo). We'll follow up via email.
                    </div>
                  )}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={contact.message}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows="5"
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  <div className="mt-3 text-end">
                    <button className="btn btn-warning">Send Inquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Tourism;
