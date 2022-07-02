import avatar from '../../assets/images/Mohan-muruge.jpg';
import './Form.scss';


const Form = (props) => {
    return (
        <>
            <div className='form'>
                <p className='form__comment-count'>{props.selectedVideo.comments.length} Comments</p>
                <div className='form__container'>
                    <div className='form__avatar'>
                    </div>
                    <form className='form__section'>
                        <p className='form__title'>Join the conversation</p>
                        <input className='form__input' type='textarea' placeholder='Add a new comment'/>
                        <button className='form__button' type='submit'>Comment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;