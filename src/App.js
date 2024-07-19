import logo from './logo.svg';
import React from 'react';
import './App.css';
//components
import Cards from './Components/Cards';
import Aboutme from './Components/AboutMe';
import Footer from './Components/Footer';
//imgs
import WebProject from '../src/Images/web.JPG';
import addvonImg from '../src/Images/AddvonImg.PNG';
import CrocBashImg from '../src/Images/CB_Icon.png';
import TCWPPImg from '../src/Images/TCWPP.png';
import ShaqProfilePic from '../src/Images/shaq.jpg';
//videos
import WebDemoVideo from './Videos/WebDemo.mp4';

function App() {
  const imageUrl =ShaqProfilePic;
  return (
  <>
  <div className="Page">
  <div className="NameBox">
      <h1>Jazib Shakeel</h1>
    </div>
    <hr></hr>
    <Aboutme></Aboutme>
    <div className="Projects">
      <h1 className='banners'>Projects</h1>
      <div className="Cards">
      <Cards title="RecipeSearch Website" img={WebProject} videoSrc={WebDemoVideo}></Cards>
      <Cards title="CrocBash" img={CrocBashImg} videoSrc="https://www.youtube.com/embed/ImPOPqhTMcY"/>
      </div>
    </div>
    <hr></hr>
    <div>
      <Footer/>
    </div>

  </div>
  </>
    
  );
}

export default App;