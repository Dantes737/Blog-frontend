import React from 'react';
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';
import UPanelContainer from './UsersPanel/UPanelContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import './IndexB.css';

class IndexB extends React.Component {
  render(){
    return (
      <div className="App">
        <UPanelContainer/>
        <PostsAndfilter/>
        <SideBar/>
      </div>
    );
  }
}

export default compose(
  connect(),
  withRouter,
  WithAuthRedirect
)(IndexB);