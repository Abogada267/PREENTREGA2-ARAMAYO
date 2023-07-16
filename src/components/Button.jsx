import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ color, label, callback }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={callback} className={styles.button}>
      {label}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default Button;

