import TaskForm from '../../components/TaskForm';
import { getAllitems, addItem } from '../../firebase/firebaseFunctions';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../slices/loaderSlice';
import { setError } from '../../slices/errorSlice';
import { getAll } from '../../slices/tasksSlice';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goHome = () =>
    navigate({
      pathname: '/',
    });

  const onSubmitHandler = async (obj) => {
    dispatch(setLoading(true));
    dispatch(setError({ bool: false }));
    const isComplite = await addItem('tasks', obj);

    if (isComplite) {
      const tasks = await getAllitems('tasks');
      dispatch(getAll(tasks));
      dispatch(setLoading(false));
      goHome();

      return;
    }
    dispatch(setLoading(false));
    dispatch(setError({ bool: true, message: 'Failed to add new task' }));
  };

  return (
    <>
      <TaskForm
        add={true}
        reset={true}
        onSubmit={onSubmitHandler}
      />
    </>
  );
};

export default Add;
