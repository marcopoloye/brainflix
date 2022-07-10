import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/logo/BrainFlix-logo.svg'

function UploadForm () {
    const handleSubmit = (event) => {
        alert('Video Uploaded!')
    }

    return (
        <>
            <h2>Upload Video</h2>
            <p>Video thumbnail</p>
            <div><img src={image}/></div>
            <form onSubmit={handleSubmit}>
                <p>Title your video</p>
                    <input type='text' placeholder='Add a title to your video'/>
                <p>Add a video description</p>
                    <input type='textarea' placeholder='Add a description to your video'/>

                <Link to='/'>
                    <button onClick={handleSubmit}>Publish</button> 
                    Cancel 
                </Link>
            </form>
        </>
    );
}

export default UploadForm ;