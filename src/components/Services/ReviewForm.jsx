import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ serviceId, onSuccess }) => {
  const [review, setReview] = useState({
    rating: 1,
    comment: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKENDURL}/services/${serviceId}/reviews`, review);
      console.log('Review added:', response.data);
      onSuccess(); 
    } catch (error) {
      console.error('Error adding review:', error);
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" value={review.rating} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Comment:</label>
        <textarea name="comment" value={review.comment} onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
