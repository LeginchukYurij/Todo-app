import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Datepicker.module.css';

export const Datepicker = ({ name, label, selected, onChange }) => {
  return (
    <div className={styles.container}>
      {label && <span>{label}:</span>}
      <DatePicker
        selected={selected}
        placeholderText='Due date'
        className={styles.datepicker}
        dateFormat='MMMM d, yyyy'
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

Datepicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default Datepicker;
