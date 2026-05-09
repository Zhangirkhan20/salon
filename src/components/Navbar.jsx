import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>👑 Queen Bee</h1>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('services')}>Услуги</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('masters')}>Мастера</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('booking')}>Запись</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('gallery')}>Галерея</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('reviews')}>Отзывы</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Контакты</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
