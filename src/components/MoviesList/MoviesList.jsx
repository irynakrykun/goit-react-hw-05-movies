import { Link,useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <p>{title || name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      
    })
  ).isRequired,
};