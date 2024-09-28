import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getSerchMovie } from '../../services/api';
import { Field, Formik, Form } from 'formik';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState();
  const [query, setQuery] = useState();

  const initialValues = { query: '' };

  const handleSubmit = values => {
    setQuery(values.query);
    // console.log(values.query);
  };

  console.log(searchMovie);

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

  // if (!searchMovie) return <h2>Loading...</h2>;
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='query' />
          <button type='submit'>Search Movie</button>
        </Form>
      </Formik>
      {searchMovie && <MovieList movieData={searchMovie} />}
    </div>
  );
};
export default MoviesPage;
