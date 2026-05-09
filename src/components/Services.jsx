import React from 'react';
import salonData from '../salonData';

export default function Services({ onSelectService }) {
  const servicesByCategory = {};

  salonData.services.forEach(service => {
    if (!servicesByCategory[service.category]) {
      servicesByCategory[service.category] = [];
    }
    servicesByCategory[service.category].push(service);
  });

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Наши услуги</h2>

        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="service-category">
            <h3>{category}</h3>
            <div className="services-grid">
              {services.map(service => (
                <div
                  key={service.id}
                  className="service-card"
                  onClick={() => onSelectService(service)}
                >
                  <div className="service-icon">{service.image}</div>
                  <h4>{service.name}</h4>
                  <p className="service-price">{service.price}</p>
                  <p className="service-duration">⏱️ {service.duration} мин</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
