import logo from '../../assets/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import magnifyingGlass from '../../assets/icons/search.svg'

function Header() {
    return (
        <>
            <img src={logo} alt='BrainFlix logo' class='header__logo'/>
            <form class='header__search'>
                <input type='text' name='search' placeholder='Search' className='header__search-bar'></input>
            </form>
            <img src={avatar} alt='user avatar' className='header__avatar' />
            <button type='submit'>Upload</button>
        </>
    )
}

export default Header;