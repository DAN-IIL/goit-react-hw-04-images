import { useCallback, useEffect, useRef, useState } from 'react';
import { getApiResponse, requestParameters } from './api-search/api-search.js';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import Modal from './Modal/Modal.jsx';
import Image from './LargeImage/LargeImage.jsx';
import Loader from './Loader/Loader.jsx';
import css from './App.module.css';

export default App;

function App() {
  const [searchString, setSearchString] = useState('');
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageAlt, setLargeImageAlt] = useState('');

  const prevSearchString = useRef('');
  const prevGallery = useRef([]);

  const updateGallery = useCallback(
    searchString => {
      try {
        getApiResponse(searchString).then(response => {
          if (response.totalHits === 0) {
            alert(`Images by your request "${searchString}" did not found`);
            return;
          } else {
            setGallery([...prevGallery.current, ...response.hits]);
          }
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [prevGallery]
  );

  useEffect(() => {
    if (prevSearchString.current !== searchString) {
      requestParameters.page = 1;
      setGallery([]);
      prevGallery.current = [];

      if (searchString !== '') {
        setIsLoading(true);
        updateGallery(searchString);
      }
    }

    prevSearchString.current = searchString;
  }, [searchString, updateGallery]);

  useEffect(() => {
    prevGallery.current = gallery;
  }, [gallery]);

  const loadNextPage = () => {
    setIsLoading(true);
    updateGallery(searchString);
  };

  const getSearchString = value => {
    if (searchString !== value.searchString) {
      setSearchString(value.searchString);
    } else {
      alert(`You are actually looking at "${value.searchString}" pictures`);
    }
  };

  const openModal = ({ largeImageURL, tags }) => {
    setIsModalOpen(true);
    setLargeImageURL(largeImageURL);
    setLargeImageAlt(tags);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImageURL('');
    setLargeImageAlt('');
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={getSearchString} />

      {isLoading && requestParameters.page === 1 ? (
        <Loader />
      ) : (error !== null ? (<p>{error}</p>):
        gallery.length > 0 && (
          <ImageGallery gallery={gallery} onClick={openModal} />
        )
      )}

      {requestParameters.page !== 1 &&
        (isLoading ? <Loader /> : <Button onClick={loadNextPage} />)}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Image URL={largeImageURL} tags={largeImageAlt} />
        </Modal>
      )}
    </div>
  );
}
