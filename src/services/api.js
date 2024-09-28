import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDMzYTI2YWE5OGRmM2M4NjZiMTFkNzg4NzBiMGFmOSIsIm5iZiI6MTcyNzM0NTcwMy4xMzI5MjgsInN1YiI6IjY2ZjUzMjJlZTE0YTNjOGU2MjczZTk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cbcVNgC3YzPJwgNJ_aVOrvd4vxtrKRJnD6aTcCW9L_s',
    accept: 'application/json',
  },
};

export const getMoviesData = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return data.results;
};

export const getSerchMovie = async query => {
  console.log(query);
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data.results;
};

// export const getConfigData = async () => {
//   const { data } = await axios.get(
//     'https://api.themoviedb.org/3/configuration',
//     options
//   );

//   return data.results;
// };

export const getFullDataMovie = async moviesId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${moviesId}?language=en-US`,
    options
  );

  return data;
};

export const getDataCredits = async moviesId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${moviesId}/credits?language=en-US`,
    options
  );

  return data.cast;
};

export const getDataReviews = async moviesId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${moviesId}/reviews?language=en-US&page=1`,
    options
  );

  return data.results;
};
