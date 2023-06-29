import Sidebar from '../Sidebar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles['app-layout']}>
      <Sidebar />

      <main className='main-content'>{children}</main>
    </div>
  );
};

export default Layout;
