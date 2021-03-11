import React from 'react'
import Post from '../../../../PostComponent/Post';
import './Posts.css';

function Posts() {
  let myPosts = [
    {
      img: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
      nick: "Dantes",
      text: "my text jhcjhchsdhjdhvjs"
    },
    {
      img: "https://agronews.ua/wp-content/uploads/2020/02/maxresdefault-7.jpg",
      nick: "pony",
      text: "sdcsdc dscsdc sdcmy text jhcjhchsdhjdhvjs"
    },
    {
      img: "https://st.depositphotos.com/1899425/1623/i/600/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg",
      nick: "Kapibara",
      text: "Hello best programist"
    }
  ]

  let postsConp = myPosts
    .map(p => <Post img={p.img} nick={p.nick} text={p.text} />)

  return (
    <div className="posts">
      {postsConp}
    </div>
  );
}

export default Posts;
