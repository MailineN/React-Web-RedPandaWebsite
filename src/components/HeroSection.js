import React, {useState} from "react";
import {Button} from "./utils/Button";
import '../styles/HeroSection.css'
import '../App.css';
import DownloadFileGame from "./utils/DownloadFileGame";

function HeroSection(){
    // TODO : Ajouter de la lecture de la video
    const [click,setClick] = useState(false)
    const openInNewTab = () => {
        const newWindow = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            '_blank',
            'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const handleClick = () => {
        openInNewTab();
        console.log("Open Video")
    } ;
    return (
        <div className='Hero-container'>
            <h1>HELLO THERE</h1>
            <p>Start Playing Now!</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={()=> DownloadFileGame()}
                >
                    DOWNLOAD GAME
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={()=> handleClick()}
                > WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
