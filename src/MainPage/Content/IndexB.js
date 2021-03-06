import React from 'react'
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';

import './IndexB.css';

function IndexB() {
  return (
    <div className="App">
     <PostsAndfilter/>
     <SideBar/>
    </div>
  );
}

export default IndexB;
