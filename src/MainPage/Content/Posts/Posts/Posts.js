import React from 'react'
import Post from '../../../../PostComponent/Post';
import './Posts.css';


function Posts(props) {


  let postsConp = props.myPosts
    .map(p => <Post
      dispatch={props.dispatch}
       coments={props.myComents} img={p.img} nick={p.nick} text={p.text} />)

  return (
    <div className="posts">
      {postsConp}
    </div>
  );
}

export default Posts;
