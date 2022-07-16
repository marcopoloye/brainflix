import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/Upload-video-preview.jpg'
import './UploadForm.scss'

const UploadForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const vidTitle = event.target[0].value;
        const vidDesc = event.target[1].value;
        event.target.reset();

        if (!vidTitle && !vidDesc) {
            alert('Please upload a video')
        } else {
            axios.post(`http://localhost:8080/videos/`, {
                title: vidTitle,
                description: vidDesc
            })
            alert('Video Uploaded!')
        }
    }

    return (
        <div className= 'upload-section'>
            <h2 className= 'upload-section__heading'>Upload Video</h2>
            <div className= 'upload-section__content-box'>
                <div className= 'upload-section__thumbnail-box'>
                    <label className= 'upload-section__subheading'>Video thumbnail</label>
                    <img className= 'upload-section__thumbnail' src= {image}/>
                </div>
                <form className= 'upload-section__form' id= 'upload-form' onSubmit= {handleSubmit}>
                    <label className= 'upload-section__subheading'>
                        Title your video
                    </label>
                        <input className= 'upload-section__input' type= 'text' placeholder= 'Add a title to your video'/>
                    <label className= 'upload-section__subheading'>
                        Add a video description
                    </label>
                        <input className= 'upload-section__input-two' type= 'textarea' placeholder= 'Add a description to your video'/>
                </form>
            </div>
            <div className= 'upload-section__button-link'>
                <button className= 'upload-section__button' type= 'submit' form= 'upload-form'> Publish </button>
                <Link className= 'upload-section__cancel-link' to= '/'>
                    <div className= 'upload-section__cancel'>
                        Cancel 
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default UploadForm ;