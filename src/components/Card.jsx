import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ cardData, toggleScreen }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);

  const nextCard = () => {
    const isLastSlide = index === cardData.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);

    index === cardData.length - 2 ? setShow(true) : setShow(false);
    index === cardData.length - 2 ? setBtn(false) : setBtn(true);
  };

  const carouselContainer = {
    height: "100%",
    width: "100%",
    position: "relative",
  };

  const cardStyle = {
    width: "360px",
    height: "550px",
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${cardData[index].pic})`,
    backgroundSize: "360px 550px",
    position: "relative",
  };

  const dotContainer = {
    display: "flex",
    position: "absolute",
    width: "91.67px",
    height: "10px",
    left: "125px",
    top: "385.917px",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const textBox = {
    position: "absolute",
    top: "442.75px",
    marginLeft: "85px",
  };

  return (
    <div style={carouselContainer}>
      {/* this is the card area */}

      <div style={cardStyle}>
        <div className="logo"></div> {/*marvel logo*/}
        {/* indicator dots */}
        <div style={dotContainer}>
          {cardData.map((dot, newdot) => (
            <div key={newdot}>
              <div
                className={index === newdot ? "active-circle" : "circle"}
              ></div>
            </div>
          ))}
        </div>
        {/* this is the text area */}
        <div style={textBox}>
          <div className="para">{cardData[index].text}</div>
        </div>
        {/* this is a div for signup and login button on the last slide */}
        {show && (
          <div>
            <Link to="/signup">
              <button className="signup-btn" onClick={toggleScreen}>
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="login-btn" onClick={toggleScreen}>
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
      {/* This is the continue button portion it lies outside of card area */}
      {btn && (
        <div className="btnPortion">
          <button className="continue-btn" onClick={nextCard}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
