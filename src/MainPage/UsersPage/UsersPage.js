import React from 'react';
import {NavLink} from 'react-router-dom';
import './UsersPage.css';
import UserElement from './UserElement/UserElement.js';

function UsersPage(props) {

    let user=props.users.map(u=><UserElement status={u.status}  key={u.id} nick={u.nick} src={u.src}  />)
    return (
        <div className="userspage">
            Users Page
            <NavLink to="/">Go home</NavLink>
            {user}
            
        </div>
    )
}

export default UsersPage