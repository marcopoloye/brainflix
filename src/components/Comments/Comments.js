import React from 'react';
import './Comments.scss';

const Comments = ({postedComment}) => {

    const timestamp = postedComment.timestamp;
    const betterDate = new Date(timestamp);
    const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();


    return (
        <div className='comments'>
            <div className='comments__avatar'>
            </div>
            <div className='comments__text-container'>
                <div className='comments__name-date'>
                    <p className='comments__name' >
                        {postedComment.name}
                    </p>
                    <p className='comments__date'>
                        {bestDate}
                    </p>
                </div>
                <p className='comments__comment'>
                    {postedComment.comment}
                </p>
            </div>
        </div>
    )
}

export default Comments;