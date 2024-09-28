import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMoviesData } from '../../services/api';

const HomePage = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getMoviesData();
      setMovie(data);
    };
    getData();
  }, []);

  if (!movie) return <h2>Loading....</h2>;
  return (
    <div>
      <MovieList movieData={movie} />
    </div>
  );
};
export default HomePage;
