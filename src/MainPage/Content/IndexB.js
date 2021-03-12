import React from 'react';
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';
import UPanel from './UsersPanel/UPanel';




import './IndexB.css';

function IndexB(props) {
  return (
    <div className="App">
      <UPanel users={props.appstate.myUsers} />
      <PostsAndfilter posts={props.appstate.myPosts} />
      <SideBar friends={props.appstate.myFriends}/>
    </div>
  );
}

export default IndexB;
