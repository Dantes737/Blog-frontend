import React from 'react';
import { NavLink} from 'react-router-dom';
import Preloader from '../../../Preloader/Preloader';
import './UserProfile.css';
import ProfileStatus from './ProfileStatus.js'

function UserProfile(props) {
    // console.log(props.profile);
    //if(props.profile==null) теж саме
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
             <ProfileStatus status={"Hello my friends"}/>
             </div>
            </div>
        )
    }

}

export default UserProfile