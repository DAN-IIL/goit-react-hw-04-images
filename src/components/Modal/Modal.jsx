import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");


const Modal = ({children, close}) => {

    useEffect(() => {
        const closeModal = ({ target, currentTarget, code }) => {
            if (target === currentTarget || code === "Escape") close()
        }
            document.addEventListener('keydown', closeModal)
            return () => {
                document.removeEventListener("keydown", closeModal)
            }
        }, [close])

    return (
createPortal(
                // eslint-disable-next-line no-undef
                <div className={styles.overlay} onClick={close}>
                    <div className={styles.modal}>
                        <span className={styles.close} onClick={close}>X</span>
                        {children}
                    </div>
                </div>,
                modalRoot    ))
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    close: PropTypes.func.isRequired,
  };
  
  export default Modal;