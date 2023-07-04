import { PropTypes } from 'prop-types';
import Sidebar from '../Sidebar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles['app-layout']}>
      <Sidebar />

      <main className={styles['main-content']}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
