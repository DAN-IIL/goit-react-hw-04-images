import PropTypes from 'prop-types';
import css from './largeImage.module.css';

export default Image;

Image.propTypes = {
  URL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

function Image({ URL, tags = '' }) {
  return (
    <>
      <img className={css.image} src={URL} alt={tags}></img>
    </>
  );
}
