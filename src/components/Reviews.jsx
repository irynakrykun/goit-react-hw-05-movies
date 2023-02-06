import { getMovieReviews } from 'FetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movieId === '') return;
    const getReviews = async () => {
      try {
        setIsLoading(true);

        const resp = await getMovieReviews(movieId);
        setReviews(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
};
