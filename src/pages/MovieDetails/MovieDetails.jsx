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
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus(STATUSES.pending);
        const data = await movieDetailsRequest(id);

        setMovieDetails(data);
        setStatus(STATUSES.success);
      } catch {
        setStatus(STATUSES.error);
        toast('MovieDetails');
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <div>
          <Link className={css.linkGoBack} to={backLinkHref.current}>
            Go back
          </Link>
          <img
            alt={movieDetails.title || movieDetails.name}
            src={getPoster(movieDetails.poster_path)}
            width="200"
            height="300"
          />
          <h3>{movieDetails.title || movieDetails.name}</h3>
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          <div className={css.line}></div>
        </div>
      )}

      <h3>Additional information</h3>
      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="cast"
      >
        Cast
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="reviews"
      >
        Reviews
      </NavLink>
      <div>
        <div className={css.line}></div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
