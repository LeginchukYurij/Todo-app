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
