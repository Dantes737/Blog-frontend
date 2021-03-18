import React from 'react'
import Post from '../../../../PostComponent/Post';
import './Posts.css';


function Posts(props) {


  let postsConp = props.myPosts
    .map(p => <Post
       coments={props.myComents} key={p.id} img={p.img} nick={p.nick} text={p.text} />)

  return (
    <div className="posts">
      {postsConp}
    </div>
  );
}

export default Posts;
