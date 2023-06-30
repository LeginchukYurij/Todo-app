import styles from './Task.module.css';
import Htag from '../../UI/Htag';
import Text from '../../UI/Text';
import Button from '../../UI/Button';
import Badge from '../../UI/Bage';

const Task = () => {
  return (
    <>
      <article className={styles.article}>
        <Htag level={1}>Task 1</Htag>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quas
          perferendis dolore voluptatem aliquid asperiores hic magni impedit
          sunt praesentium earum, veritatis quam eos accusantium cumque eligendi
          odit tempora animi!
        </Text>

        <div className={styles.info}>
          <div className={styles['info__item']}>
            Created: <Badge>June 30, 2023</Badge>
          </div>
          <div className={styles['info__item']}>
            Last change: <Badge>June 30, 2023</Badge>
          </div>
          <div className={styles['info__item']}>
            Due date: <Badge>June 30, 2023</Badge>
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
      </div>
    </>
  );
};

export default Task;
