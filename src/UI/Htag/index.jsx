import { PropTypes } from 'prop-types';

const Htag = ({ level, children }) => {
  return (
    <>
      {level === 1 && <h1>{children}</h1>}
      {level === 2 && <h2>{children}</h2>}
      {level === 3 && <h3>{children}</h3>}
      {level === 4 && <h4>{children}</h4>}
      {level === 5 && <h5>{children}</h5>}
      {level === 6 && <h6>{children}</h6>}
    </>
  );
};

Htag.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

export default Htag;
