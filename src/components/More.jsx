import React from "react";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div className="more-page">
      {/**************************** Header section Starts ***********************/}

      <div className="more-header">
        <div className="large-img"></div>
        <div className="user-name">User Name</div>
      </div>

      {/****************************  Header section Ends ***********************/}

      {/****************************  Main section Starts ***********************/}

      <div className="more-main-div">
        <div className="options-div">
          <div className="option">
            <div className="option-name">Account</div>
            <div className="option-arrow"></div>
          </div>
          <div className="option">
            <div className="option-name">Settings</div>
            <div className="option-arrow"></div>
          </div>
          <div className="option">
            <div className="option-name">Legal</div>
            <div className="option-arrow"></div>
          </div>
          <div className="option">
            <div className="option-name">Support</div>
            <div className="option-arrow"></div>
          </div>
          <div className="option">
            <div className="option-name">Privacy Settings</div>
            <div className="option-arrow"></div>
          </div>
          <div className="option">
            <div className="option-name">Parental Control</div>
            <div className="option-arrow"></div>
          </div>
        </div>
        <div className="sign-out-div">
          <Link to="/signup" style={{ textDecoration: "none", color: "#fff" }}>
            <span id="sign-out">Sign Out</span>
          </Link>
        </div>
      </div>

      {/****************************  Main section Ends ***********************/}

      {/****************************  Footer section Starts ***********************/}

      <div className="footer">
        <div className="icons">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="icon-div">
              <div className="icon-img" id="home-img"></div>
              <span className="name" id="home">
                Home
              </span>
            </div>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <div className="icon-div" id="category-icon">
              <div className="icon-img" id="category-img"></div>
              <span className="name" id="category">
                Categories
              </span>
            </div>
          </Link>
          <Link to="/download" style={{ textDecoration: "none" }}>
            <div className="icon-div" id="download-icon">
              <div className="icon-img" id="download-img"></div>
              <span className="name" id="download">
                Downloads
              </span>
            </div>
          </Link>

          <div className="icon-div" id="more-icon">
            <div className="icon-img" id="more-img-red"></div>
            <span className="name" id="more-red">
              More
            </span>
          </div>
        </div>
      </div>
      {/****************************  Footer section Ends ***********************/}
    </div>
  );
};

export default More;
