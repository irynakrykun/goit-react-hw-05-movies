import { getMovieCredits } from '../FetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();


  console.log(error);

  useEffect(() => {
    if (movieId === '') return;
    const Cast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const resp = await getMovieCredits(movieId);
        setCast(resp);
        
      } catch (error) {
        setError('Error');
      } finally {
        setIsLoading(false);
      }
    };
    Cast();
  }, [movieId]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {isLoading && <Loader />}
          
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img src={IMG_URL + profile_path} alt={name} width="150"/>
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
