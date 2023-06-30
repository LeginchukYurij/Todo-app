import cn from 'classnames';
import styles from './Badge.module.css';

const Badge = ({ size, children }) => {
  return (
    <span className={cn(styles.badge, { [styles.xs]: size === 'xs' })}>
      {children}
    </span>
  );
};

export default Badge;
