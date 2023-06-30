import { useSelector } from 'react-redux';
import List from '../../UI/List';
import Task from '../../components/Task';
import Htag from '../../UI/Htag';

const Complited = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <>
      <Htag level={1}>Complited</Htag>
      <List>
        {tasks
          .filter(({ done }) => done)
          .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1))
          .map(({ id, name, done, date, due_date, isChange }, index) => {
            return (
              <li key={id}>
                <Task
                  id={id}
                  done={done}
                  date={date.seconds}
                  dueDate={due_date.seconds}
                  isChange={isChange}>
                  {name}
                </Task>
              </li>
            );
          })}
      </List>
    </>
  );
};

export default Complited;
