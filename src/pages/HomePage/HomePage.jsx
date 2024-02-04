import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPoster, requestTrendingMovies } from 'servises/API';
import { STATUSES } from 'utils/Statuses';
import { Loader } from 'components/Loader/Loader';

import css from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const results = await requestTrendingMovies();
        setTrendingMovies(results);
        setStatus(STATUSES.success);
      } catch {
        setStatus(STATUSES.error);
        toast('error');
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePageContainer}>
      <h1 className={css.title}>Trending today</h1>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <ul className={css.moviesList}>
          {trendingMovies?.map(movie => (
            <li className={css.movieItem} key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {
                  <img
                    className={css.moviePoster}
                    alt={movie.title || movie.name}
                    src={getPoster(movie.poster_path)}
                    width="280"
                    height="420"
                  ></img>
                }
              </Link>
              <Link
                className={css.linkMovie}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === STATUSES.error && toast.error('Something')}
    </div>
  );
};
export default HomePage;
