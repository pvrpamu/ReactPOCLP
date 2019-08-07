import React, { Component } from "react";
import "./styles.scss";

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = e => {};

  render() {
    return (
      <div>
        <button className="btncontainer" type="button">
          Login
        </button>
      </div>
    );
  }
}

export default CustomButton;
