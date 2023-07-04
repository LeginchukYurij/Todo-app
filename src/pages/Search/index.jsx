import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import List from '../../UI/List';
import Task from '../../components/Task';
import Htag from '../../UI/Htag';

const Search = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  let [searchParams, setSearchParams] = useSearchParams();

  const params = [];

  for (let entry of searchParams.entries()) {
    params.push(entry);
  }

  const searchParam = params[0][1].toLowerCase();

  const filtered = tasks
    .filter(({ name }) => name.toLowerCase().includes(searchParam))
    .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1));

  return (
    <>
      <Htag level={1}>Search By: {searchParam}</Htag>
      {filtered.length ? (
        <List>
          {filtered.map(({ id, name, done, date, due_date, isChange }) => {
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
        'No results found'
      )}
    </>
  );
};

export default Search;
