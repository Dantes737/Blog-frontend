import React from 'react';
import PostsAndfilter from './Posts/PostsAndfilter';
import SideBar from './SideBar/SideBar';
import UPanel from './UsersPanel/UPanel';




import './IndexB.css';

function IndexB(props) {
  return (
    <div className="App">
      <UPanel users={props.appstate.myUsers} />
      <PostsAndfilter
      addPost={props.addPost}
        posts={props.appstate.myPosts}
        coments={props.appstate.myComents}
      />
      <SideBar friends={props.appstate.myFriends} />
    </div>
  );
}

export default IndexB;
