// import { Routes, Route,NavLink } from "react-router-dom";
// import { Home } from "pages/Home";
// import { Movies } from "pages/Movies";
// import { MovieDetails } from "pages/MovieDetails";
// import { Cast } from "./Cast";
// import { Reviews } from "./Reviews";
// import styled from "styled-components";


// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
{/* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        
      </nav> */}

       {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
           </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
};
