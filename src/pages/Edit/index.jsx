import { useParams, useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import {
  readItem,
  updateItem,
  getAllitems,
} from '../../firebase/firebaseFunctions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from '../../slices/tasksSlice';
import { setLoading } from '../../slices/loaderSlice';
import { setError } from '../../slices/errorSlice';
import TaskForm from '../../components/TaskForm';

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const onSubmitHandler = async (obj) => {
    dispatch(setLoading(true));
    dispatch(setError({ bool: false }));
    const isComplite = await updateItem(id, 'tasks', {
      ...obj,
      isChange: {
        bool: true,
        date: Timestamp.now(),
      },
    });

    if (isComplite) {
      const tasks = await getAllitems('tasks');
      dispatch(getAll(tasks));
      dispatch(setLoading(false));
      navigate(-1);
      return;
    }

    dispatch(setError({ bool: true, message: 'Failed to update the task' }));
  };

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

  useEffect(() => {
    fetchTask();
  }, [id]);

  if (task) {
    return (
      <TaskForm
        {...task}
        onSubmit={onSubmitHandler}
        save={true}
        isEdit={true}
      />
    );
  }
};

export default Edit;
