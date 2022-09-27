import './Form.scss';
import axios from 'axios';
import { API_URL } from '../../config/index';

const Form = (props) => {

    const postComment = (e) => {
        e.preventDefault()
        
        if (e.target[0].value) {
            axios.post(`${API_URL}/videos/${props.video.id}`, {
                comment: e.target[0].value
            })
                .catch((error) => {'error'});
    
            e.target.reset();
    
            window.location.reload()
        }

    }

    return (
        <>
            <div className='form'>
                <p className='form__comment-count'>{props.video.comments.length} Comments</p>
                <p className='form__title'>Join the conversation</p>
                <div className='form__container'>
                    <div className='form__avatar'>
                    </div>
                    <form className='form__section' onSubmit={postComment}>
                        <input className='form__input' type='text' placeholder='Add a new comment'/>
                        <button className='form__button' type='submit'>Comment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;