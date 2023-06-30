import styles from './InputField.module.css';

const InputField = ({
  id,
  value,
  label,
  name,
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
        className={styles['form-control']}
        placeholder={placeholder}
        autoComplete='off'
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
