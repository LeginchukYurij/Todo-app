import Htag from '../Htag';
import styles from './List.module.css';

const List = ({ title, children }) => {
  return (
    <>
      {title && <Htag level={2}>{title}</Htag>}
      <ul className={styles.list}>{children}</ul>
    </>
  );
};

export default List;
