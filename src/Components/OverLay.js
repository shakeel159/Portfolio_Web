import React from 'react';
import './OverLay.css'
import exit from '../Images/logout.png';

function Overlay({ title, videoSrc, onClose  }) {
  const isYouTube = videoSrc.includes("youtube.com");
  return (
    <div className="Overlay">
      <div className="OverlayContent">
        <div>
            <img className='ExitBtn' src={exit} onClick={onClose}></img>
        </div>
        <div className='videoBox'>
        {isYouTube ? (
            <iframe
              width="100%"
              height="315"
              src={videoSrc}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          ) : (
            <video width="100%" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className='desText'>
            <h1>BOX....</h1>
        </div>    
      </div>
    </div>
  );
}

export default Overlay;