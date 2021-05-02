import React from 'react'
import Post from '../../../../PostComponent/Post';
import './Posts.css';
import  AddPostPage  from '../../../../components/AddPostComponent/AddPostComp.js';


function Posts(props) {


  let postsConp = props.myPosts
    .map(p => <Post
       coments={props.myComents} postID={p._id} key={p._id} img={p.img} data={p.data} nick={p.userNick} title={p.title} text={p.text} />)

  return (
    <div className="posts">
         <AddPostPage/> 
      {postsConp}
    </div>
  );
}

export default Posts;
