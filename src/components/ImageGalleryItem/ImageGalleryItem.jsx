import React from 'react';
import { Imagegalleryitem, Imagegalleryitemimage } from './ImageGallery.styled';
export const ImageGalleryItem = ({ image, onClick }) => (
  <Imagegalleryitem>
    <Imagegalleryitemimage src={image.webformatURL} alt="" onClick={onClick} />
  </Imagegalleryitem>
);
