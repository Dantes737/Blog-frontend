import React from 'react';
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';
import UPanelContainer from './UsersPanel/UPanelContainer';




import './IndexB.css';

function IndexB() {
  return (
    <div className="App">
      <UPanelContainer/>
      <PostsAndfilter/>
      <SideBar/>
    </div>
  );
}

export default IndexB;
