import avatar from '../../assets/images/Mohan-muruge.jpg';
import './Form.scss';


const Form = (props) => {
    return (
        <>
            <div className= 'form__container'>
                <p>{props.selectedVideo.comments.length} Comments</p>
                <div>
                    <img className='form__avatar' src={avatar}/>
                </div>
                <form>
                    <p>Join the conversation</p>
                    <input type='text' placeholder='Add a new comment'/>
                    <button type='submit'>Comment</button>
                </form>

            </div>
        </>
    )
}

export default Form;