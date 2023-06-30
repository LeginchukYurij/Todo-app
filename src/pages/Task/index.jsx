import styles from './Task.module.css';
import Htag from '../../UI/Htag';
import Text from '../../UI/Text';
import Button from '../../UI/Button';
import Badge from '../../UI/Bage';
import { useParams } from 'react-router-dom';
import { readItem } from '../../firebase/firebaseFunctions';
import { useEffect, useState } from 'react';

const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const fetchTask = async () => {
    const { data } = await readItem(id, 'tasks');
    setTask(data);
  };

  useEffect(() => {
    fetchTask();
  }, [id]);

  console.log(task);

  // const { name, description, done, date, due_date, isChange } = task;

  return (
    <>
      {/* <article className={styles.article}>
        <Htag level={1}>{name}</Htag>
        <Text>{description}</Text>

        <div className={styles.info}>
          date &&
          {
            <div className={styles['info__item']}>
              Created: <Badge>{date}</Badge>
            </div>
          }
          <div className={styles['info__item']}>
            Last change: <Badge>{isChange}</Badge>
          </div>
          <div className={styles['info__item']}>
            Due date: <Badge>{due_date}</Badge>
          </div>
        </div>
      </article>

      <div className={styles.actions}>
        <Button
          size='xl'
          skin='gray'>
          Delete
        </Button>
        <Button
          href='/task/edit/3'
          size='xl'>
          Edit
        </Button>
      </div> */}
    </>
  );
};

export default Task;
