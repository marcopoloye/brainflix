import React from 'react';
import './NextVideo.scss';


const NextVideo = ({nextVideo, handleVideoSelect}) => {
    const handleClick = () => {
        handleVideoSelect(nextVideo.id)
    }

    return (
        <div className='next-video__container'>
            <img className='next-video__thumbnail' onClick= {handleClick} src= {nextVideo.image} alt= {nextVideo.title}/>
            <div className='next-video__text' onClick= {handleClick}>
                <p className='next-video__title'> {nextVideo.title} </p>
                <p className='next-video__channel'> {nextVideo.channel} </p>
            </div>
        </div>
    )
}

export default NextVideo;