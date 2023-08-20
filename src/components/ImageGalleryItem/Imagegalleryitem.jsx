import React from 'react';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li>
    <img src={image.webformatURL} alt="" onClick={onClick} />
  </li>
);
