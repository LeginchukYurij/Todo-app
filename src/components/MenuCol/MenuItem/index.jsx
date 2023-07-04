import { PropTypes } from 'prop-types';
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

MenuItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

export default MenuItem;
