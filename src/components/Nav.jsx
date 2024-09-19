import React, { useState } from 'react';
import './styles.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">Path Finder</a>
        </div>
        <div className="nav_menu_btn" id="menu-btn" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <li><a href="/">Courses</a></li>
        <li><a href="/">Internships</a></li>
        <li><a href="/">Jobs</a></li>
        <li><a href="/">Login</a></li>
        <li><a href="/">Sign up</a></li>
      </ul>
    </nav>
  );
}