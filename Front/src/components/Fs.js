import React from "react";
import "../styles/Fs.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faMapMarkerAlt,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section about">
        <h2>About Us</h2>
        <p>
          Brief information about yourself or your company can be added here.
        </p>
      </div>
      <div className="footer-section social">
        <h2>Follow Us</h2>
        <a href="#">
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
        </a>
        <a href="#">
          {/* <FontAwesomeIcon icon={faTwitter} /> */}
        </a>
        <a href="#">
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
        </a>
        <a href="#">
          {/* <FontAwesomeIcon icon={faLinkedin} /> */}
        </a>
      </div>
      <div className="footer-section contact">
        <h2>Contact Us</h2>
        <p>
          {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> Tehran, Iran */}
        </p>
        <p>
          {/* <FontAwesomeIcon icon={faPhone} /> +98 123 456 7890 */}
        </p>
        <p>
          {/* <FontAwesomeIcon icon={faEnvelope} /> email@example.com */}
        </p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 All Rights Reserved | Designed by You</p>
    </div>
  </footer>
);

export default Footer;
