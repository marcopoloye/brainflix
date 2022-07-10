import React from 'react';
import Header from '../../components/Header/Header';
import UploadForm from '../../components/UploadForm/UploadForm'

class UploadPage extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
                <header className='header'>
                    <Header/>
                </header>
                <UploadForm/>
            </>

        );
    }
}
 
export default UploadPage;