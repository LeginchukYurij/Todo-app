import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../slices/tasksSlice';
import { setLoading } from '../slices/loaderSlice';
import { getAllitems } from '../firebase/firebaseFunctions';
import { setError } from '../slices/errorSlice';

export const useGetAll = () => {
  const dispath = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const fetchData = async () => {
    try {
      dispath(setLoading(true));

      const tasks = await getAllitems('tasks');
      dispath(getAll(tasks));

      dispath(setLoading(false));
      dispath(setError({ bool: false }));
    } catch (error) {
      console.log(error);
      dispath(setLoading(false));
      dispath(
        setError({
          bool: true,
          message: 'Failed to load all the tasks. Reload the page',
        })
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { tasks };
};
