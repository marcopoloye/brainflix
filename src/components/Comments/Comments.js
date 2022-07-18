import './Comments.scss';

const Comments = (props) => {
    return (
        <div>
            {props.comments.map((comment, index) => {
                const betterDate= (new Date(comment.timestamp))
                const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();

                return (
                    <div className='comments' key={index}>
                        <div className='comments__avatar'></div>
                        <div className='comments__text-container'>
                            <div className='comments__name-date'>
                                <p className='comments__name' >
                                    {comment.name}
                                </p>
                                <p className='comments__date'>
                                    {bestDate}
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