import MovieCardItem from '../MovieCardItem/MovieCardItem';
import s from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieData }) => {
  const location = useLocation();

  if (movieData.length === 0) {
    return (
      <h2 className={s.notFoundData}>Nothing was found for your request...</h2>
    );
  }

  return (
    <div>
      <ul className={s.movieList}>
        {movieData.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={location}>
                <MovieCardItem itemData={item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;
