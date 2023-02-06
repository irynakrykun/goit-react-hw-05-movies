import { Link, Outlet ,useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'FetchApi';
import { useEffect, useState } from 'react';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';


export const MovieDetails = () => {
  const [movies, setMovies] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
 

  useEffect(() => {
    if (movieId === '') return;
    const MovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    MovieDetails();
  }, [movieId]);
 
  return (
    <>
      <Link to={backLinkHref}>Go Back</Link>
      <MovieInfo movies={movies} />
    <div>
      <h2>Additinial information</h2>
      <ul>
        <li>
            <Link to={"cast"}  state={{ from: location?.state?.from }}>Cast</Link>
        </li>
        <li>
            <Link to={"reviews"}  state={{ from: location?.state?.from }}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
      </div>
      </>
  );
};
