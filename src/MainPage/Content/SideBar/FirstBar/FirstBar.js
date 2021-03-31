import React from 'react';
import {NavLink} from "react-router-dom";

import './FirstBar.css';

function FirstBar(props) {
  return (
    <div className="firstbar">
  Current User: 
    {props.isAuth?props.nick:<NavLink to="/login"> Login</NavLink>}
    <div>
    <NavLink to="/profile">Go to my profile</NavLink> 
    </div>
    </div>
  );
};


export default FirstBar;
