import React, { useEffect, useState } from 'react';
import { requestMovieReviews } from '../../servises/API';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await requestMovieReviews(movieId);

        if (data.results.length === 0) {
          setReviews([]);
        } else {
          setReviews(data.results);
        }
      } catch (error) {
        toast.error('Reviews');
      }
    };

    if (movieId) {
      fetchMovieReviews(movieId);
    }
  }, [movieId]);

  if (!movieId || reviews.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
