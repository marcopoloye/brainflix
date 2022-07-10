import React from 'react';
import Comments from '../Comments/Comments'


const CommentsList = (props) => {

    // const timestamp = postedComment.timestamp;
    // const betterDate = new Date(timestamp);
    // const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();


    return (
        <>
            {props.comments.map(comment => {
                <div className='comments'>
                    <div className='comments__avatar'></div>
                    <div className='comments__text-container'>
                        <div className='comments__name-date'>
                            <p className='comments__name' >
                                {comment.name}
                            </p>
                            <p className='comments__date'>
                            </p>
                        </div>
                        <p className='comments__comment'>
                            {comment.comment}
                        </p>
                    </div>
                </div>
            })}
        </>

    )
}

export default CommentsList;