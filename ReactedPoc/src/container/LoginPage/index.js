import React, { Component } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomCheckbox from "../../components/CustomCheckbox";
import "./styles.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="main-container">
        <div className="loginContainer">
          <img src="https://via.placeholder.com/270" />
          <CustomInput
            type="text"
            handleChange={this.onChange}
            placeholder="Email"
          />
          <CustomInput
            type="password"
            handleChange={this.onChange}
            placeholder="Password"
          />
          <div className="remember">
            <CustomCheckbox label="Remember me" />
            <span className="coloredtext forgot">Forgot Password?</span>
          </div>
          <CustomButton />
          <p>
            Don't Have an account?{" "}
            <span className="coloredtext">SignUp here</span>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginPage;
