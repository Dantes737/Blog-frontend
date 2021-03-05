import React from 'react'
import AppHeader from './AppHeader/AppHeader';
import Uindex from './UsersPanel/Uindex';
import './MainHeader.css';

function AppHead() {
  return (
    <div className="headerDiv">
<AppHeader/>
<Uindex/>
    </div>
  );
}

export default AppHead;
