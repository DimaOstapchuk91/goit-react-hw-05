import { Link, Outlet, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { useEffect, useState } from 'react';
import { getFullDataMovie } from '../../services/api';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();

  const [fullData, setFulldata] = useState();
  console.log(fullData);
  useEffect(() => {
    const getFullData = async () => {
      const fullDataMovie = await getFullDataMovie(moviesId);
      setFulldata(fullDataMovie);
      console.log(moviesId);
    };
    getFullData();
  }, [moviesId]);

  if (!fullData) return <h2>Loading...</h2>;
  return (
    <div className={s.detailsWrap}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${fullData.poster_path}`}
          alt={fullData.title}
        />
        <div>
          <h2>{fullData.title}</h2>
          <p>{fullData.popularity}%</p>
          <h3>Owerview</h3>
          <p>{fullData.overview}</p>
          <h3>Genres</h3>
          <p>
            {fullData.genres.map(item => (
              <span key={item.id}>{item.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsPage;
