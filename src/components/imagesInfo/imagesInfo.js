import { Component } from "react";
import PropTypes from "prop-types";
import galeryAPI from "../../services/pixabay-api";
import ImageGallery from "../ImageGallery";
import Loader from "../Loader";
import Button from "../Button";

export default class ImagesInfo extends Component {
  state = {
    images: [],
    error: null,
    page: 1,
    status: "idle",
  };

  static propTypes = {
    imageName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ images: [] });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: "pending" });

      galeryAPI
        .fetchImages(nextName, nextPage)
        .then((data) => {
          if (data.total !== 0) {
            this.setState((prevState) => ({
              images: [...prevState.images, ...data.hits],
              status: "resolved",
            }));
            return;
          }
          return Promise.reject(
            new Error(`
                Could not find pictures for the request : "${nextName}"`)
          );
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  onClickLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { error, status } = this.state;

    if (status === "idle") {
      return <p className="InfoText">Please enter some search keyword</p>;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "rejected") {
      return <p className="ErrorText">{error.message}</p>;
    }

    if (status === "resolved") {
      return (
        <>
          <ImageGallery images={this.state.images} />
          <Button onclick={this.onClickLoadMore} page={this.state.page} />
        </>
      );
    }
  }
}
