import React, { Component } from 'react';
import ReactModal from 'react-modal';

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
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
      >
        <img src={largeImageUrl} alt="" />
      </ReactModal>
    );
  }
}
