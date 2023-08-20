import React from 'react';

export const Modal = ({ onClose, largeImageUrl }) => (
  <div onClick={onClose}>
    <div>
      <img src={largeImageUrl} alt="" />
    </div>
  </div>
);
