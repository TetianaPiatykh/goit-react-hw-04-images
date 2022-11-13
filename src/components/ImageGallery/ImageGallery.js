import ImageGalleryItem  from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyle } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = ({images}) => {
    return (
        <ImageGalleryStyle>
            {images.map(image => (<ImageGalleryItem key={image.id} image={image} />)
            )}
        </ImageGalleryStyle>
    );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    })
  ),
};

