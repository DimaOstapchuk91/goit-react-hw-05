import s from './MovieCardItem.module.css';

const MovieCardItem = ({ itemData }) => {
  const posterPath = itemData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${itemData.poster_path}`
    : 'https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';

  return (
    <div className={s.movieItem}>
      <img
        className={s.moviePoster}
        src={posterPath}
        alt={itemData.original_title}
        onError={e => {
          e.target.src =
            'https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
        }}
      />
      <div className={s.movieInfo}>
        <h2 className={s.movieTitle}>{itemData.title}</h2>
        <p className={s.release}>Release:{itemData.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCardItem;
