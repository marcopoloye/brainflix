import React from 'react';
import './MainVideo.scss';

const MainVideo = (props) => {
    return (
        <div className='main-video__container'>
            <video poster= {props.selectedVideo.image} className= 'main-video'>
                <button className='main-video__controls-play'>text</button>
            </video>
        </div>
    )
}

export default MainVideo;