import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default Modal;

const modalRoot = document.querySelector('#modal-root');

Modal.propTypes = { onClose: PropTypes.func.isRequired };

function Modal({ onClose, children }) {
  const closeModal = useCallback(
    ({ code, currentTarget, target }) => {
      if (code === 'Escape' || currentTarget === target) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}
