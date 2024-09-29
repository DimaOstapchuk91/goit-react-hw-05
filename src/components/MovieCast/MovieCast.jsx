import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataCredits } from '../../services/api';
import s from './MovieCast.module.css';
import Loader from '../Loader/Loader';

const MovieCast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getCastData = async () => {
      const castData = await getDataCredits(moviesId);
      setCast(castData);
    };

    getCastData();
  }, [moviesId]);

  if (!cast) return <Loader />;

  return (
    <ul className={s.castList}>
      {cast.map(item => {
        const avatarPath = item.profile_path
          ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
          : 'https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';

        return (
          <li className={s.itemCast} key={item.id}>
            <img
              src={avatarPath}
              alt={item.name}
              className={s.castImg}
              onError={e => {
                e.target.src =
                  'https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
              }}
            />
            <div className={s.castInfo}>
              <p className={s.nameCast}>{item.name}</p>
              <p className={s.character}>
                <span>Character:</span> {item.character}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieCast;
