import PropTypes from 'prop-types';
import css from './searchbar.module.css';

export default Searchbar;

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

function Searchbar({ onSubmit }) {
  const onSearchSubmit = event => {
    event.preventDefault();
    const searchString = event.currentTarget.elements.search.value
      .trim()
      .toLowerCase();
    onSubmit({ searchString });
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSearchSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
