import { getTrendingFilms } from 'FetchApi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const resp = await getTrendingFilms();
        setMovies(prevMovies => [...prevMovies, ...resp]);
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title,name }) => (
            <li key={id}>
              <Link to={`${id}`}>
                <p>{title || name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
