import videoDetails from '../../data/video-details.json'
import './MainVideo.scss';

const MainVideo = (props) => {
    return (
        <>
            <video poster= {props.selectedVideo.image} className= 'main-video'/>
        </>
    )
}

export default MainVideo;