import React from 'react';
import './NextVideo.scss';


const NextVideo = ({video, handleVideoSelect}) => {

    const handleClick = () => {
        handleVideoSelect(video.id)
    }

    return (
        <div className='next-video__container'>
            <img className='next-video__thumbnail' onClick={handleClick} src={video.image} alt='video thumbnail'/>
            <div className='next-video__text'>
                <p className='next-video__title'>{video.title}</p>
                <p className='next-video__channel'>{video.channel}</p>
            </div>

        </div>
    )
}

export default NextVideo;