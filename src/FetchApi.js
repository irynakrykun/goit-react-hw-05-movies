import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'c65b1581ed69fd3b6701ed620730aaec',
};

export const getTrendingFilms = async () => {
    const { data } = await axios.get(`trending/all/day?`);
      return data.results;
};

export const searchFilms  = async (movieName) => {
  const {data} = await axios.get(`search/movie?query=${movieName}`);
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}?`);
  return data;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits?`);
    return data.cast;
 
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews?`);
  console.log(data.results);
  return data.results;
};