import styles from './Search.module.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import InputField from '../../UI/InputField';
import Button from '../../UI/Button';

const Search = () => {
  const navigate = useNavigate();

  const goToSearchPage = (param) =>
    navigate({
      pathname: '/search',
      search: `?search=${param}`,
    });

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      goToSearchPage(values.search);
    },
    validate: (values) => {
      let errors = {};
      if (!values.search || values.search == '') {
        errors.search = 'Required!';
      }

      return errors;
    },
  });

  return (
    <>
      <form
        className={styles['search-module']}
        onSubmit={formik.handleSubmit}>
        <InputField
          id='search'
          type='text'
          name='search'
          value={formik.values.search}
          isError={formik.errors.search}
          placeholder='Search'
          onChange={formik.handleChange}
        />

        <Button
          type='submit'
          size='xs fullH'>
          Enter
        </Button>
      </form>
    </>
  );
};

export default Search;
