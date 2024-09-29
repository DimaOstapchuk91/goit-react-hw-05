import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataReviews } from '../../services/api';
import s from './MovieReviews.module.css';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getCastData = async () => {
      const castData = await getDataReviews(moviesId);
      setReviews(castData);
    };

    getCastData();
  }, [moviesId]);

  if (!reviews) return <Loader />;

  if (reviews.length === 0) {
    return <h2 className={s.notFoundData}>No one has left a review...</h2>;
  }

  return (
    <ul className={s.reviewsList}>
      {reviews.map(review => {
        const avatarPath = review.author_details.avatar_path
          ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
          : 'https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';

        return (
          <li className={s.reviewItem} key={review.id}>
            <img
              src={avatarPath}
              alt={review.author_details.username}
              className={s.reviewImg}
              onError={e => {
                e.target.src =
                  'https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
              }}
            />
            <div className={s.reviewInfo}>
              <h2 className={s.reviewTitle}>
                Author: <span>{review.author}</span>
              </h2>
              <p className={s.reviewTitle}>Comment:</p>
              <p className={s.reviewComment}> {review.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieReviews;
