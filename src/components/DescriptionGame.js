
import React, {useState} from "react";
import {Button} from "./utils/Button";
import '../styles/DescriptionGame.css'
//import '../App.css';

function DescriptionGame(){

    return (
        <div className='Game-container'>
            <div className='Game-image'></div>
            <div className='Game-desc'>
                <span className='Game-desc-title'>Overview</span> <br/> <br/>
                <span className='Game-desc-text'>Oportunum est, ut arbitror, explanare nunc causam,
                    quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem,
                    ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.
                    Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque ad eum locum ubi aliquando pastae sunt revertuntur,
                    ita homines instar turbinis degressi montibus impeditis et arduis loca petivere mari confinia.
                    </span>
            </div>
        </div>
    )
}

export default DescriptionGame
