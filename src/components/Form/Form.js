import avatar from '../../assets/images/Mohan-muruge.jpg';
import './Form.scss';


const Form = () => {
    return (
        <>
            <div className= 'form__container'>
                <form>
                    <input type='text' placeholder='Add a new comment'/>
                    <button type='submit'>Comment</button>
                </form>
                <div>
                    <img className='form__avatar' src={avatar}/>
                </div>
            </div>
        </>
    )
}

export default Form;