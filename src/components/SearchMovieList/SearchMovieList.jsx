import { Link } from 'react-router-dom';

export const SearchMovieList = ({movies }) => {
  return (
    <div>
      {movies && (
        <ul>
          {movies.map(({ id, title, name }) => (
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
