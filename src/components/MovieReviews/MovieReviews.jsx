import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataReviews } from '../../services/api';

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState();
  console.log(reviews);

  useEffect(() => {
    const getCastData = async () => {
      const castData = await getDataReviews(moviesId);
      setReviews(castData);
    };
    getCastData();
  }, [moviesId]);

  if (!reviews) return <h2>Loading...</h2>;

  return (
    <ul>
      {reviews.map(review => {
        const avatarPath = review.author_details.avatar_path
          ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
          : 'https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
        return (
          <li key={review.id}>
            <img
              src={avatarPath}
              alt={review.author_details.username}
              onError={e => {
                e.target.src =
                  'https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
              }}
            />
            <h2>Author: {review.author}</h2>
            <p>Comment: {review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieReviews;
