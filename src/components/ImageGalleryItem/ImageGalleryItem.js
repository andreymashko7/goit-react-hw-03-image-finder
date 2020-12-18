import PropTypes from "prop-types";
import { Component } from "react";
import Modal from "../Modal";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { alt, src, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li className="ImageGalleryItem">
        <img
          src={src}
          alt={alt}
          onClick={this.toggleModal}
          className="ImageGalleryItem-image"
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
