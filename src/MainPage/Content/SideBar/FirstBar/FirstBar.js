import React from 'react';
import {NavLink} from "react-router-dom";

import './FirstBar.css';

function FirstBar() {
  return (
    <div className="firstbar">
  Current User
    <NavLink to="/profile">Go to my profile</NavLink> 
    </div>
  );
}

export default FirstBar;
