import React from 'react';
import './UserElement.css';

function UserElement(props) {
    return (
        <div className="user">
            <div className="imgdd" ><img className="uIMG"  src={props.src} alt="User avatar" /></div>
            <div className="nickDD" >{props.nick} </div>
            <div className="nickDD" > {props.status}</div>

        </div>
    )
}

export default UserElement