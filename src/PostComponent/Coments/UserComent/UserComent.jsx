import React from 'react';
import './UserComent.css';



function Coments(props) {
    return (
        <div className="coment">
            <div>{props.nick}</div>  
            <div className="comentText">{props.text}</div>            
            <div>Data : {props.data}</div>

        </div>
    )
}


export default Coments;