
import React, {useState} from "react";
import {Button} from "./Button";
import '../styles/DescriptionGame.css'
import '../App.css';

function DescriptionGame(){

    return (
        <div className='Game-container'>
            <div className='Game-image'></div>
            <div className='Game-desc'>
                <p className='Game-desc-title'>Overview</p> <br/>
                <p className='Game-desc-title'>Oportunum est, ut arbitror, explanare nunc causam,
                    quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem,
                    ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.
                    Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque ad eum locum ubi aliquando pastae sunt revertuntur,
                    ita homines instar turbinis degressi montibus impeditis et arduis loca petivere mari confinia.
                </p>
            </div>
        </div>
    )
}

export default DescriptionGame
