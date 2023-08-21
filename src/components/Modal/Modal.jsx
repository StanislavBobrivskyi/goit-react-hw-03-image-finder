import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { StyledModal, Overlay } from './modal.styled';

ReactModal.setAppElement('#root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onClose, largeImageUrl } = this.props;

    return (
      <StyledModal>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onClose}
          className="modal"
          overlayClassName="overlay"
        >
          <Overlay onClick={onClose}>
            <img src={largeImageUrl} alt="" />
          </Overlay>
        </ReactModal>
      </StyledModal>
    );
  }
}
