import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import magnifyingGlass from '../../assets/icons/search.svg';
import './Header.scss';

function Header() {
    return (
        <>
            <img src={logo} alt='BrainFlix logo' className='header__logo'/>
            <form className='header__search'>
                <input type='text' name='search' placeholder='Search' className='header__search-bar'></input>
                <div className='header__avatar'></div>
            </form>
            <button className='header__button' type='submit'>Upload</button>
        </>
    )
}

export default Header;