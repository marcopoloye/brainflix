import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Link to='/'>
                <img src={logo} alt='BrainFlix logo' className='header__logo'/>
            </Link>
            <form className='header__search'>
                <input type='text' name='search' placeholder='Search' className='header__search-bar'></input>
                <div className='header__avatar'></div>
                <Link to= '/upload'>
                    <button className='header__button' type='submit'>Upload</button>
                </Link>
            </form>
        </>
    )
}

export default Header;