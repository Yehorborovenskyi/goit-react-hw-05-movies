import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'services/fetch';
import SearchBox from 'components/searchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (search === '') {
      return;
    } else {
      const fetchData = async () => {
        try {
          const response = await fetchSearchMovies(search);
          setMovies(response.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [search]);

  const showSearchParams = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: e.target.value });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    setSearch(movieName);
  };

  const noResults =
    movies.length === 0 && search === movieName && search !== '';

  return (
    <>
      <SearchBox
        onSubmit={handleOnSubmit}
        value={movieName}
        onChange={showSearchParams}
      />
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
      {noResults && <p>Такого фильма нет</p>}
    </>
  );
};

export default Movies;
