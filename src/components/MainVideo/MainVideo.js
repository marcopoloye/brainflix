import videoDetails from '../../data/video-details.json'
import './MainVideo.scss';

const MainVideo = () => {
    return (
        <>
            <img src= {videoDetails[0].image} className= 'main-video'/>
        </>

    )
}

export default MainVideo;