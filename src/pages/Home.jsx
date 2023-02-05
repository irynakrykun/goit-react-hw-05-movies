import { getTrendingFilms } from 'FetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const resp = await getTrendingFilms();
        setMovies(resp);
        
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []);

  return (
    <MoviesList movies={movies} />
  );
};
