import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Gallery } from './ImageGallery.styled';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  static propTypes = {
    queryImages: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    page: 1,
    isLoading: false,
    isError: false,
    isShowButton: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQueryImages = prevProps.queryImages;
    const nextQueryImages = this.props.queryImages;

    const prevQueryPage = prevState.page;
    const nextQueryPage = this.state.page;

    if (
      prevQueryImages !== nextQueryImages ||
      prevQueryPage !== nextQueryPage
    ) {
      this.setState({ isLoading: true });

      try {
        let images = await api.fetchImages(nextQueryImages, nextQueryPage);
        images = images.map(image => {
          return (image = {
            id: image.id,
            largeImageURL: image.largeImageURL,
            webformatURL: image.webformatURL,
            tags: image.tags,
          });
        });

        if (!images.length || images.length < 12) {
          this.setState({ images, isShowButton: false });
        } else {
          this.setState({ isShowButton: true });
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
        }
      } catch (error) {
        console.log(error);
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // handleSubmit = nextQueryImages => {
  //   if (nextQueryImages !== this.state.nextQueryImages) {
  //     this.setState({ images: [], page: 1 });
  //   }
  //   this.setState({ nextQueryImages });
  //   console.log(nextQueryImages);
  // };

  render() {
    const { images, isLoading, isError, isShowButton } = this.state;

    return (
      <>
        {images?.length !== 0 && (
          <Gallery>
            {images?.map(image => (
              <ImageGalleryItem key={image.id} image={image} />
            ))}
          </Gallery>
        )}
        {isLoading && <Loader />}
        {isShowButton && <Button onClickLoadMore={this.handleLoadMore} />}
        {isError && toast.error('We have error.')}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
