import React from 'react';
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';
import UPanel from './UsersPanel/UPanel';




import './IndexB.css';

function IndexB() {
  return (
    <div className="App">
<UPanel/>
     <PostsAndfilter/>
     <SideBar/>
    </div>
  );
}

export default IndexB;
