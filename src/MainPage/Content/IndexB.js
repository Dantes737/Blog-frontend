import React from 'react';
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';
import UPanelContainer from './UsersPanel/UPanelContainer';




import './IndexB.css';

function IndexB(props) {
  return (
    <div className="App">
      <UPanelContainer/>
      <PostsAndfilter
      dispatch={props.dispatch}
        posts={props.appstate.myPosts}
        coments={props.appstate.myComents}
      />
      <SideBar friends={props.appstate.myFriends} />
    </div>
  );
}

export default IndexB;
