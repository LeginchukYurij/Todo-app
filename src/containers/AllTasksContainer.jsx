import { useSelector } from 'react-redux';
import List from '../UI/List';
import Task from '../components/Task';

const AllTasksContainer = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filtered = tasks
    .filter(
      ({ done, due_date }) => !done && due_date.seconds * 1000 >= Date.now()
    )
    .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1));

  return (
    <List title='Active tasks'>
      {tasks.length ? (
        filtered.map(({ id, name, date, due_date, isChange }) => {
          return (
            <li key={id}>
              <Task
                id={id}
                date={date.seconds}
                due_date={due_date.seconds}
                isChange={isChange}>
                {name}
              </Task>
            </li>
          );
        })
      ) : (
        <span>No active tasks</span>
      )}
    </List>
  );
};

export default AllTasksContainer;
