import PropTypes from 'prop-types';
import css from './image-gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

function ImageGallery({ gallery, onClick }) {
  return (
    <ul className={css.gallery}>
      {gallery.map(image => {
        const { largeImageURL, tags } = image;
        return (
          <ImageGalleryItem
            image={image}
            key={image.id}
            onClick={() => onClick({ largeImageURL, tags })}
          />
        );
      })}
    </ul>
  );
}
