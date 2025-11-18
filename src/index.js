import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/homepage/home";
import Error from "./pages/error/error";
import About from "./pages/aboutus/about";
import Contactus from "./pages/contactus/contactus";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Forgotpassword from "./pages/forgotpassword/forgotpassword";
import Faqs from "./pages/faqs/faqs";
import Discoverindia from "./pages/discover-india/discoverindia";
import Tourism from "./pages/tourism/tourism";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/discover-india" element={<Discoverindia />} />
      <Route path="/tourism" element={<Tourism />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
