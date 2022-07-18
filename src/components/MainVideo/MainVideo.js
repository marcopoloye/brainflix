import './MainVideo.scss';

const MainVideo = (props) => {
    return (
        <div className='main-video__container'>
            <video controls poster= {props.video.image} className='main-video'>
            </video>
        </div>
    )
}

export default MainVideo;