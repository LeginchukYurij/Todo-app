import styles from './TextareaField.module.css';

const TextareaField = ({ id, value, label, name, placeholder, onChange }) => {
  return (
    <div className={styles['form-group']}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
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

export default TextareaField;
