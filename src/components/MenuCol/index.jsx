import { PropTypes } from 'prop-types';
import Htag from '../../UI/Htag';
import styles from './MenuCol.module.css';
import MenuItem from './MenuItem';

const MenuCol = ({ title, obj }) => {
  return (
    <div className={styles['menu-col']}>
      <Htag level={3}>{title}</Htag>

      {obj && (
        <ul className={styles['menu-col__list']}>
          {obj.map(({ id, name, href }) => (
            <li key={id}>
              <MenuItem
                key={id}
                name={name}
                href={href}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MenuCol.propTypes = {
  title: PropTypes.string,
  obj: PropTypes.array,
};

export default MenuCol;
