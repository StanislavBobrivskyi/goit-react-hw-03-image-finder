import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from './api';

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
    const { query, page, images } = this.state;
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
    console.log('Clicked on image with URL:', largeImageUrl);
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
