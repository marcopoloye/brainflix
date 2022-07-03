import React from 'react';
import views from '../../assets/icons/views.svg';
import heart from '../../assets/icons/likes.svg';
import './MainVideoDetails.scss';

const MainVideoDetails = (props) => {

    return (
        <>
            <div className='main-video-details__container'>
                <h2 className='main-video-details__title'>
                    {props.selectedVideo.title}
                </h2>
                <div className='main-video-details__stats'>
                    <div className='main-video-details__channel-date'>
                        <p className='main-video-details__channel'>
                            By {props.selectedVideo.channel}
                        </p>
                        <p className='main-video-details__date'>
                            {props.bestDate}
                        </p>
                    </div>
                    <div className='main-video-details__views-likes'>
                        <p className='main-video-details__views'>
                            <img className='main-video-details__icon-views' src={views}/> {props.selectedVideo.views}
                        </p>
                        <p className='main-video-details__likes'>
                            <img className='main-video-details__icon-heart' src={heart}/> {props.selectedVideo.likes}
                        </p>
                    </div>
                </div>
                <div className='main-video-details__description-container'>
                    <p className='main-video-details__description'>
                        {props.selectedVideo.description}
                    </p>
                </div>
            </div>
        </>

    )
}

export default MainVideoDetails;