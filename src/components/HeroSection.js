import React from "react";
import {Button} from "./Button";
import '../styles/HeroSection.css'
import '../App.css';

function HeroSection(){
    // TODO : Ajouter de la lecture de la video
    return (
        <div className='Hero-container'>
            <h1>HELLO THERE</h1>
            <p>Start Playing Now!</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                > WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
