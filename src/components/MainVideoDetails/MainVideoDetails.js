import React from 'react';
import videoData from '../../data/video-details.json';
import './MainVideoDetails.scss';

const MainVideoDetails = (props) => {
    return (
        <>
            <div className='main-video-details__container'>
                <h2 className='main-video-details__header'>{props.selectedVideo.title}</h2>
                <p>By {props.selectedVideo.channel}</p>
                <p>{props.selectedVideo.description}</p>
                <p>views: {props.selectedVideo.views}</p>
                <p>likes: {props.selectedVideo.likes}</p>
            </div>
        </>

    )
}

export default MainVideoDetails;