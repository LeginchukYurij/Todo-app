import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({ href, type, size, skin, children, onClick }) => {
  const compileClassNames = cn(styles.primery, {
    [styles.xs]: size.includes('xs'),
    [styles.xl]: size.includes('xl'),
    [styles.fullH]: size.includes('fullH'),
    [styles.fullW]: size.includes('fullW'),
    [styles.gray]: skin === 'gray',
  });

  return (
    <>
      {href ? (
        <NavLink
          to={href}
          className={compileClassNames}>
          {children}
        </NavLink>
      ) : (
        <button
          type={type || 'button'}
          className={compileClassNames}
          onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
