import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import IndexB from './Content/IndexB';
import ProfileConteiner from './Content/UserProfile/ProfileContainer';
import UPanelContainer from './UsersPage/UPageContainer.js';

import './App.css';

function MyApp() {
  return (
    <div className="globalDiv">
      <Router>
      <MainHeader  />
  
        <Route exact path="/" render={()=><IndexB/>} />
        <Route path="/profile" component={ProfileConteiner} />
        <Route exact path="/users-page" render={()=><UPanelContainer/>} />

      </Router>
    </div>
  );
}

export default MyApp;
