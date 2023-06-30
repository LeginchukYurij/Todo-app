import styles from './TaskForm.module.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import InputField from '../../UI/InputField';
import TextareaField from '../../UI/TextareaField';
import Button from '../../UI/Button';
import Datepicker from '../../UI/Datepicker';

const TaskForm = ({
  title,
  description,
  dueDate,
  onAdd = null,
  onReset = null,
  onSave = null,
}) => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  const goHome = () =>
    navigate({
      pathname: '/',
    });

  const formik = useFormik({
    initialValues: {
      title: title || '',
      description: description || '',
      dueDate: dueDate || startDate,
    },
    onSubmit: (values) => {
      console.log(values);
      // goHome();
    },
  });

  return (
    <form
      className={styles.form}
      onSubmit={formik.handleSubmit}>
      <InputField
        id='title'
        type='text'
        name='title'
        value={formik.values.title}
        placeholder='Title'
        onChange={formik.handleChange}
      />

      <TextareaField
        id='description'
        name='description'
        value={formik.values.description}
        placeholder='Description'
        onChange={formik.handleChange}
      />

      <Datepicker
        name='dueDate'
        selected={startDate}
        onChange={(date) => {
          formik.values.dueDate = date;
          setStartDate(date);
        }}
      />

      <div className={styles.actions}>
        {onAdd && (
          <Button
            onClick={onAdd}
            type='submit'
            size='xl'>
            Add new
          </Button>
        )}

        {onReset && (
          <Button
            onClick={onReset}
            skin='gray'
            type='button'
            size='xl'>
            Reset
          </Button>
        )}

        {onSave && (
          <Button
            onClick={onSave}
            type='button'
            size='xl'>
            Save
          </Button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
