import './Form.scss';

const Form = (props) => {
    return (
        <>
            <div className='form'>
                <p className='form__comment-count'>{props.video.comments.length} Comments</p>
                <p className='form__title'>Join the conversation</p>
                <div className='form__container'>
                    <div className='form__avatar'>
                    </div>
                    <form className='form__section'>
                        <input className='form__input' type='textarea' placeholder='Add a new comment'/>
                        <button className='form__button' type='submit'>Comment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;