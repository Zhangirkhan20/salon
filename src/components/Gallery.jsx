import React from 'react';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Стрижка и укладка', emoji: '✂️' },
    { id: 2, title: 'Окрашивание', emoji: '🎨' },
    { id: 3, title: 'Маникюр', emoji: '💅' },
    { id: 4, title: 'Ресницы', emoji: '✨' },
    { id: 5, title: 'Педикюр', emoji: '👣' },
    { id: 6, title: 'Уход за лицом', emoji: '🌺' },
    { id: 7, title: 'Окрашивание бровей', emoji: '🎯' },
    { id: 8, title: 'Спа процедуры', emoji: '🧖' }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Наши работы</h2>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">{item.emoji}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
