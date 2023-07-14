import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.load_more} onClick={onClick} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
