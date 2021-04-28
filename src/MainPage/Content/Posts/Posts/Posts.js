import React from 'react'
import Post from '../../../../PostComponent/Post';
import './Posts.css';


function Posts(props) {


  let postsConp = props.myPosts
    .map(p => <Post
       coments={props.myComents} postID={p._id} key={p._id} img={p.img} data={p.data} nick={p.nick} title={p.title} text={p.text} />)

  return (
    <div className="posts">
      {postsConp}
    </div>
  );
}

export default Posts;
