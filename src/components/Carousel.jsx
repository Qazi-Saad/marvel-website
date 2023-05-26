import React from "react";
import { useState } from "react";
import WatchMovie from "./WatchMovie";

import { Link } from "react-router-dom";

const Carousel = ({ images, arrType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(4);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleArrowClick = (direction) => {
    const totalImages = images.length;
    let newImageIndex;

    if (direction === "right") {
      newImageIndex = (currentImageIndex + 1) % totalImages;
    } else if (direction === "left") {
      newImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }
    setCurrentImageIndex(newImageIndex);
  };

  const imgClick = (imageIndex) => {
    setSelectedImg(imageIndex);
  };

  const midBox = {
    height: "173px",
    width: "260px",
    cursor: "pointer",
    position: "absolute",
    left: "30px",
    top: "0px",
    backgroundImage: `url(${images[currentImageIndex].src})`,
    backgroundSize: "cover",
    margin: "0 20px",
  };

  const leftBox = {
    height: "151px",
    width: "228px",
    position: "absolute",
    top: "10px",
    left: "-196px",
    backgroundImage: `url(${
      images[(currentImageIndex - 1 + images.length) % images.length].src
    })`,
    backgroundSize: "cover",
  };

  const rightBox = {
    height: "151px",
    width: "228px",
    position: "absolute",
    top: "10px",
    right: "-196px",
    backgroundImage: `url(${
      images[(currentImageIndex + 1) % images.length].src
    })`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="btn left-btn" onClick={() => handleArrowClick("left")}>
        ‹
      </div>
      <div className="btn right-btn" onClick={() => handleArrowClick("right")}>
        ›
      </div>
      <Link
        to={
          arrType === "movie"
            ? `/watch-movie/${currentImageIndex}`
            : `/watch-series/${currentImageIndex}`
        }
      >
        <div
          className="current-image"
          style={midBox}
          onClick={() => imgClick(currentImageIndex)}
        ></div>
      </Link>
      <div style={leftBox}></div>
      <div style={rightBox}></div>
      {selectedImg && <WatchMovie selectedImg={selectedImg} images={images} />}
    </div>
  );
};

export default Carousel;
