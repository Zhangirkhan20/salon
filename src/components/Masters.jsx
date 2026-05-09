import React from 'react';
import salonData from '../salonData';

export default function Masters() {
  return (
    <section id="masters" className="masters">
      <div className="container">
        <h2>Наши мастера</h2>
        <p className="masters-subtitle">Выбери мастера при записи в разделе "Запись"</p>
        <div className="masters-grid">
          {salonData.masters.map(master => (
            <div key={master.id} className="master-card">
              <div className="master-image">{master.image}</div>
              <h3>{master.name}</h3>
              <p className="master-specialty">{master.specialty}</p>
              <p className="master-experience">💼 {master.experience}</p>
              <div className="master-rating">
                <span>⭐ {master.rating}</span>
              </div>
              <p className="master-hours">
                <small>{Object.values(master.workHours)[0]}</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
