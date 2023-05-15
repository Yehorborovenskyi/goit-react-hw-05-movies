import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchHome from 'services/fetch';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchHome();
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1 className={css.caption}>Популярные фильмы</h1>
      <ul className={css.movies}>
        {movies.map(
          ({ title, id, poster_path, release_date, vote_average }) => (
            <li key={id} className={css.movies__link}>
              <Link to={`/movies/${id}`}>
                <h2 className={css.movies__caption}>{title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                  alt={title}
                  width={300}
                ></img>
                <ul className={css.movies__info}>
                  <p>{release_date}</p>
                  <p>{vote_average}</p>
                </ul>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Home;
