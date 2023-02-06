
import { ImgBlock,ContainerInfo,CardContainer } from "./MovieInfo.styled";


const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieInfo = ({
  movies: { title, poster_path, overview, genres, name,vote_average,release_date },
}) => {
  return (
    <>
    <CardContainer>
      <ImgBlock src={IMG_URL + poster_path} alt={title} width="180" />
      <ContainerInfo>
        <h2>{title || name} {`${new Date(release_date).getFullYear()}`}</h2>
        <p>User score: {Math.ceil(vote_average * 10)} %</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Gernes</h2>
      <p>
        {genres?.length > 0 ? genres.map(genre => genre.name).join(', ') : '-'}
      </p>
      </ContainerInfo>
    </CardContainer>
    </>
  );
};
