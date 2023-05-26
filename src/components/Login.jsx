import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ toggleScreen }) => {
  const [showPass, setShowPass] = useState(false);
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Email function
  const handleEmail = (e) => {
    setEmail(e.target.value);
    btnEnable(e.target.value, pass);
  };

  // Password function
  const handlePass = (e) => {
    setPass(e.target.value);
    btnEnable(email, e.target.value);
  };

  // Function that will check emty fields then enable the button
  const btnEnable = (email, pass) => {
    email.trim() !== "" && pass.trim() !== ""
      ? setDisable(false)
      : setDisable(true);
  };

  // Function to Show and Hide pass
  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="login-screen">
      {/* Logo */}
      <div className="login-logo"></div>

      {/******************  Input Field Starts **************/}
      <div className="input-fields">
        {/* Email field */}
        <div>
          <input
            type="text"
            placeholder="Enter Your Email ID"
            className="email-input"
            onChange={handleEmail}
          />
        </div>
        {/* Password field */}
        <div>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="pass-input"
            maxLength={25}
            onChange={handlePass}
          />
          <span className="show" onClick={handleShow}>
            {!showPass ? "Show" : "Hide"}
          </span>
        </div>

        {/******************  Input Field Ends **************/}

        {/**************************  Signup Button Starts ********************/}
        <Link to="/home">
          <button className="log-btn" disabled={disable} onClick={toggleScreen}>
            Login
          </button>
        </Link>

        {/* Forgot Pass */}
        <span className="forgot">Forgot Password?</span>
        {/* or */}
        <span className="or">or</span>
        {/* Continue With */}
        <span className="continue">Continue With</span>

        {/**************************  Signup Button Ends ********************/}

        {/************** Fb and Google logo Starts ********************/}

        {/* Facebook logo */}
        <div className="fb"></div>
        {/* Google logo */}
        <div className="google"></div>

        {/************** Fb and Google logo Ends ********************/}

        {/*********** Last line Starts **********/}

        <p className="last-line">
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span className="signup-span" onClick={toggleScreen}>
              Signup
            </span>
          </Link>
        </p>

        {/*********** Last line Ends **********/}
      </div>
    </div>
  );
};

export default Login;
