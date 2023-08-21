import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  handleSearchSubmit = async newQuery => {
    this.setState({ query: newQuery, page: 1, images: [], loading: true });

    try {
      const newImages = await fetchImages(newQuery, 1);
      this.setState({ images: newImages });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMore = async () => {
    const { query, page } = this.state;
    const nextPage = page + 1;

    this.setState({ loading: true });

    try {
      const newImages = await fetchImages(query, nextPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        page: nextPage,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleImageClick = largeImageUrl => {
    this.setState({ showModal: true, largeImageUrl });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, loading, showModal, largeImageUrl } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        <Modal
          isOpen={showModal}
          onClose={this.handleCloseModal}
          largeImageUrl={largeImageUrl}
        />
      </AppWrapper>
    );
  }
}
