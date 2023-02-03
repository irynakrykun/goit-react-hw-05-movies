// import { SearchBox } from "components/SearchBox/SearchBox";
import { searchFilms } from 'FetchApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  console.log(movieName);

  useEffect(() => {
    if (movieName === '') return;

    async function fetchMovie() {
      const movie = await searchFilms({ query:movieName});
      console.log(movie);
      setMovie(movie);
    }

    fetchMovie();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    setSearchParams({ movieName: form.elements.movieName.value });
    console.log(form.elements.movieName.value);
    form.reset();
  };

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? {query } : {};
    setSearchParams(nextParams);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='movieName' onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      {movie && (
        <div>
          {movie.map(({ id, title, name }) => (
            <li key={id}>
              <p>{title || name}</p>
            </li>
          ))}
        </div>
      )}
    </>
  );
};




// import { useState, useEffect } from "react";
// import { searchMovies } from "services/api";

// export const Movies = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [movie, setMovie] = useState([]);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         const searchMovie = async () => {
//             try {
//                 const result = await searchMovies();
//                 setMovie(result);
//                 setPage(page);
//             } catch (error) {
//                 console.log('Error')
//             };
//             };
//             searchMovie();
//         });

//   const handleChange = event => {
//     setSearchQuery(event.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     setSearchQuery(searchQuery);
//     setMovie([]);
//     setPage(1);
//     setSearchQuery('');
//     };
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={searchQuery} onChange={handleChange} name={movie} />
//             <button type="submit">Search</button>
//         </form>
//     )
// }