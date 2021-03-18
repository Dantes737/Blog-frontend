import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import IndexB from './Content/IndexB';
import UserProfile from './Content/UserProfile/UserProfile';
import UPanelContainer from './UsersPage/UPageContainer.js';

import './App.css';

function MyApp() {
  return (
    <div className="globalDiv">
      <Router>
      <MainHeader  />
  
        <Route exact path="/" render={()=><IndexB/>} />
        <Route path="/profile" component={UserProfile} />
        <Route exact path="/users-page" render={()=><UPanelContainer/>} />

      </Router>
    </div>
  );
}

export default MyApp;
