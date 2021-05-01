import React from 'react';
import './UserComent.css';



function Coments(props) {
    return (
        <div className="coment">
            <div className="comentAuthor"><strong>{props.nick}:</strong></div>  
            <div className="comentText">{props.text}</div>            
        </div>
    )
}


export default Coments;