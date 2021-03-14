import React from 'react';
import './UserComent.css';



function Coments(props) {
    return (
        <div className="coment">
            <div>{props.nick}</div>            
            <p>{props.text}</p>
            <div>Data</div>

        </div>
    )
}


export default Coments;