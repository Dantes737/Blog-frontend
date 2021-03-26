import React from 'react';
import catLoader  from '../assets/images/cat-loader.gif'
import './Preloader.css'

let Preloader=()=>{
    return <div>
        <img className="cat" src={catLoader} alt="loader"/>
    </div>
}


export default Preloader ;

    