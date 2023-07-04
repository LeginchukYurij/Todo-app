import { useDispatch, useSelector } from 'react-redux';
import styles from './Error.module.css';
import CloseBtn from '../CloseBtn';
import { setError } from '../../slices/errorSlice';
import { useEffect } from 'react';

const Error = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.error.isError);
  const message = useSelector((state) => state.error.message);

  const onCloseHandler = () => {
    dispatch(setError(false));
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!e.target.closest(`.${styles['error-message']}`)) {
        dispatch(setError(false));
      }
    });
  }, []);

  return (
    isError && (
      <div className={styles['error-message-container']}>
        <div className={styles['error-message']}>
          <CloseBtn onClick={onCloseHandler} />
          {message}
        </div>
      </div>
    )
  );
};

export default Error;
