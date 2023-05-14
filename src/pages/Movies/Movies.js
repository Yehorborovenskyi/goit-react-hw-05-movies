import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'services/fetch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const location = useLocation();

  const showSearchParams = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: e.target.value });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const response = await fetchSearchMovies(movieName);

    setMovies(response.results);
  };

  return (
    <>
      <form onSubmit={e => handleOnSubmit(e)}>
        <input
          type="text"
          name="query"
          value={movieName}
          placeholder="Введите название"
          onChange={e => showSearchParams(e)}
        />
        <button type="sumbit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
