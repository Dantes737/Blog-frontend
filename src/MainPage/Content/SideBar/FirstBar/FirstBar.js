import React from 'react';
import { NavLink } from "react-router-dom";

import './FirstBar.css';

function FirstBar(props) {
  return (
    <div className="firstbar">
      Current User:
      {props.isAuth ?
        <div>{props.nick}-<button onClick={props.LOGout}>LogOut</button></div>
        : <NavLink to="/login"> Login</NavLink>}
    </div>
  );
};


export default FirstBar;
