import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import WatchMCategory from "./WatchMCategory";
import WatchSCategory from "./WatchSCategory";

const movieImg = [
  { src: require("../cat-m-images/img1.jpg"), title: "Iron Man" },
  { src: require("../cat-m-images/img2.jpg"), title: "The Incredible Hulk" },
  {
    src: require("../cat-m-images/img3.jpg"),
    title: "Captain America: The First Avenger",
  },
  { src: require("../cat-m-images/img4.jpg"), title: "Thor" },
  { src: require("../cat-m-images/img5.jpg"), title: "Iron Man 2" },
  { src: require("../cat-m-images/img6.jpg"), title: "The Avengers" },
  { src: require("../cat-m-images/img7.jpg"), title: "Iron Man 3" },
  { src: require("../cat-m-images/img8.jpg"), title: "Thor: The Dark World" },
  {
    src: require("../cat-m-images/img9.jpg"),
    title: "Captain America: The Winter Soldier",
  },
  {
    src: require("../cat-m-images/img10.jpg"),
    title: "Guardians of the Galaxy",
  },
  {
    src: require("../cat-m-images/img11.jpg"),
    title: "Avengers: Age of Ultron",
  },
  { src: require("../cat-m-images/img12.jpg"), title: "Ant-Man" },
  {
    src: require("../cat-m-images/img13.jpg"),
    title: "Captain America: Civil War",
  },
  { src: require("../cat-m-images/img14.jpg"), title: "Doctor Strange" },
  {
    src: require("../cat-m-images/img15.jpg"),
    title: "Guardians of the Galaxy Vol. 2",
  },
  {
    src: require("../cat-m-images/img16.jpg"),
    title: "Spider-Man: Homecoming",
  },
  { src: require("../cat-m-images/img17.jpg"), title: "Thor: Ragnarok" },
  { src: require("../cat-m-images/img18.jpg"), title: "Black Panther" },
  {
    src: require("../cat-m-images/img19.jpg"),
    title: "Avengers: Infinity War",
  },
  { src: require("../cat-m-images/img20.jpg"), title: "Ant-Man and the Wasp" },
  { src: require("../cat-m-images/img21.jpg"), title: "Captain Marvel" },
  { src: require("../cat-m-images/img22.jpg"), title: "Avengers: Endgame" },
  {
    src: require("../cat-m-images/img23.jpg"),
    title: "Spider-Man: Far From Home",
  },
  { src: require("../cat-m-images/img24.jpg"), title: "Black Widow" },
  {
    src: require("../cat-m-images/img25.jpg"),
    title: "Shang-Chi and the Legend of the Ten Rings",
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

const seriesImg = [
  { src: require("../cat-s-images/img1.jpg"), title: "Agent Carter" },
  { src: require("../cat-s-images/img2.jpg"), title: "Defenders" },
  { src: require("../cat-s-images/img3.jpg"), title: "Daredevil" },
  { src: require("../cat-s-images/img4.jpg"), title: "Iron Fist" },
  { src: require("../cat-s-images/img5.jpg"), title: "Luke Cage" },
  { src: require("../cat-s-images/img6.jpg"), title: "Jessica Jones" },
  { src: require("../cat-s-images/img7.jpg"), title: "Punisher" },
  { src: require("../cat-s-images/img8.jpg"), title: "Wanda Vision" },
  {
    src: require("../cat-s-images/img9.jpg"),
    title: "The Falcon and the Winter Soldier",
  },
  { src: require("../cat-s-images/img10.jpg"), title: "Loki" },
  { src: require("../cat-s-images/img11.jpg"), title: "What If...?" },
  { src: require("../cat-s-images/img12.jpg"), title: "Hawkeye" },
  { src: require("../cat-s-images/img13.jpg"), title: "Moon Knight" },
  { src: require("../cat-s-images/img14.jpg"), title: "Ms. Marvel" },
  { src: require("../cat-s-images/img15.jpg"), title: "I Am Groot" },
  {
    src: require("../cat-s-images/img16.jpg"),
    title: "She-Hulk: Attorney at Law",
  },
  { src: require("../cat-s-images/img17.jpg"), title: "Werewolf by Night" },
  {
    src: require("../cat-s-images/img18.jpg"),
    title: "The Guardians of the Galaxy Holiday Special",
  },
];

const Category = () => {
  const [content, setContent] = useState(null);
  const moviesBtnRef = useRef(null);
  const [selectedMImg, setSelectedMImg] = useState(null);
  const [selectedSImg, setSelectedSImg] = useState(null);

  useEffect(() => {
    moviesBtnRef.current.focus();
    showMovieContent();
    // eslint-disable-next-line
  }, []);

  const imgMClick = (imageMIndex) => {
    setSelectedMImg(imageMIndex);
  };

  const imgSClick = (imageSIndex) => {
    setSelectedSImg(imageSIndex);
  };

  const showMovieContent = () => {
    setContent(
      <div>
        <div className="grid-m">
          {movieImg.map((imageM, indexM) => (
            <Link to={`/watch-m-category/${indexM}`} key={indexM}>
              <img
                src={imageM.src}
                alt={`Pic ${indexM + 1}`}
                style={{
                  height: "160px",
                  width: "102px",
                  userSelect: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  imgMClick(indexM);
                }}
              />
            </Link>
          ))}
        </div>
        <div className="blank"></div>
      </div>
    );
  };

  const btnClick = (type) => {
    if (type === "movie") {
      showMovieContent();
    } else if (type === "series") {
      setContent(
        <div>
          <div className="grid-s">
            {seriesImg.map((imageS, indexS) => (
              <Link to={`/watch-s-category/${indexS}`} key={indexS}>
                <img
                  src={imageS.src}
                  alt={`Pic ${indexS + 1}`}
                  style={{
                    height: "160px",
                    width: "102px",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    imgSClick(indexS);
                  }}
                />
              </Link>
            ))}
          </div>
          <div className="blank"></div>
        </div>
      );
    }
  };

  return (
    <div className="category-page">
      {/****************************  Header Starts ***********************/}

      <div className="category-head">
        <button
          className="cat-btn"
          onClick={() => btnClick("movie")}
          ref={moviesBtnRef}
          autoFocus
        >
          Movies
        </button>
        <button className="cat-btn" onClick={() => btnClick("series")}>
          Series
        </button>
      </div>

      {/****************************  Header Ends ***********************/}

      {/****************************  Main Section Starts ***********************/}

      <div className="category-main">{content}</div>

      {/****************************  Main Section Ends ***********************/}

      {/****************************  Footer section Starts ***********************/}

      <div className="footer">
        <div className="icons">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="icon-div" id="home-icon">
              <div className="icon-img" id="home-img"></div>
              <span className="name" id="home">
                Home
              </span>
            </div>
          </Link>

          <div className="icon-div" id="category-icon">
            <div className="icon-img" id="category-img-red"></div>
            <span className="name" id="category-red">
              Categories
            </span>
          </div>

          <Link to="/download" style={{ textDecoration: "none" }}>
            <div className="icon-div" id="download-icon">
              <div className="icon-img" id="download-img"></div>
              <span className="name" id="download">
                Downloads
              </span>
            </div>
          </Link>

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

      {selectedMImg && (
        <WatchMCategory selectedMImg={selectedMImg} images={movieImg} />
      )}
      {selectedSImg && (
        <WatchSCategory selectedSImg={selectedSImg} images={seriesImg} />
      )}
    </div>
  );
};

export default Category;

export { movieImg, seriesImg };
