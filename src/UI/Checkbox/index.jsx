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

export default Checkbox;
