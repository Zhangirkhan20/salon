import React from 'react';
import salonData from '../salonData';

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2>Отзывы наших клиентов</h2>
        <div className="reviews-grid">
          {salonData.reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-rating">
                {'⭐'.repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">— {review.author}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
