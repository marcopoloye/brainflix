import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/Upload-video-preview.jpg'
import './UploadForm.scss'

function UploadForm () {
    const handleSubmit = (event) => {
        alert('Video Uploaded!')
    }

    return (
        <div class='upload-section'>
            <h2 class='upload-section__heading'>Upload Video</h2>
            <div class='upload-section__content-box'>
                <div class='upload-section__thumbnail-box'>
                    <label class='upload-section__subheading'>Video thumbnail</label>
                    <img class='upload-section__thumbnail' src={image}/>
                </div>
                <form class='upload-section__form'onSubmit={handleSubmit}>
                    <label class='upload-section__subheading'>
                        Title your video
                    </label>
                        <input class='upload-section__input' type='text' placeholder='Add a title to your video'/>
                    <label class='upload-section__subheading'>
                        Add a video description
                    </label>
                        <input class='upload-section__input-two' type='textarea' placeholder='Add a description to your video'/>
                </form>
            </div>
            <Link to='/' class='upload-section__button-link'>
                <button class='upload-section__button' onClick={handleSubmit}> Publish </button>
                <div class= 'upload-section__cancel'>
                    Cancel 
                </div>
            </Link>
        </div>
    );
}

export default UploadForm ;