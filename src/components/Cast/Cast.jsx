import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileImg, requestMovieCast } from '../../servises/API';

import { toast } from 'react-toastify';
import css from './Cast.module.css';

 const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await requestMovieCast(movieId);
        setCast(data.cast);
      } catch {
        toast.error('Error');
      }
    };

    if (movieId) {
      fetchMovieCast(movieId);
    }
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {cast.map(cast => (
          <li className={css.castStyle} key={cast.id}>
            <img
              src={getProfileImg(cast.profile_path)}
              alt={cast.name}
              width={150}
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
