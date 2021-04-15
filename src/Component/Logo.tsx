import React from 'react';
import Ipla from '../media/Ipla.jpg';

export default function Logo (){
    return (
        <img src={Ipla} alt="Ipla" style={{ paddingTop: "64px" , paddingBottom: "32px", height:"80px", margin: "auto", display: "block", alignItems: "center"}} />
    )
}