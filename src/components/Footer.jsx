import React from 'react';
import salonData from '../salonData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>👑 Queen Bee Salon</h3>
            <p>Люксовый салон красоты в Алматы</p>
          </div>

          <div className="footer-section">
            <h3>Контакты</h3>
            <p>☎️ {salonData.phone}</p>
            <p>📍 {salonData.address}</p>
          </div>

          <div className="footer-section">
            <h3>Меню</h3>
            <ul>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#masters">Мастера</a></li>
              <li><a href="#booking">Запись</a></li>
              <li><a href="#reviews">Отзывы</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Queen Bee Salon. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
