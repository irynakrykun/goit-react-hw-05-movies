// import { useState } from 'react';
// import { Wrapper, Input, SearchFormButton } from './SearchBox.styled';

// export const SearchBox = ({ value, onSubmit }) => {
//   const [movie, setMovie] = useState('');

//   const handelSubmit = e => {
//     e.preventDefault();
//     if (movie.trim() === '') {
//       alert('Enter a value');
//       return;
//     }
//     onSubmit(movie);
//     setMovie('');
//   };

//     const handelMovieChange = e => {
//     setMovie(e.currentTarget.value.toLowerCase());

//   };

//   return (
//     <Wrapper onSubmit={handelSubmit}>
//       <Input
//         type="text"
//         autoComplete="off"
//         value={value}
//         name ='movieName'
//         onChange={handelMovieChange}
//       />
//       <SearchFormButton type="submit">Search</SearchFormButton>
//     </Wrapper>
//   );
// };


