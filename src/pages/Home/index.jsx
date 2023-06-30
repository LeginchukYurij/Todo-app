import AddButton from '../../UI/AddButton';
import Badge from '../../UI/Bage';
import Htag from '../../UI/Htag';
import { getFormattedDate } from '../../utils';
import Task from '../../components/Task';
import List from '../../UI/List';

const Home = () => {
  const date = getFormattedDate(new Date());

  return (
    <>
      <Htag level={1}>
        Today <Badge>{date}</Badge>
      </Htag>

      <AddButton href='/task/new'>Add New Task</AddButton>

      <List>
        <li>
          <Task
            date='June 30, 2023'
            dueDate='June 30, 2023'>
            Task 1
          </Task>
        </li>
        <li>
          <Task done={true}>Task 1</Task>
        </li>
        <li>
          <Task>Task 1</Task>
        </li>
      </List>

      <List title='Overdue'>
        <li>
          <Task
            date='June 30, 2023'
            dueDate='June 30, 2023'>
            Task 1
          </Task>
        </li>
      </List>

      <List title='Last complited'>
        <li>
          <Task
            done={true}
            date='June 30, 2023'
            dueDate='June 30, 2023'>
            Task 1
          </Task>
        </li>
        <li>
          <Task done={true}>Task 1</Task>
        </li>
        <li>
          <Task done={true}>Task 1</Task>
        </li>
      </List>
    </>
  );
};

export default Home;
