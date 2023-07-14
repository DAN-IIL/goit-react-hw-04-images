import PropTypes from 'prop-types';
import styles from './button.module.css';

const ButtonUp = ({ onClick }) => {
  return (
    <button className={styles.up} onClick={onClick} type="button">
      Up
    </button>
  );
};

ButtonUp.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonUp;