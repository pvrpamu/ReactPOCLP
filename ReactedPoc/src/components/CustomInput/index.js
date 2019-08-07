import React, { Component } from "react";
import "./styles.scss";

class CustomInput extends Component {
  constructor(props) {
    super(props);
  }

  handleInput = e => {
    e.persist();
    this.props.handleChange(e);
  };

  render() {
    const { placeholder } = this.props;
    return (
      <div>
        <input
          onChange={e => this.handleInput(e)}
          placeholder={placeholder}
          type={this.props.type}
          className="input"
        />
      </div>
    );
  }
}

export default CustomInput;
