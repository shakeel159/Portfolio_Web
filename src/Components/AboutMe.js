
import './AboutMe.css';
import reactLogo from '../Images/react-logo.png';
import htmlLogo from '../Images/html-logo.png';
import CSSLogo from '../Images/css-logo.png';
import Javalogo from '../Images/JavaScript-Logo.png';
import CLogo from '../Images/csharp-icon.png';
import VSCode from '../Images/VSCode.png';
import VSStudio from '../Images/VSStudio.png';
import Unity from '../Images/Unity.png';
import Github from '../Images/Github.png';
import ProfilPic from './ProfilePic';
import ShaqProfilePic from '../Images/shaq.jpg';

function AboutMe(){
    const imageUrl =ShaqProfilePic;
    return(
    <>
    <div className="AboutMe">
      <h1 className='banners'>About Me</h1>
      <hr className='border'></hr>
      <div className='Container'>
      <div className="info">
        <h3 className="text">Name:</h3>
        <p className="Response">Jazib Shakeel</p>
      </div>
      <div className="info">
        <h3 className="text">School:</h3>
        <p className="Response">Columbia College Chicago</p>
      </div>
      <div className="info">
        <h3 className="text">Programming Skills:</h3>
        <img className="Reactlogo" src={reactLogo} alt="logo 1"></img>
        <img className="HTMLlogo" src={htmlLogo} alt="logo 2"></img>
        <img className="CSSlogo" src={CSSLogo} alt="logo 2"></img>
        <img className="Javalogo" src={Javalogo} alt="logo 2"></img>
        <img className="CLogo" src={CLogo} alt="logo 2"></img>
      </div>
      <div className="info">
        <h3 className="text">Software Exp:</h3>
        <img className="VSCode" src={VSCode} alt="logo 1"></img>
        <img className="VSStudio" src={VSStudio} alt="logo 2"></img>
        <img className="Unity" src={Unity} alt="logo 2"></img>
        <img className="Github" src={Github} alt="logo 2"></img>

        </div>
      <div className="info">
        <p className="Response" id='dis'>Front End Developer And passion for Game Development and programming </p>
      </div>
      </div>
      <div className='ProfilePic'>
        <ProfilPic img={imageUrl} ></ProfilPic>
      </div>
    </div>

    </>
    )

}

export default AboutMe;
