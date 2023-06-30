import uniqid from 'uniqid';
import MenuCol from '../MenuCol';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';

const Sidebar = () => {
  const mainMenu = [
    {
      id: uniqid(),
      name: 'All tasks',
      href: '/',
    },

    {
      id: uniqid(),
      name: 'Complited',
      href: '/complited',
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <Search />

      <MenuCol
        title='Tasks'
        obj={mainMenu}
      />
    </aside>
  );
};

export default Sidebar;
