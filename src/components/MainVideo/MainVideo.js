import videoDetails from '../../data/video-details.json'
import './MainVideo.scss';

const MainVideo = () => {
    return (
        <>
            <img src= {videoDetails[0].image} alt='two cyclists' className= 'main-video'/>
        </>

    )
}

export default MainVideo;