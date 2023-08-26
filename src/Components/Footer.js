import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Your Company is a leading provider of innovative solutions...</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
        <div className="footer-social">
          <a href="/"><i className="fab fa-facebook"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-linkedin"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
