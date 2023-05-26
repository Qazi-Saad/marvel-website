import React from "react";
import { Link, useParams } from "react-router-dom";
import Info from "./Info";

const WatchSCategory = ({ images }) => {
  const { imageSIndex } = useParams();
  const selectedSImg = images[imageSIndex];

  return (
    <div>
      <div className="watch-pages">
        <div
          className="img-box"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${selectedSImg.src})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Link to="/category">
            <div className="back-arrow"></div>
          </Link>

          <h1 className="img-heading">{selectedSImg.title}</h1>
          <div className="play"></div>
        </div>
        <div className="info-section">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default WatchSCategory;
