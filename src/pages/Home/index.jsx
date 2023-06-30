import AddButton from '../../UI/AddButton';
import Badge from '../../UI/Bage';
import Htag from '../../UI/Htag';
import { getFormattedDate } from '../../utils';
import Task from '../../components/Task';
import List from '../../UI/List';
import AllTasksContainer from '../../containers/AllTasksContainer';
import OverdueTasksContainer from '../../containers/OverdueTasksContainer';
import LastComplitedTasksContainer from '../../containers/LastComplitedTasksContainer';

const Home = () => {
  const date = getFormattedDate(new Date());

  return (
    <>
      <Htag level={1}>
        All tasks <Badge>{date}</Badge>
      </Htag>

      <AddButton href='/task/new'>Add New Task</AddButton>

      <AllTasksContainer />

      <OverdueTasksContainer />

      <LastComplitedTasksContainer />
    </>
  );
};

export default Home;
