import React from 'react';
import './NextVideo.scss';
import { Link } from 'react-router-dom'


const NextVideo = (props) => {
    return (
        <>
            {props.videos.map(video => {
                return (
                <div className='next-video__container' key= {video.id}>
                    <Link to={`/video/${video.id}`}>
                        <img className='next-video__thumbnail' src= {video.image} alt= {video.title}/>
                        <div className='next-video__text'>
                            <p className='next-video__title'> {video.title} </p>
                            <p className='next-video__channel'> {video.channel} </p>
                        </div>
                    </Link>
                </div>
                )
            })}
        </>
    )
}

export default NextVideo;