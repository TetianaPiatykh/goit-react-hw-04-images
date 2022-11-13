import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {

        window.removeEventListener('keydown', this.handleKeyDown);

    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { image } = this.props;
        return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <ModalStyle>
                <img src={image.largeImageURL} alt={this.tags} />
            </ModalStyle>
        </Overlay>, modalRoot,
    );

    }
};

Modal.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};