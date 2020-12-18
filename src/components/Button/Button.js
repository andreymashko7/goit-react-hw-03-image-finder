import { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  scroll = () => {
    this.props.onclick();
  };
  render() {
    return (
      <button type="button" className="Button" onClick={this.scroll}>
        Load more
      </button>
    );
  }
}

export default Button;
