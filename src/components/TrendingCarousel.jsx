import React, { useState } from "react";
import { Link } from "react-router-dom";
import WatchTrending from "./WatchTrending";

const TrendingCarousel = ({ images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setScrollPosition(scrollPosition + 100);
    } else if (direction === "right") {
      setScrollPosition(scrollPosition - 100);
    }
  };

  const imgClick = (imageIndex) => {
    setSelectedImg(imageIndex);
  };

  return (
    <div className="trend-carousel">
      {scrollPosition < 0 && (
        <div className="trend-btn lBtn" onClick={() => handleClick("left")}>
          ‹
        </div>
      )}

      {scrollPosition > -((100 + 12) * 8 - 360) && (
        <div className="trend-btn rBtn" onClick={() => handleClick("right")}>
          ›
        </div>
      )}
      {images.map((image, index) => (
        <Link to={`/watch-trending/${index}`} key={index}>
          <img
            src={image.src}
            alt={`Pic ${index + 1}`}
            className="trending-img"
            style={{
              transform: `translateX(${scrollPosition}px)`,
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => {
              imgClick(index);
            }}
          />
        </Link>
      ))}
      {selectedImg && (
        <WatchTrending selectedImg={selectedImg} images={images} />
      )}
    </div>
  );
};

export default TrendingCarousel;
