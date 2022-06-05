import React from 'react';
import logo from '../assets/logo.png'
import '../index.css'

const Header = () => {
    return ( 
        <nav>
            <img className='logo' src={logo} alt='logo' />
        </nav>
     );
}
 
export default Header;