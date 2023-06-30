import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Datepicker.module.css';

export const Datepicker = ({ name, selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      placeholderText='Due date'
      className={styles.datepicker}
      dateFormat='MMMM d, yyyy'
      name={name}
      onChange={onChange}
    />
  );
};

export default Datepicker;
