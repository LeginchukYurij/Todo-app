import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ name, href }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? styles['menu-item'] + ' ' + styles['active']
          : styles['menu-item']
      }
      to={href}>
      {name}
    </NavLink>
  );
};

export default MenuItem;
