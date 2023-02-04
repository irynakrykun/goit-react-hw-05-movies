import { searchFilms } from 'FetchApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { SearchMovieList } from 'components/SearchMovieList/SearchMovieList';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handleFormSubmit = movieName => {
    setSearchParams({ query: movieName });
  };

  useEffect(() => {
    if (movieName === '') return;
    const fetchMovie = async () => {
      try {
        const movies = await searchFilms(movieName);
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  //  const visibleMovies = movies.filter((movie) =>
  //   movie.name.toLowerCase().includes(movieName.toLowerCase())
  // );
  return (
    <>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
        onSubmit={handleFormSubmit}
      />
      <SearchMovieList movies={movies} />
    </>
  );
};
