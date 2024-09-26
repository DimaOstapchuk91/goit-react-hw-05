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

  return data;
};
