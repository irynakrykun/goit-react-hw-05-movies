const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieInfo = ({
  movies: { title, poster_path, overview, genres, name },
}) => {
  return (
    <div>
      <h2>{title || name}</h2>
      <img src={IMG_URL + poster_path} alt={title} width="180" />
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Gernes</h2>
      <p>
        {genres?.length > 0 ? genres.map(genre => genre.name).join(', ') : '-'}
      </p>
    </div>
  );
};
