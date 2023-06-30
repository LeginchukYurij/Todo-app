import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import Checkbox from '../../UI/Checkbox';
import styles from './Task.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Badge from '../../UI/Bage';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const Task = ({ id, date, dueDate, isChange, done, children }) => {
  return (
    <div className={cn(styles.task, { [styles.done]: done })}>
      <Checkbox value={done ? 'checked' : ''} />
      <NavLink to={`/task/${id}`}>
        <strong>{children}</strong>
        {date && (
          <Badge size='xs'>
            Created: {new Date(date * 1000).toLocaleString('en-En', options)}
          </Badge>
        )}
        {isChange && <Badge size='xs'>Last change: {isChange}</Badge>}
        {dueDate && (
          <Badge size='xs'>
            Due date:{' '}
            {new Date(dueDate * 1000).toLocaleString('en-En', options)}
          </Badge>
        )}
        <AiOutlineArrowRight />
      </NavLink>
    </div>
  );
};

export default Task;
