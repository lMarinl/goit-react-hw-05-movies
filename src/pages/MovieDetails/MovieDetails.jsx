import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';

import { getPoster, movieDetailsRequest } from '../../servises/API';
import { toast } from 'react-toastify';

import { STATUSES } from 'utils/Statuses';

import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus(STATUSES.pending);
        const data = await movieDetailsRequest(movieId);

        setMovieDetails(data);
        setStatus(STATUSES.success);
      } catch {
        setStatus(STATUSES.error);
        toast('MovieDetails');
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieContainer}>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <div className={css.movieDetailsContainer}>
          <Link className={css.goBackLink} to={backLinkHref.current}>
            Go back
          </Link>
          <img
            className={css.moviePoster}
            alt={movieDetails.title || movieDetails.name}
            src={getPoster(movieDetails.poster_path)}
            width="365"
            height="550"
          />
          <div className={css.movieDescriptionContainer}>
            <h3 className={css.movieTitle}>
              {movieDetails.title || movieDetails.name}
            </h3>
            <p className={css.movieScore}>
              User Score: {Math.round(movieDetails.vote_average * 10)}%
            </p>
            <h4 className={css.movieOverviewTitle}>Overview</h4>
            <p className={css.movieDetails}>{movieDetails.overview}</p>
            <h4 className={css.movieGenresTitle}>Genres</h4>
            <p className={css.movieGenres}>
              {movieDetails.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
      )}

      <h3 className={css.additionalInformation}>Additional information</h3>
      <div className={css.containerMenu}>
        <NavLink
          className={({ isActive }) =>
            `${css.cast} ${isActive ? css.active : ''}`
          }
          to="cast"
        >
          Cast
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${css.reviews} ${isActive ? css.active : ''}`
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
