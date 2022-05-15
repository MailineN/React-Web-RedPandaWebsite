import React, {useState} from "react";
import {Link} from "react-router-dom";
import iconRedPanda from '../assets/iconRedPanda.png'
import '../styles/NavBar.css'
import closeMenu from '../assets/closeMenu.png'
import menuBar from '../assets/menuBar.png'

function NavBar(){
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false)
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-header">
                    Red-Panda <img src={iconRedPanda} alt='redPanda' className='navBarLogo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img src={click ? closeMenu : menuBar} alt='menuIcon' className='navBarMenuIcon'/>
                </div>
                <ul className={click ?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/>' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services>' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products>' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up>' className='nav-links-sign' onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
