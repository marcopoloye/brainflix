import React from 'react';
import Comments from '../Comments/Comments'

const CommentsList = (props) => {
    console.log(props.bestDate)
    return (
        <div>
            {
                props.selectedVideo.map(postedComment => <Comments postedComment = {postedComment}/>)
            }
        </div>
    )
}

export default CommentsList;