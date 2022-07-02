import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import magnifyingGlass from '../../assets/icons/search.svg';
import './Header.scss';


function Header() {
    return (
        <>
            <img src={logo} alt='BrainFlix logo' className='header__logo'/>
            <form className='header__search'>
                <input type='text' name='search' placeholder='Search' className='header__search-bar'></input>
                <img src={avatar} alt='user avatar' className='header__avatar'/>
            </form>
            <button type='submit'>Upload</button>
        </>
    )
}

export default Header;