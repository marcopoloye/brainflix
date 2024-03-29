import './MainVideoDetails.scss';

const MainVideoDetails = (props) => {
    const {
        channel,
        description,
        likes,
        title,
        views
    } = props.video

    return (
        <>
            <div className='main-video-details__container'>
                <h2 className='main-video-details__title'>
                    {title}
                </h2>
                <div className='main-video-details__stats'>
                    <div className='main-video-details__channel-date'>
                        <p className='main-video-details__channel'>
                            By {channel}
                        </p>
                        <p className='main-video-details__date'>
                            {props.date}
                        </p>
                    </div>
                    <div className='main-video-details__views-likes'>
                        <p className='main-video-details__views'>
                            {views}
                        </p>
                        <p className='main-video-details__likes'>
                            {likes}
                        </p>
                    </div>
                </div>
                <div className='main-video-details__description-container'>
                    <p className='main-video-details__description'>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default MainVideoDetails;