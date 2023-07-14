import { useState, useEffect } from 'react';
import { searchPhoto } from './api-search/api-search';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import LargeImage from './LargeImage/LargeImage';
import ButtonUp from './ButtonUp/ButtonUp';
import Notiflix from 'notiflix';

const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [prevSearch, setPrevSearch] = useState('');

  const searchItems = ( search ) => {
    if (!search) {
      Notiflix.Notify.info('Please, enter a search query.');
      return;
    }

    if (search === prevSearch) {
      Notiflix.Notify.info('Please, change your search query.');
      return;
    }
    setSearch(search);
    setItems([]);
    setPage(1);
    setPrevSearch(search);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        if (search) {
          const data = await searchPhoto(search, page);
          setItems(prevItems => [...prevItems, ...data.hits]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
      fetchPhotos();
  }, [search, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showLargeImage = ({ largeImageURL, tags }) => {
    setLargeImage({
      largeImageURL,
      tags,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setLargeImage(null);
    setShowModal(false);
  };

  const handleScrollUp = e => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={searchItems} />
      <ImageGallery items={items} showLargeImage={showLargeImage} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {Boolean(items.length) && <Button onClick={loadMore} />}
      {items.length > 12 && <ButtonUp onClick={handleScrollUp} />}
      {showModal && (
        <Modal close={closeModal}>
          <LargeImage {...largeImage} />
        </Modal>
      )}
    </div>
  );
};

export default App;