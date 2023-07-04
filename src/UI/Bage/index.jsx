import { PropTypes } from 'prop-types';
import cn from 'classnames';
import styles from './Badge.module.css';

const Badge = ({ size, children }) => {
  return (
    <span className={cn(styles.badge, { [styles.xs]: size === 'xs' })}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

export default Badge;
