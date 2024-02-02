import axios from 'axios';

const API_KEY = '4e1f358bd63a2be75a8ad2292af6c6a7';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  api_key: API_KEY,
  AUTH_TOKEN:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFmMzU4YmQ2M2EyYmU3NWE4YWQyMjkyYWY2YzZhNyIsInN1YiI6IjY1YjJjZGRmYTE5OWE2MDEzMDlkODI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKuoVXR1zDkeNXO0X4Y2B4kmtoFve3Fd86OxTgvUEzk',
};
axios.defaults.headers.common['Authorization'] = options.AUTH_TOKEN;

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`);

  return data.results;
};

export const searchMovieRequest = async searchTerm => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${searchTerm}`
  );
  return response.data;
};

export const movieDetailsRequest = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
  return data;
};

export const requestMovieCast = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
  return data;
};

export const requestMovieReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
  return data;
};

export const getPoster = url =>
  url
    ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${url}`
    : 'https://fakeimg.pl/400x600?text=No+image&font=bebas';

export const getProfileImg = url =>
  url
    ? `https://image.tmdb.org/t/p/w200${url}`
    : 'https://fakeimg.pl/400x600?text=No+image&font=bebas';
