import React from 'react';
import Header from '../../components/Header/Header';
import UploadForm from '../../components/UploadForm/UploadForm'

const UploadPage = () => {
    return (
        <>
            <header className='header'>
                <Header/>
            </header>
            <UploadForm/>
        </>
    );
}
 
export default UploadPage;