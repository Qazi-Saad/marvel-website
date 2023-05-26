import React from "react";
import Carousel from "./Carousel";
import TrendingCarousel from "./TrendingCarousel";
import { Link } from "react-router-dom";

const movieImages = [
  {
    src: require("../movie-carousel-images/image1.jpg"),
    title: "Black Pnather Wakanda Forever",
  },
  {
    src: require("../movie-carousel-images/image2.jpg"),
    title: "Guardians of The Galaxy Vol.3",
  },
  {
    src: require("../movie-carousel-images/image3.jpg"),
    title: "Thor Love and Thunder",
  },
  {
    src: require("../movie-carousel-images/image4.jpg"),
    title: "Spider-Man No Way Home",
  },
  {
    src: require("../movie-carousel-images/image5.jpg"),
    title: "Ant-Man and The Wasp Quantumania",
  },
  {
    src: require("../movie-carousel-images/image6.jpg"),
    title: "Doctor Strange in The Multiverse of Madness",
  },
  {
    src: require("../movie-carousel-images/image7.jpg"),
    title: "Shang-Chi and the Legend of the Ten Rings",
  },
  { src: require("../movie-carousel-images/image8.jpg"), title: "Eternals" },
  { src: require("../movie-carousel-images/image9.jpg"), title: "Black Widow" },
];

const seriesImages = [
  {
    src: require("../series-carousel-images/image1.jpg"),
    title: "She-Hulk: Attorney at Law",
  },
  { src: require("../series-carousel-images/image2.jpg"), title: "Loki" },
  {
    src: require("../series-carousel-images/image3.jpg"),
    title: "The Falcon and the Winter Soldier",
  },
  { src: require("../series-carousel-images/image4.jpg"), title: "Hawkeye" },
  {
    src: require("../series-carousel-images/image5.jpg"),
    title: "Wanda Vision",
  },
  { src: require("../series-carousel-images/image6.jpg"), title: "Ms. Marvel" },
  {
    src: require("../series-carousel-images/image7.jpg"),
    title: "Werewolf by Night",
  },
  { src: require("../series-carousel-images/image8.jpg"), title: "I Am Groot" },
  { src: require("../series-carousel-images/image9.jpg"), title: "Echo" },
];

const trendingImages = [
  { src: require("../trending-carousel-images/image1.jpg"), title: "Hawkeye" },
  {
    src: require("../trending-carousel-images/image2.jpg"),
    title: "Spider-Man No Way Home",
  },
  {
    src: require("../trending-carousel-images/image3.jpg"),
    title: "Shang-Chi and the Legend of the Ten Rings",
  },
  { src: require("../trending-carousel-images/image4.jpg"), title: "Loki" },
  {
    src: require("../trending-carousel-images/image5.jpg"),
    title: "Guardians of The Galaxy Vol.3",
  },
  {
    src: require("../trending-carousel-images/image6.jpg"),
    title: "Black Pnather Wakanda Forever",
  },
  {
    src: require("../trending-carousel-images/image7.jpg"),
    title: "Ant-Man and The Wasp Quantumania",
  },
  {
    src: require("../trending-carousel-images/image8.jpg"),
    title: "Thor Love and Thunder",
  },
];

const Home = () => {
  return (
    <div>
      {/****************************  Header Starts ***********************/}
      <div className="header">
        <div className="home-logo"></div>
        <div className="avatar-img"></div>
      </div>

      {/****************************  Header Ends ***********************/}

      {/****************************  Main Section Starts ***********************/}

      <div className="main-div">
        {/* Latest Movies Carousel */}

        <div className="section" id="movies">
          <h1 className="home-headings">Latest Movies</h1>
          {/* Carousel Container */}
          <div className="home-carousel-container">
            <Carousel images={movieImages} arrType="movie" />
          </div>
        </div>

        {/******** *****************/}

        {/* Latest Series Carousel */}

        <div className="section" id="series">
          <h1 className="home-headings">Latest Series</h1>
          {/* Carousel Container */}
          <div className="home-carousel-container">
            <Carousel images={seriesImages} arrType="series" />
          </div>
        </div>

        {/******** *****************/}

        {/* Trending Today Carousel */}

        <div className="section" id="trending">
          <h1 className="home-headings">Trending Today</h1>
          <div className="trending-carousel-container">
            <TrendingCarousel images={trendingImages} />
          </div>
        </div>

        {/******** *****************/}
      </div>

      {/****************************  Main Section Ends ***********************/}

      {/****************************  Footer section Starts ***********************/}

      <div className="footer">
        <div className="icons">
          <div className="icon-div">
            <div className="icon-img" id="home-img-red"></div>
            <span className="name" id="home-red">
              Home
            </span>
          </div>
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

export default Home;
export { movieImages, seriesImages, trendingImages };
