import MovieCardItem from '../MovieCardItem/MovieCardItem';
import s from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movieData }) => {
  return (
    <div>
      <ul className={s.movieList}>
        {movieData.map(item => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id}>
              <MovieCardItem itemData={item} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;
