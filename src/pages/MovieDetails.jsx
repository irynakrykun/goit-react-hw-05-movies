import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      <h1>MovieDetails</h1>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
