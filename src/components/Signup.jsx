import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ toggleScreen }) => {
  const [showPass, setShowPass] = useState(false);

  /*** For Showing and Hiding Password ***/

  const [disable, setDisable] = useState(true);

  /*** For Disabling the Signup Button ***/

  const [email, setEmail] = useState("");

  /*** For Fetching the value from email input ***/

  const [pass, setPass] = useState("");

  /*** For Fetching the value from password input ***/

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
    <div className="signup-screen">
      {/* Logo */}
      <div className="signup-logo"></div>

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

        <Link to="/login">
          <button
            className="sign-btn"
            disabled={disable}
            onClick={toggleScreen}
          >
            Signup
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
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="login-span" onClick={toggleScreen}>
              Login
            </span>
          </Link>
        </p>

        {/*********** Last line Ends **********/}
      </div>
    </div>
  );
};

export default Signup;
