import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">👑 Queen Bee Salon</h1>
        <p className="hero-subtitle">Люксовый салон красоты в Алматы</p>
        <p className="hero-description">
          Профессиональные мастера, качественные услуги и премиум материалы
        </p>
        <button
          className="hero-button"
          onClick={() =>
            document
              .getElementById('booking')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Записаться
        </button>
      </div>
      <div className="hero-background">✨</div>
    </section>
  );
}
