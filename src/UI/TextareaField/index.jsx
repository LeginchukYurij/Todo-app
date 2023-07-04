import { PropTypes } from 'prop-types';
import cn from 'classnames';
import styles from './TextareaField.module.css';

const TextareaField = ({
  id,
  value,
  label,
  name,
  isError,
  placeholder,
  onChange,
}) => {
  return (
    <div className={styles['form-group']}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
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

TextareaField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  isError: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextareaField;
