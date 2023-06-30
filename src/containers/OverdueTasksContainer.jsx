import { useSelector } from 'react-redux';
import List from '../UI/List';
import Task from '../components/Task';

const LastComplitedTasksContainer = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <List title='Overdue'>
      {tasks
        .filter(({ done }) => done)
        .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1))
        .map(({ id, name, date, due_date, isChange }) => {
          return (
            <li key={id}>
              <Task
                id={id}
                date={date.seconds}
                dueDate={due_date.seconds}
                isChange={isChange}>
                {name}
              </Task>
            </li>
          );
        })}
    </List>
  );
};

export default LastComplitedTasksContainer;
