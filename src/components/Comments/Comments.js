import React from 'react';
import './Comments.scss';


const Comments = ({postedComment}) => {
    console.log(postedComment)
    return (
        <div>
            <p>{postedComment.name}</p>
            <p>{postedComment.comment}</p>
            <p>{postedComment.timestamp}</p>
        </div>
    )
}

export default Comments;