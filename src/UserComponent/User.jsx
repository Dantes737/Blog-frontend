import React from "react";
import './User.css';

function User(props) {
    return (
        <div className="userP">
            <div><img className="avatar" src={props.src} alt="User avatar" /></div>
            <div className="nick">{props.nick}</div>
        </div>
    )
}

export default User;