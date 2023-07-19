import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My Personal Website</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/home" id="home">Home</Link>
          <Link to="/about" id="about">About</Link>
          <Link to="/portfolio" id="portfolio">Portfolio</Link>
          <Link to="/contact" id="contact">Contact</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/login" id="login" className="button is-primary">Log in</Link>
              <Link to="/logout" id="logout" className="button is-light">Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;