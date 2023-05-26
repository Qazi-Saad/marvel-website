import './App.css';
import React, {useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';  
import Card from './components/Card.jsx';
import Signup from './components/Signup';
import Login from './components/Login';
import Home, { movieImages, seriesImages, trendingImages } from './components/Home';
import WatchMovie from './components/WatchMovie';
import WatchSeries from './components/WatchSeries';
import WatchTrending from './components/WatchTrending';
import Category, {movieImg, seriesImg} from './components/Category';
import WatchMCategory from './components/WatchMCategory';
import WatchSCategory from './components/WatchSCategory';
import Download from './components/Download';
import More from './components/More';



function App() {

const [screen, setScreen] = useState(true);

const toggleScreen = () => {
  setScreen(!screen);
}

  const cardData = [
    {
      pic: require("./images/welcome1.jpg"),
      logo: require("./images/Marvel-Logo.png"),
      text: "All your favourite \n MARVEL movies \n & series \n at one place",
    },
    {
      pic: require("./images/welcome2.jpg"),
      logo: require("./images/Marvel-Logo.png"),
      text: `Watch Online \n or \n Download Offline`,
    },
    {
      pic: require("./images/welcome3.jpg"),
      logo: require("./images/Marvel-Logo.png"),
      text: "Create profiles for \n diffrent members & \n get personalised \n recommendations",
    },
    {
      pic: require("./images/welcome4.jpg"),
      logo: require("./images/Marvel-Logo.png"),
      text: "Let's Get Started !!!",
    },
    {
      pic: require("./images/welcome5.jpg"),
      logo: require("./images/Marvel-Logo.png"),
    },
  ]; 
 

const carouselPortion = {
  height: "550px",
  width: "360px",
  
  whiteSpace: "pre"
}

  return (
    <BrowserRouter>
    <div className="App">
      <div className="full-container">

{
  screen ? (
    <div style={carouselPortion} >
    <Card toggleScreen={toggleScreen} cardData={cardData} />
    
    </div>
  ) : (
    
    <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/download' element={<Download/>} />
        <Route path='/more' element={<More/>} />

        <Route path='/watch-movie/:imageIndex' element={<WatchMovie images={movieImages} />} />
        <Route path='/watch-series/:imageIndex' element={<WatchSeries images={seriesImages} />} />
        <Route path='/watch-trending/:imageIndex' element={<WatchTrending images={trendingImages}/>} />
        <Route path='/watch-m-category/:imageMIndex' element={<WatchMCategory images={movieImg}/>} />
        <Route path='/watch-s-category/:imageSIndex' element={<WatchSCategory images={seriesImg}/>} />
    </Routes>
     
  )
}  
      </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
