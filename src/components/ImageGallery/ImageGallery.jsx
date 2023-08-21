import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Imagegallery } from './ImageGallery.styled';
export const ImageGallery = ({ images, onImageClick }) => (
  <Imagegallery>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onClick={() => onImageClick(image.largeImageURL)}
      />
    ))}
  </Imagegallery>
);
