import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <footer className="__footer">
      <div className="__center-sub-section">
        <div className="category__options">
          <Link to="/" className="category">
            <img src="./multimedia/img/icons/footer/__marketplace-logo.png" alt="" />
            <h1>Home</h1>
          </Link>
          <Link to="/terms" className="category">
            <img src="./multimedia/img/icons/footer/__terms-logo.png" alt="" />
            <h1>Terms</h1>
          </Link>
          <Link to="/privacy" className="category">
            <img src="./multimedia/img/icons/footer/__privacy-logo.png" alt="" />
            <h1>Privacy</h1>
          </Link>
          <Link to="/cookies" className="category">
            <img src="./multimedia/img/icons/footer/__cookies-logo.png" alt="" />
            <h1>Cookies</h1>
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
