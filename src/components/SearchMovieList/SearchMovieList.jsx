import { Link,useLocation } from 'react-router-dom';

export const SearchMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
       {movies && (
        <ul>
          {movies.map(({ id, title,name}) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <p>{title || name }</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
