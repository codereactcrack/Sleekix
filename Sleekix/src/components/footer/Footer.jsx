import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navbar = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about-us' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SUPPORT', path: '/support' }
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 E-commerce St.</p>
          <p>City, State, 12345</p>
          <p>Email: codereactcrack@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav>
            <ul className="navbar-menu-footer">
              {navbar.map((item) => (
                <li key={item.name} className="navbar-item-footer">
                  <NavLink to={item.path} className="navbar-link-footer">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/codereactcrack/" target="_blank" rel="noopener noreferrer">CodeReactCrack</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sleekix. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
