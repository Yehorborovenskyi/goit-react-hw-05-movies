import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchHome from 'services/fetch';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetchHome();
      setMovies(response.results);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Популярные фильмы</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
