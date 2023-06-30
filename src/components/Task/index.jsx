import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import Checkbox from '../../UI/Checkbox';
import styles from './Task.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Badge from '../../UI/Bage';

const Task = ({ id, name, date, dueDate, isChange, done, children }) => {
  return (
    <div className={cn(styles.task, { [styles.done]: done })}>
      <Checkbox value={done ? 'checked' : ''} />
      <NavLink href={`/task/${id}`}>
        <strong>{children}</strong>
        {date && <Badge size='xs'>Created: {date}</Badge>}
        {dueDate && <Badge size='xs'>Due date: {dueDate}</Badge>}
        <AiOutlineArrowRight />
      </NavLink>
    </div>
  );
};

export default Task;
