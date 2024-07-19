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
import AddvonVideo from './Videos/AddvoneDemo.mp4'
import TCWPPDemo from './Videos/TCWPPDemo.mp4';

function App() {
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
      <Cards title="RecipeSearch Website" img={WebProject} videoSrc={WebDemoVideo} 
      text="Search or Browse through  my personaly created website to Find your favorite foods and the recipes to make them at home."></Cards>
      <Cards title="CrocBash" img={CrocBashImg} videoSrc="https://www.youtube.com/embed/ImPOPqhTMcY" 
      text="VR Game Project with Collaboration with other Columbia College Chicago Students to create VR interactive Game"/>
      <Cards title="The Child Who Picked Pebbles" img={TCWPPImg} videoSrc={TCWPPDemo} 
      text="collaborative project for Columbia Collage Chicago capstone project, creating a open-world 2D game focusing
      on exploration, trading and other rpg elements."></Cards>
      <Cards title="AddvonDemo" img={addvonImg} videoSrc={AddvonVideo} 
      text="Unity 2D game project that highlights my ability to create and work on a functioning game. 
      Addvon is a sidescroller action/ platformer allowing player to complete small levels while fighting 
      monsters to reach the end."></Cards>
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