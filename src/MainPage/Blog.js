import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import IndexB from './Content/IndexB';
import UserProfile from './Content/UserProfile/UserProfile';
import './Blog.css';

function MyApp() {
  return (
    <div className="globalDiv">
      <MainHeader />
      <Router>

        <Route path="/profile" component={UserProfile} />
        <Route exact path="/" component={IndexB} />

      </Router>
    </div>
  );
}

export default MyApp;
