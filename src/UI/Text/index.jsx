import style from './Text.module.css';

const Text = ({ children }) => {
  return <div className={style.text}>{children}</div>;
};

export default Text;
