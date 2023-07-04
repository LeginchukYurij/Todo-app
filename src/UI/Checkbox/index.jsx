import { PropTypes } from 'prop-types';
import styles from './Checkbox.module.css';
import { BsCheck } from 'react-icons/bs';

const Checkbox = ({ value, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        checked={value}
        onChange={onChange}
      />

      <div className={styles.mask}>
        <BsCheck />
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
