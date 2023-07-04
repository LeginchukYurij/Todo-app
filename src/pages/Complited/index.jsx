import { useSelector } from 'react-redux';
import List from '../../UI/List';
import Task from '../../components/Task';
import Htag from '../../UI/Htag';

const Complited = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const complited = tasks
    .filter(({ done }) => done)
    .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1));

  return (
    <>
      <Htag level={1}>Complited</Htag>
      {complited.length ? (
        <List>
          {complited.map(({ id, name, done, date, due_date, isChange }) => {
            return (
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
            );
          })}
        </List>
      ) : (
        'No complited tasks'
      )}
    </>
  );
};

export default Complited;
