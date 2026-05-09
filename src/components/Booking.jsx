import React, { useState } from 'react';
import salonData from '../salonData';

export default function Booking({ selectedService, selectedMaster, salonPhone }) {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    service: selectedService || null,
    master: selectedMaster || null,
    name: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Generate 14 days of dates starting from tomorrow
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const timeSlots = [
    '10:00', '10:40', '11:20', '12:00', '12:40',
    '13:20', '14:00', '14:40', '15:20', '16:00',
    '16:40', '17:20', '18:00', '18:40', '19:20'
  ];

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (service) => {
    setBookingData(prev => ({
      ...prev,
      service
    }));
  };

  const handleMasterSelect = (master) => {
    setBookingData(prev => ({
      ...prev,
      master
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookingData.date || !bookingData.time || !bookingData.name || !bookingData.phone) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    if (!bookingData.service) {
      alert('Пожалуйста, выберите услугу');
      return;
    }

    // Format message for WhatsApp
    const message = `Привет! Я хочу записаться к вам в салон.
Услуга: ${bookingData.service.name}
${bookingData.master ? `Мастер: ${bookingData.master.name}` : ''}
Дата: ${bookingData.date}
Время: ${bookingData.time}
Имя: ${bookingData.name}
Телефон: ${bookingData.phone}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${salonPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);

    setTimeout(() => {
      setBookingData({
        date: '',
        time: '',
        service: null,
        master: null,
        name: '',
        phone: ''
      });
      setSubmitted(false);
    }, 2000);
  };

  const dates = generateDates();

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2>Запишитесь на приём</h2>

        {submitted && (
          <div className="success-message">
            ✅ Спасибо! Вы будете перенаправлены в WhatsApp
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Service Selection */}
          <div className="form-section">
            <label>Выберите услугу *</label>
            <div className="services-selector">
              {salonData.services.slice(0, 8).map(service => (
                <button
                  key={service.id}
                  type="button"
                  className={`service-btn ${
                    bookingData.service?.id === service.id ? 'selected' : ''
                  }`}
                  onClick={() => handleServiceSelect(service)}
                >
                  {service.image} {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Master Selection */}
          <div className="form-section">
            <label>Выберите мастера (опционально)</label>
            <div className="masters-selector">
              {salonData.masters.map(master => (
                <button
                  key={master.id}
                  type="button"
                  className={`master-btn ${
                    bookingData.master?.id === master.id ? 'selected' : ''
                  }`}
                  onClick={() => handleMasterSelect(master)}
                >
                  {master.image} {master.name}
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="form-section">
            <label>Выберите дату *</label>
            <div className="dates-selector">
              {dates.map((date, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`date-btn ${
                    bookingData.date === date.toISOString().split('T')[0]
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() =>
                    setBookingData(prev => ({
                      ...prev,
                      date: date.toISOString().split('T')[0]
                    }))
                  }
                >
                  {formatDate(date)}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="form-section">
            <label>Выберите время *</label>
            <div className="times-selector">
              {timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  className={`time-btn ${
                    bookingData.time === time ? 'selected' : ''
                  }`}
                  onClick={() =>
                    setBookingData(prev => ({
                      ...prev,
                      time
                    }))
                  }
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section form-inputs">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя *"
              value={bookingData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш номер телефона *"
              value={bookingData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="booking-submit">
            Записаться в WhatsApp
          </button>
        </form>

        <div className="booking-info">
          <p>💬 После нажатия кнопки вы будете перенаправлены в WhatsApp</p>
          <p>☎️ Или позвоните: {salonData.phone}</p>
        </div>
      </div>
    </section>
  );
}
