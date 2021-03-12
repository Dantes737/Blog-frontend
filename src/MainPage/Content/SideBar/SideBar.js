import React from 'react';
import FirstBar from './FirstBar/FirstBar';
import SecondBar from './SecondBar/SecondBar';

import './SideBar.css';

function SideBar(props) {
  return (
    <div className="sidebar">
  <FirstBar/>
   <SecondBar  friends={props.friends}/>

     
    </div>
  );
}

export default SideBar;
