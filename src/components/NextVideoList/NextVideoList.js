import React from 'react';
import NextVideo from '../NextVideo/NextVideo';

const NextVideoList = ({nextVideoData, handleVideoSelect}) => {
    return (
        <div>
            {
                nextVideoData.map(video => <NextVideo video = {video} handleVideoSelect = {handleVideoSelect}/>)
            }
        </div>
    )
}

export default NextVideoList;