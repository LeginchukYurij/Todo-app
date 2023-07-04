import { PropTypes } from 'prop-types';
import styles from './TaskForm.module.css';
import { Timestamp } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';

import InputField from '../../UI/InputField';
import TextareaField from '../../UI/TextareaField';
import Button from '../../UI/Button';
import Datepicker from '../../UI/Datepicker';

const TaskForm = ({
  name,
  description,
  due_date,
  done = false,
  date = Timestamp.now(),
  add = false,
  reset = false,
  save = false,
  onSubmit,
  isEdit = false,
}) => {
  const formRef = useRef(null);

  const [dueDate, setDueDate] = useState(
    due_date ? new Date(due_date?.seconds * 1000) : new Date()
  );

  if (isEdit) {
    done = !done;
  }

  const formik = useFormik({
    initialValues: {
      name: name || '',
      description: description || '',
      due_date: dueDate,
    },
    onSubmit: (values) => {
      onSubmit({ ...values, date, done });
    },
    validate: (values) => {
      let errors = {};
      if (!values.name || values.name == '') {
        errors.name = 'Required!';
      }

      if (!values.description || values.description == '') {
        errors.description = 'Required!';
      }

      if (!values.due_date || values.due_date == '') {
        errors.due_date = 'Required!';
      }

      return errors;
    },
  });

  const onResetHandler = () => {
    formik.values.name = '';
    formik.values.description = '';
    setDueDate(new Date());
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={formik.handleSubmit}>
      <InputField
        id='name'
        type='text'
        name='name'
        value={formik.values.name}
        isError={formik.errors.name}
        placeholder='Title'
        onChange={formik.handleChange}
      />

      <TextareaField
        id='description'
        name='description'
        value={formik.values.description}
        isError={formik.errors.description}
        placeholder='Description'
        onChange={formik.handleChange}
      />

      <Datepicker
        name='due_date'
        label='Due date'
        selected={dueDate}
        isError={formik.errors.due_date}
        onChange={(date) => {
          formik.values.due_date = date;
          setDueDate(date);
        }}
      />

      <div className={styles.actions}>
        {add && (
          <Button
            type='submit'
            size='xl'>
            Add new
          </Button>
        )}

        {reset && (
          <Button
            onClick={onResetHandler}
            skin='gray'
            type='button'
            size='xl'>
            Reset
          </Button>
        )}

        {save && (
          <Button
            type='submit'
            size='xl'>
            Save
          </Button>
        )}
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.object,
  due_date: PropTypes.object,
  done: PropTypes.bool,
  children: PropTypes.node,
  add: PropTypes.bool,
  reset: PropTypes.bool,
  save: PropTypes.bool,
  isEdit: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default TaskForm;
