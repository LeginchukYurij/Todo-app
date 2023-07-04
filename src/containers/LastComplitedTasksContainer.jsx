import { useSelector } from 'react-redux';
import List from '../UI/List';
import Task from '../components/Task';

const LastComplitedTasksContainer = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const complited = tasks
    .filter(({ done }) => done)
    .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1));

  return (
    Boolean(complited.length) && (
      <List title='Last complited'>
        {complited.map(
          ({ id, name, done, date, due_date, isChange }, index) => {
            return (
              index <= 3 && (
                <li key={id}>
                  <Task
                    id={id}
                    done={done}
                    date={date.seconds}
                    due_date={due_date.seconds}
                    isChange={isChange}>
                    {name}
                  </Task>
                </li>
              )
            );
          }
        )}
      </List>
    )
  );
};

export default LastComplitedTasksContainer;
