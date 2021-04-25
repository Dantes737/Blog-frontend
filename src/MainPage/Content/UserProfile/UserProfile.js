import React from 'react';
import { NavLink} from 'react-router-dom';
import Preloader from '../../../components/Preloader/Preloader.js';
import './UserProfile.css';
import ProfileStatus from './ProfileStatus.js'

function UserProfile(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    else {
        return (
            <div className="userprof">
            <div><NavLink to="/">Go home</NavLink></div>
                
             <img className="userFoto" alt="img gone" src={props.profile.avatarIMG}/>
             <div className="userInfo">
             <div>Нікнейм: {props.profile.nick}</div>
             <div>Місто: {props.profile.city}</div>
             <ProfileStatus userId={props.id} status={props.status} updateStatus={props.updateStatus}/>
             </div>
            </div>
        )
    }

}

export default UserProfile