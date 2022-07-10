import React from 'react';
import Comments from '../Comments/Comments'

const CommentsList = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.selectedVideo.map((postedComment, index) => <Comments postedComment= {postedComment} key={index}/>)
            }
        </div>
    )
}

export default CommentsList;