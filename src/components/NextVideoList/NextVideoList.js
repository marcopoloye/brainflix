import React from 'react';
import { Link } from 'react-router-dom'

const NextVideoList = (props) => {
    return (
        <div>
            {props.videos.map(video => {
                return (
                    <div key= {video.id}>
                        <Link to={`/video/${video.id}`}>
                            <img src={video.image} alt={video.title}/>
                            <p> {video.title} </p>
                            <p> {video.channel} </p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default NextVideoList;