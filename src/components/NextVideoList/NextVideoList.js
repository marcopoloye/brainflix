import React from 'react';
import NextVideo from '../NextVideo/NextVideo';

const NextVideoList = ({nextVideoData, handleVideoSelect}) => {
    console.log(nextVideoData)
    return (
        <div>
            {
                nextVideoData.map((nextVideo, index) => <NextVideo nextVideo= {nextVideo} handleVideoSelect= {handleVideoSelect} key={index}/>)
            }
        </div>
    )
}

export default NextVideoList;