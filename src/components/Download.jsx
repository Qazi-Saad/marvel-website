import React from "react";
import { Link } from "react-router-dom";

const downloadImg = [
  {
    src: require("../more-images/image6.jpg"),
    title: "Avengers: Endgame",
  },

  {
    src: require("../cat-m-images/img26.jpg"),
    title: "Spider-Man: No Way Home",
  },
  {
    src: require("../cat-m-images/img27.jpg"),
    title: "Doctor Strange in the Multiverse of Madness",
  },
];

const Download = () => {
  return (
    <div className="download-page">
      {/****************************  Header Starts ***********************/}
      <div className="header">
        <div className="home-logo"></div>
        <div className="avatar-img"></div>
      </div>

      {/****************************  Header Ends ***********************/}

      {/****************************  Main Starts ***********************/}
      <div className="download-main">
        <div className="dwn-heading">Downloads</div>
        <div className="dwn-img-cont">
          {downloadImg.map((image, index) => (
            <div className="dwn-img-div" key={index}>
              <img
                src={image.src}
                alt={`Pic ${index + 1}`}
                className="dwn-img"
              />
              <div className="dwn-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/****************************  Main Ends ***********************/}

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

          <div className="icon-div" id="download-icon">
            <div className="icon-img" id="download-img-red"></div>
            <span className="name" id="download-red">
              Downloads
            </span>
          </div>

          <Link to="/more" style={{ textDecoration: "none" }}>
            <div className="icon-div" id="more-icon">
              <div className="icon-img" id="more-img"></div>
              <span className="name" id="more">
                More
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/****************************  Footer section Ends ***********************/}
    </div>
  );
};

export default Download;
