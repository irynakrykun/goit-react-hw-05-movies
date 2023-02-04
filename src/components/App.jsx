import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import styled from "styled-components";


export const App = () => {
  return (
    <div
         >

        <Routes>
       <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
         <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        
        {/* <Route path="*" element={<NotFound />} /> */}
       </Routes>
    </div>
  );
};