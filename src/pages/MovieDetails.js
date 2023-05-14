import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetch';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({
    poster_path: null,
    title: '',
    overview: '',
  });

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };

    fetchMovie();
  }, [movieId]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад</Link>

      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
