import React, { useState } from 'react';
import { navLinks } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='nav-container'>
      <img src='/logo.svg' alt='logo' />
      <button className='nav-btn' onClick={toggleMenu}>
        {!isMenuOpen ? (
          <img src='/icon-hamburger.svg' alt='Menu' />
        ) : (
          <img src='/icon-close.svg' alt='Close' />
        )}
      </button>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((item) => (
          <li key={item.label} className='nav-links'>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;