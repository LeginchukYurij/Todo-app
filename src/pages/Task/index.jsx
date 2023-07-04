import styles from './Task.module.css';
import Htag from '../../UI/Htag';
import Text from '../../UI/Text';
import Button from '../../UI/Button';
import Badge from '../../UI/Bage';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getAllitems,
  readItem,
  deleteItem,
} from '../../firebase/firebaseFunctions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../slices/loaderSlice';
import { setError } from '../../slices/errorSlice';
import { fbTimestampToDate } from '../../utils';
import { getAll } from '../../slices/tasksSlice';

const Task = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const goHome = () =>
    navigate({
      pathname: '/',
    });

  const fetchTask = async () => {
    dispatch(setLoading(true));
    dispatch(setError({ bool: false }));

    const { data, isComplete } = await readItem(id, 'tasks');

    if (isComplete) {
      setTask(data);
      dispatch(setLoading(false));

      return;
    }

    dispatch(setLoading(false));
    dispatch(setError({ bool: true, message: 'Failed to read the task' }));
  };

  const deleteTask = async () => {
    dispatch(setLoading(true));
    dispatch(setError({ bool: false }));

    const isComplete = await deleteItem(id, 'tasks');

    if (isComplete) {
      goHome();

      const tasks = await getAllitems('tasks');
      dispatch(getAll(tasks));
      dispatch(setLoading(false));

      return;
    }

    dispatch(setLoading(false));
    dispatch(setError({ bool: true, message: 'Failed to delete the task' }));
  };

  useEffect(() => {
    fetchTask();
  }, [id]);

  if (task) {
    const { name, description, date, due_date, isChange } = task;

    return (
      <>
        <article className={styles.article}>
          <Htag level={1}>{name}</Htag>
          <Text>{description}</Text>

          <div className={styles.info}>
            <div className={styles['info__item']}>
              Created: <Badge>{fbTimestampToDate(date.seconds)}</Badge>
            </div>
            <div className={styles['info__item']}>
              Due date: <Badge>{fbTimestampToDate(due_date.seconds)}</Badge>
            </div>
            {isChange?.bool && (
              <div className={styles['info__item']}>
                Last change:{' '}
                <Badge>{fbTimestampToDate(isChange?.date?.seconds)}</Badge>
              </div>
            )}
          </div>
        </article>

        <div className={styles.actions}>
          <Button
            size='xl'
            skin='gray'
            onClick={deleteTask}>
            Delete
          </Button>
          <Button
            href={`/task/edit/${id}`}
            size='xl'>
            Edit
          </Button>
        </div>
      </>
    );
  }
};

export default Task;
