import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './AddButton.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

const AddButton = ({ href, children }) => {
  return (
    <NavLink
      to={href}
      className={styles['add-button']}>
      <AiOutlinePlus />
      {children}
    </NavLink>
  );
};

AddButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default AddButton;
