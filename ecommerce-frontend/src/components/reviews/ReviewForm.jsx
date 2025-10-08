import React, { useState } from 'react';
import { required } from '../utils/validations';
import './reviews.css';

export default function ReviewForm({ productId, onSubmit }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!required(comment)) {
      setError('Please enter a review');
      return;
    }
    setError(null);
    const review = { productId, rating, comment };
    if (onSubmit) onSubmit(review);
    // Optionally POST to API
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      {error && <div className="form-error">{error}</div>}
      <label>
        Rating
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5,4,3,2,1].map((r) => <option key={r} value={r}>{r} stars</option>)}
        </select>
      </label>
      <label>
        Review
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button type="submit" className="btn">Submit Review</button>
    </form>
  );
}
