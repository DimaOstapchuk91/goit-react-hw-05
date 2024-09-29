import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getFullDataMovie } from '../../services/api';
import clsx from 'clsx';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [fullData, setFulldata] = useState();

  const location = useLocation();
  const goBack = useRef(location.state);

  const changeClassLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  useEffect(() => {
    const getFullData = async () => {
      const fullDataMovie = await getFullDataMovie(moviesId);

      setFulldata(fullDataMovie);
    };

    getFullData();
  }, [moviesId]);

  if (!fullData) return <Loader />;

  const posterPath = fullData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${fullData.poster_path}`
    : 'https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';

  return (
    <div className={s.detailsWrap}>
      <div>
        <NavLink to={goBack.current ?? '/movie'} className={s.goBack}>
          ⬅ Go Back
        </NavLink>
      </div>
      <div className={s.movieWrap}>
        <img
          src={posterPath}
          alt={fullData.title}
          className={s.moviePoster}
          onError={e => {
            e.target.src =
              'https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
          }}
        />
        <div className={s.movieInfo}>
          <h2 className={s.titleMovie}>{fullData.title}</h2>
          <p className={s.ratingMovie}>
            Rating: <span>{fullData.popularity}%</span>
          </p>
          <div className={s.owerviewWrap}>
            <h3 className={s.miniTitle}>Owerview:</h3>
            <p>{fullData.overview}</p>
          </div>
          <div className={s.genresWrap}>
            <h3 className={s.miniTitle}>Genres:</h3>
            <p className={s.genres}>
              {fullData.genres.map(item => (
                <span key={item.id}>{item.name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className={s.addit}>
        <h3 className={s.additTitle}>Additional Information:</h3>
        <ul className={s.infoList}>
          <li>
            <NavLink to='cast' className={changeClassLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to='reviews' className={changeClassLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetailsPage;
