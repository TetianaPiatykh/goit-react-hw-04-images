import { Component } from "react";
import Modal from "components/Modal/Modal";
import { ImageGalleryItemStyle, ImageGalleryItemImage } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';


export default class ImageGalleryItem extends Component {

    state = {
        showModal: false,
    }

    togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
    
  }

    render() {
        const { image } = this.props;


    return (
        <ImageGalleryItemStyle>
            <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} onClick={this.togleModal} />
            {this.state.showModal && <Modal onClose={this.togleModal} image={image} />}
        </ImageGalleryItemStyle>
        )
        

    }

};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};