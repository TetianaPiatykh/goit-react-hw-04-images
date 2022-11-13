import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ image, onClose }) => {
    
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
               onClose();
        }
        }
            window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }


    }, [onClose])


    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

 
        // const { image } = this.props;
        return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalStyle>
                <img src={image.largeImageURL} alt={image.tags} />
            </ModalStyle>
        </Overlay>, modalRoot,
    );


};

Modal.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};