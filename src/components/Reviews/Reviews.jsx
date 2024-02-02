import React, { useEffect, useState } from 'react';
import { requestMovieReviews } from '../../servises/API';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import css from './Reviews.module.css';

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
    return <div className={css.noReviews}>There are no reviews yet</div>;
  }

  return (
    <ul className={css.reviewsList}>
      {reviews.map(review => (
        <li className={css.reviewItem} key={review.id}>
          <h3 className={css.reviewAuthor}>{review.author}</h3>
          <p className={css.reviewContent}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
