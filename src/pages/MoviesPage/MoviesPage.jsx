import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getSerchMovie } from '../../services/api';
import { Field, Formik, Form } from 'formik';
import { useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const initialValues = { query: '' };

  const handleSubmit = values => {
    if (!values.query) {
      return setSearchParams({});
    }

    searchParams.set('query', values.query);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }

      const data = await getSerchMovie(query.toLocaleLowerCase());
      setSearchMovie(data);
    };
    getData();
  }, [query]);

  return (
    <div>
      <div className={s.inputWraper}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field
              className={s.inputSearch}
              name='query'
              placeholder='Enter your movie'
            />
            <button className={s.searchBtn} type='submit'>
              Search Movie
            </button>
          </Form>
        </Formik>
      </div>
      {searchMovie && <MovieList movieData={searchMovie} />}
    </div>
  );
};
export default MoviesPage;
