import { Link } from 'react-router-dom';

export const MoviesList = ({movies}) => {
    return (
        <div>
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title,name}) => (
            <li key={id}>
              <Link to={`${id}`}>
                <p>{title || name }</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}