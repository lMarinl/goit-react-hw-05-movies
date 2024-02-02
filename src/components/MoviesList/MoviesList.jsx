// import { POSTER_URL } from 'servises/API';
import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ searchResult }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.moviesList}>
        {searchResult &&
          searchResult.results.map(result => {
            return (
              <li key={result.id}>
                <Link
                  className={css.linkMovie}
                  to={`/movies/${result.id}`}
                  state={{ from: location }}
                >
                  {result.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
