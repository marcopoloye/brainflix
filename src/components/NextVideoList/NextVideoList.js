import React from 'react';
import './NextVideoList.scss';
import NextVideo from '../NextVideo/NextVideo';

const NextVideoList = ({nextVideoData, handleVideoSelect}) => {
    return (
        <div>
            {
                nextVideoData.map(video => <NextVideo video={video} handleVideoSelect = {handleVideoSelect}/>)
            }
        </div>
    )
}

export default NextVideoList;