import { PropTypes } from 'prop-types';
import style from './Text.module.css';

const Text = ({ children }) => {
  return <div className={style.text}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
