import { PropTypes } from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import Checkbox from '../../UI/Checkbox';
import styles from './Task.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Badge from '../../UI/Bage';
import { updateItem, getAllitems } from '../../firebase/firebaseFunctions';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../slices/loaderSlice';
import { setError } from '../../slices/errorSlice';
import { getAll } from '../../slices/tasksSlice';
import { fbTimestampToDate } from '../../utils';

const Task = ({ id, date, due_date, done, children }) => {
  const dispatch = useDispatch();

  const onChangeHandler = async () => {
    dispatch(setLoading(true));
    dispatch(setError({ bool: false }));
    const isComplite = await updateItem(id, 'tasks', {
      done: !done,
    });

    if (isComplite) {
      const tasks = await getAllitems('tasks');
      dispatch(getAll(tasks));
      dispatch(setLoading(false));

      return;
    }

    dispatch(setError({ bool: true, message: 'Failed to update the task' }));
  };

  return (
    <div className={cn(styles.task, { [styles.done]: done })}>
      <Checkbox
        value={done ? 'checked' : ''}
        onChange={onChangeHandler}
      />
      <NavLink to={`/task/${id}`}>
        <strong>{children}</strong>
        {date && <Badge size='xs'>Created: {fbTimestampToDate(date)}</Badge>}

        {due_date && (
          <Badge size='xs'>Due date: {fbTimestampToDate(due_date)}</Badge>
        )}
        <AiOutlineArrowRight />
      </NavLink>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  date: PropTypes.number,
  due_date: PropTypes.number,
  done: PropTypes.bool,
  children: PropTypes.node,
};

export default Task;
