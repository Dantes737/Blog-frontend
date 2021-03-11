import React from 'react';
import {NavLink} from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
    return (
        <div className="userprof">
            User Profile
            <NavLink to="/">Go home</NavLink>
        </div>
    )
}

export default UserProfile