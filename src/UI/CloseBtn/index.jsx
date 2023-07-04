import { PropTypes } from 'prop-types';
import styles from './CloseBtn.module.css';

const CloseBtn = ({ onClick }) => {
  return (
    <button
      type='button'
      className={styles.close}
      onClick={onClick}></button>
  );
};

CloseBtn.propTypes = {
  onClick: PropTypes.func,
};

export default CloseBtn;
