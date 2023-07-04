import { PropTypes } from 'prop-types';
import cn from 'classnames';
import styles from './InputField.module.css';

const InputField = ({
  id,
  value,
  label,
  name,
  isError,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className={styles['form-group']}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className={cn(styles['form-control'], {
          [styles['form-control__error']]: isError,
        })}
        placeholder={placeholder}
        autoComplete='off'
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  isError: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
