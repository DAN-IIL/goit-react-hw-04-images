// import React from "react";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './image-gallery.module.css';

const ImageGallery = ({ items, showLargeImage }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <ImageGalleryItem
      onClick={() => showLargeImage({ largeImageURL, tags })}
      key={id}
      src={webformatURL}
      alt={tags}
    />
  ));

  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  showLargeImage: PropTypes.func.isRequired,
};
