const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e5bfb55386b809202657051ad29d231c';

async function fetchHome() {
  const response = await fetch(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=1`
  );
  return response.json();
}

export default fetchHome;

export async function fetchSearchMovies(query) {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.json();
}

export const fetchMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return response.json();
};

export const fetchMovieCast = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.json();
};

export const fetchMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.json();
};
