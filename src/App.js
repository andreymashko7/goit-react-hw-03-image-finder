import "./App.css";
import { ToastContainer } from "react-toastify";
import { Component } from "react";
import ImagesInfo from "./components/imagesInfo";
import Searchbar from "./components/Searchbar";

class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesInfo imageName={this.state.imageName} page={this.state.page} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
