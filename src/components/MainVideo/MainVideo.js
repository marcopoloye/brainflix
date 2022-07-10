import React from 'react';
import './MainVideo.scss';

const MainVideo = (props) => {
    const {
        image,
    } = props.video
    return (
        <div className='main-video__container'>
            <video controls poster= {image} className='main-video'>
            </video>
        </div>
    )
}

export default MainVideo;