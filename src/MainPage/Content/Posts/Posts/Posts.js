import React from 'react'
import Post from '../../../../PostComponent/Post';
import './Posts.css';

// const postsObj={
//   nick:"Dantes",
//   text:"my text jhcjhchsdhjdhvjs"
// }

function Posts() {
  return (
    <div className="posts">
<Post img="https://lh3.googleusercontent.com/proxy/brwW-UGTJ_GX5MX1AHNN5Wz7_GuoOM7p526shkbr8BhyjAD17PJ_m9vV-gtuScNuOq7q0kzMjYMm6xZld3J4keZ3pns"
 nick="Dantes" text="my text jhcjhchsdhjdhvjs"/>
     <Post
     img="https://agronews.ua/wp-content/uploads/2020/02/maxresdefault-7.jpg"
     nick="Archy" text="sdcsdc dscsdc sdcmy text jhcjhchsdhjdhvjs"/>
    </div>
  );
}

export default Posts;
