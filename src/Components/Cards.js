import React, { useState } from 'react';
import './Cards.css';
import Overlay from './OverLay';

function Cards({ title, img, videoSrc, text}){
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };
    return(
    <>
    <div className='Card'  onClick={toggleOverlay}>
        <img src={img} alt='TBA'></img>
        <div className='CardBanner'>
            <h1>{title}</h1>
        </div>
    </div> 
        {showOverlay && <Overlay title={title} videoSrc={videoSrc} onClose={toggleOverlay} text={text} />}
    </>
    )

}

export default Cards;