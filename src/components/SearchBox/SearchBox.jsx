import { useState } from 'react';

export const SearchBox = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      alert('Enter a value');
      return;
    }
    onSubmit(movieName);
    setMovieName('');
  };

  const handelMovieChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="movieName"
          value={movieName}
          onChange={handelMovieChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
