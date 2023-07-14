import PropTypes from 'prop-types';
import styles from './largeImage.module.css';

const LargeImage = ({ largeImageURL, tags }) => {
  return (
    <div>
          <img src={largeImageURL} alt={tags} className={styles.large_img} />
    </div>
  );
};

LargeImage.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default LargeImage;