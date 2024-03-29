import React from 'react';
import HeaderConteiner from './MainHeader/HeaderConteiner';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import IndexB from './Content/IndexB';
import ProfileConteiner from './Content/UserProfile/ProfileContainer';
import UPanelContainer from './UsersPage/UPageContainer.js';
import AuthComponent from './AuthComponents/AuthConponent.js';
import './App.css';


function MyApp() {
  return (
    <div className="globalDiv">
      <Router>
      <HeaderConteiner />
      <Route exact path="/auth" render={()=><AuthComponent/>} />
        <Route exact path="/" render={()=><IndexB/>} />
        <Route path="/profile/:userId?" component={ProfileConteiner} />
        <Route exact path="/users-page" render={()=><UPanelContainer/>} />

      </Router>
    </div>
  );
}

export default MyApp;
