import React from 'react'
import FirstBar from './FirstBar/FirstBar';
import SecondBar from './SecondBar/SecondBar';

import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
  <FirstBar/>
   <SecondBar/>

     
    </div>
  );
}

export default SideBar;
