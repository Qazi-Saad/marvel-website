import React from "react";
import { Link, useParams } from "react-router-dom";
import Info from "./Info";

const WatchTrending = ({ images }) => {
  const { imageIndex } = useParams();
  const selectedImg = images[imageIndex];

  return (
    <div className="watch-pages">
      <div
        className="img-box"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${selectedImg.src})`,
          backgroundSize: "100% 100%",
        }}
      >
        <Link to="/home">
          <div className="back-arrow"></div>
        </Link>

        <h1 className="img-heading">{selectedImg.title}</h1>
        <div className="play"></div>
      </div>
      <div className="info-section">
        <Info />
      </div>
    </div>
  );
};

export default WatchTrending;
