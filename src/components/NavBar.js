import React, {useState} from "react";
import {Link} from "react-router-dom";
import iconRedPanda from '../assets/iconRedPanda.png'
import '../styles/NavBar.css'
import closeMenu from '../assets/closeMenu.png'
import menuBar from '../assets/menuBar.png'
import {Button} from "./Button";

function NavBar(){
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
        console.log("Clicked")
    } ;
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton)
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-header" style={{ textDecoration: 'none' }}>
                    <img src={iconRedPanda} alt='redPanda' className='navBarLogo'/>Red Panda Website
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
                        <Link to='/products>' className='nav-links' onClick={closeMobileMenu}>
                            {button && <Button buttonStyle='btn--outline'>
                                SIGN UP
                            </Button>}
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
