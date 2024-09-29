import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMoviesData } from '../../services/api';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getMoviesData();
      setMovies(data);
    };
    getData();
  }, []);

  if (!movies) return <Loader />;

  return (
    <div>
      <MovieList movieData={movies} />
    </div>
  );
};
export default HomePage;
