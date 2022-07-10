import React from 'react';
import './Comments.scss';

const Comments = (props) => {

    // const timestamp = postedComment.timestamp;
    // const betterDate = new Date(timestamp);
    // const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();


    return (
        <div>
            {props.comments.map(comment => {
                return (
                    <div className='comments' key={comment.id}>
                        <div className='comments__avatar'></div>
                        <div className='comments__text-container'>
                            <div className='comments__name-date'>
                                <p className='comments__name' >
                                    {comment.name}
                                </p>
                                <p className='comments__date'>
                                    {comment.timestamp}
                                </p>
                            </div>
                            <p className='comments__comment'>
                                {comment.comment}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments;