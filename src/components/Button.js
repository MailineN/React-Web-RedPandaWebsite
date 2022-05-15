import React from 'react'
import '../styles/Button.css'
import {Link} from "react-router-dom";

const STYLES = ['button-default','button-outline'];
const SIZE = ['button-size-medium','button-size-large'];
// Création baseline button
export const Button = ({
       children,
       type,
       onClick,
       buttonStyle,
       buttonSize
    })=> {
    const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZE.include(buttonSize) ? buttonSize : SIZE[0]

    return (
        <Link to='/sign-up' className='button-mobile'>
            <button
            className={'btn ${checkButtonStyle} ${checkButtonSize}'}
            onClick={onClick}
            type={type}>
                    {children}
            </button>
        </Link>

    )
}
