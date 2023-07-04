import { useSelector } from 'react-redux';
import styles from './Loader.module.css';

const Loader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    isLoading && (
      <div className={styles['dot-spinner-container']}>
        <div className={styles['dot-spinner']}>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
          <div className={styles['dot-spinner__dot']}></div>
        </div>
      </div>
    )
  );
};

export default Loader;
