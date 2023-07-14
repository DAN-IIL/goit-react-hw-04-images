import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={styles.ImageGalleryItem_image}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
