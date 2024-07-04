import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="TastyTracker Logo" className="footer-logo" />
          <p>TastyTracker: Your go-to app for fast and reliable food delivery.</p>
          <div className="footer-social-icons">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
              <img src={assets.facebook_icon} alt="Facebook" />
              <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li> <a href="tel:111-222-333">Phone : 111-222-333</a></li>
            <li> <a href="mailto:contact@TastyTracker.com">contact@TastyTracker.com</a></li>
          </ul>
          <form className="footer-newsletter">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 TastyTracker. All rights reserved.</p>
    </div>
  );
}

export default Footer;
