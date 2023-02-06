import { Link,useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
export const SearchMovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <p>{title || name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
  SearchMovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      
      })
    ).isRequired,
  
  };
 
