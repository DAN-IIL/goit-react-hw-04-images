import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './searchbar.module.css';

const Searchbar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if(name === 'search'){setSearch(value)}
  };


const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    reset();
  };

  function reset() {
    setSearch('')
  } 

  return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={handleChange}
            required
          />
        </form>
      </header>
  )
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};