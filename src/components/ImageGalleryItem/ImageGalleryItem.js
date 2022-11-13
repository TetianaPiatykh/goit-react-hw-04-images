import { useState } from "react";
import {Modal} from "components/Modal/Modal";
import { ImageGalleryItemStyle, ImageGalleryItemImage } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({image}) => {
  const [showModal, setShowModal] = useState(false);

  

   const togleModal = () => {
    setShowModal(showModal => !showModal);
  }

  


    return (
        <ImageGalleryItemStyle>
            <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} onClick={togleModal} />
            {showModal && <Modal onClose={togleModal} image={image} />}
        </ImageGalleryItemStyle>
        )
  
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};