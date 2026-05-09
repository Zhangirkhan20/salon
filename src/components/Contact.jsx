import React from 'react';
import salonData from '../salonData';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>

        <div className="contact-info">
          <div className="contact-item">
            <h3>📍 Адрес</h3>
            <p>{salonData.address}</p>
          </div>

          <div className="contact-item">
            <h3>☎️ Телефон</h3>
            <p>
              <a href={`tel:+${salonData.phone}`}>
                +{salonData.phone}
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>💬 WhatsApp</h3>
            <p>
              <a href={`https://wa.me/${salonData.phone}`} target="_blank" rel="noreferrer">
                Написать в WhatsApp
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>📷 Instagram</h3>
            <p>
              <a href={salonData.instagram} target="_blank" rel="noreferrer">
                @queenbee.salon
              </a>
            </p>
          </div>
        </div>

        <div className="contact-map">
          <p>⏰ Режим работы: 10:00 - 20:00 (Пн-Пт) | 10:00 - 18:00 (Сб) | Вс - Выходной</p>
        </div>
      </div>
    </section>
  );
}
