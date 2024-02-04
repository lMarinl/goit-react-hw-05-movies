import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { getPoster, searchMovieRequest } from 'servises/API';

import { Form } from 'components/Form/Form';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('sQuery') ?? '';

  const fetchMovie = useCallback(async () => {
    try {
      const data = await searchMovieRequest(query);
      setSearchResult(data);
    } catch (error) {
      toast.error('MoviesPage');
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({
      sQuery: form.elements.query.value.toLowerCase().trim(),
    });
    form.reset();
  };

  useEffect(() => {
    if (query) {
      fetchMovie();
    }
  }, [query, fetchMovie]);
  return (
    <>
      <Form handleSubmit={handleSubmit} query={query} />
      {query &&
      searchResult &&
      searchResult.results &&
      searchResult.results.length > 0 ? (
        <ul className={css.movieList}>
          {searchResult.results.map(movie => (
            <li className={css.movieItem} key={movie.id}>
              <img
                className={css.moviePoster}
                alt={movie.title || movie.name}
                src={getPoster(movie.poster_path)}
                width="300"
                height="450"
              />
              <Link
                className={css.movieLink}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.noResults}>No movie found for your request</div>
      )}
    </>
  );
};

export default MoviesPage;
