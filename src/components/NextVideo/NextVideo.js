import React from 'react';
import './NextVideo.scss';


const NextVideo = ({video, handleVideoSelect}) => {
    const handleClick = () => {
        handleVideoSelect(video.id)
    }
    return (
        <div className='next-video__container'>
            <h2>{video.title}</h2>
            <p>{video.channel}</p>
            <img onClick={handleClick} src={video.image}/>
        </div>
    )
}

export default NextVideo;