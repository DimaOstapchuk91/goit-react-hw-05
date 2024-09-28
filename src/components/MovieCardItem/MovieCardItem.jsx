import s from './MovieCardItem.module.css';

const MovieCardItem = ({ itemData }) => {
  return (
    <li className={s.movieItem}>
      <img
        className={s.moviePoster}
        src={`https://image.tmdb.org/t/p/w500/${itemData.poster_path}`}
        alt={itemData.original_title}
      />
      <div className={s.movieInfo}>
        <h2 className={s.movieTitle}>{itemData.title}</h2>
        <p className={s.release}>Release:{itemData.release_date}</p>
      </div>
    </li>
  );
};
export default MovieCardItem;
