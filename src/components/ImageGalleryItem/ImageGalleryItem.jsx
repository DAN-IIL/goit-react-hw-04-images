import PropTypes from 'prop-types';
import Image from 'components/LargeImage/LargeImage';
import css from './imageGalleryItem.module.css';

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};

function ImageGalleryItem({ image, onClick }) {
  const { webformatURL, tags } = image;

  return (
    <li className={css.gallery_item} onClick={onClick}>
      <Image className={css.image} URL={webformatURL} tags={tags} />
    </li>
  );
}
