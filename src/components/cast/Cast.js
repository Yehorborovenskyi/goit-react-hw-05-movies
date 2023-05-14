import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetch';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? (
        <p>Cast is unknown</p>
      ) : (
        <ul>
          {cast.map(({ character, name, profile_path, cast_id }) => {
            return (
              <li key={cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`}
                  alt={character}
                  width={150}
                />

                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
