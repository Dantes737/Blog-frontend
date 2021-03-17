import React from 'react';
import FirstBar from './FirstBar/FirstBar';
import SecondBContainer from './SecondBar/SecondBContainer';

import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
  <FirstBar/>
   <SecondBContainer />

     
    </div>
  );
}

export default SideBar;
