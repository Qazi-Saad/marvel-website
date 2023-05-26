import React, { useState, useRef, useEffect } from "react";

const castImages = [
  {
    src: require("../cast-images/image1.jpg"),
    realName: "Chris Evans",
    stageName: "Captain America",
  },
  {
    src: require("../cast-images/image2.jpg"),
    realName: "Robert Downey Jr.",
    stageName: "Iron Man",
  },
  {
    src: require("../cast-images/image3.jpg"),
    realName: "Chris Hemsworth",
    stageName: "Thor",
  },
  {
    src: require("../cast-images/image4.jpg"),
    realName: "Mark Ruffalo",
    stageName: "Hulk",
  },
  {
    src: require("../cast-images/image5.jpg"),
    realName: "Samuel L. Jackson",
    stageName: "Nick Fury",
  },
  {
    src: require("../cast-images/image6.jpg"),
    realName: "Scarlet Johansson",
    stageName: "Black Widow",
  },
  {
    src: require("../cast-images/image7.jpg"),
    realName: "Jeremy Renner",
    stageName: "Hawkeye",
  },
  {
    src: require("../cast-images/image8.jpg"),
    realName: "Elizabeth Olsen",
    stageName: "Scarlet Witch",
  },
  {
    src: require("../cast-images/image9.jpg"),
    realName: "Anthony Mackie",
    stageName: "Falcon",
  },
  {
    src: require("../cast-images/image10.jpg"),
    realName: "Chadwick Boseman",
    stageName: "Black Panther",
  },
  {
    src: require("../cast-images/image11.jpg"),
    realName: "Gwyneth Paltrow",
    stageName: "Pepper Potts",
  },
  {
    src: require("../cast-images/image12.jpg"),
    realName: "Tom Holland",
    stageName: "Spider Man",
  },
  {
    src: require("../cast-images/image13.jpg"),
    realName: "Chris Pratt",
    stageName: "Star Lord",
  },
  {
    src: require("../cast-images/image14.jpg"),
    realName: "Evangeline Lilly",
    stageName: "Hope Pym (Wasp)",
  },
  {
    src: require("../cast-images/image15.jpg"),
    realName: "Paul Rudd",
    stageName: "Ant Man",
  },
];

const moreImages = [
  {
    src: require("../more-images/image1.jpg"),
    movieName: "Avengers: Infinity War",
    releaseDate: "2018",
  },
  {
    src: require("../more-images/image2.jpg"),
    movieName: "Black Panther",
    releaseDate: "2018",
  },
  {
    src: require("../more-images/image3.jpg"),
    movieName: "Avengers: Age of Ultron",
    releaseDate: "2015",
  },
  {
    src: require("../more-images/image4.jpg"),
    movieName: "Captain America: Civil War",
    releaseDate: "2016",
  },
  {
    src: require("../more-images/image5.jpg"),
    movieName: "Spider-Man: Homecoming",
    releaseDate: "2017",
  },
  {
    src: require("../more-images/image6.jpg"),
    movieName: "Avengers: Endgame",
    releaseDate: "2019",
  },
];

const Info = () => {
  const [content, setContent] = useState(null);
  const trailerBtnRef = useRef(null);

  useEffect(() => {
    trailerBtnRef.current.focus();
    showTrailerContent();
  }, []);

  const showTrailerContent = () => {
    setContent(
      <div>
        <a
          href="https://www.youtube.com/watch?v=os2C0TdDphc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ position: "relative" }}>
            <img
              src={require("../trailer-image/thumbnail.jpg")}
              alt="YouTube Video Thumbnail"
              className="trailer-img"
            />
            <div className="play-trailer"></div>
          </div>
        </a>
        <div className="blank"></div>
      </div>
    );
  };

  const handleBtnClick = (type) => {
    if (type === "trailer") {
      showTrailerContent();
    } else if (type === "cast") {
      setContent(
        castImages.map((image, index) => (
          <div className="cast-container" key={index}>
            <div className="cast-img-div">
              <img
                className="cast-img"
                src={image.src}
                alt={`Cast Pic: ${index + 1}`}
              />
            </div>
            <div className="name-div">
              <div className="real-name">{image.realName}</div>
              <div className="stage-name">{image.stageName}</div>
            </div>
          </div>
        ))
      );
    } else if (type === "more") {
      setContent(
        moreImages.map((image, index) => (
          <div className="more-container" key={index}>
            <div className="more-img-div">
              <img
                className="more-img"
                src={image.src}
                alt={`More Pic: ${index + 1}`}
              />
            </div>
            <div className="details-div">
              <div className="movie-name">{image.movieName}</div>
              <div className="release-date">{image.releaseDate}</div>
            </div>
          </div>
        ))
      );
    }
  };

  return (
    <div>
      <button className="dwn-btn">Download</button>
      <span className="add-to-watch">+Add to Watchlist</span>
      <div className="text-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        perspiciatis voluptatem sunt inventore iure explicabo facere corrupti
        eius, mollitia molestiae reiciendis omnis tenetur nisi eligendi aliquid
        velit similique dolorem!
      </div>
      <div className="btn-div">
        <button
          className="three-btn"
          onClick={() => {
            handleBtnClick("trailer");
          }}
          ref={trailerBtnRef}
          autoFocus
        >
          Trailer
        </button>
        <button
          className="three-btn"
          onClick={() => {
            handleBtnClick("cast");
          }}
        >
          Cast
        </button>
        <button
          className="three-btn"
          onClick={() => {
            handleBtnClick("more");
          }}
        >
          More
        </button>
      </div>
      <div className="content-div">{content}</div>
    </div>
  );
};

export default Info;
