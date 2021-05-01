import React from 'react';
import './Post.css';
import Coments from "./Coments/Coments";




function Post(props) {


    return (
        <div className="post">
            <div>
            <div className="postAuthor">Author:<strong>{props.nick}</strong></div>
            <div className="postDate">Published:<strong>{props.data}</strong></div>
            </div>

            <img className="postImg" src={props.img} alt="Post IMG" />
            <div style={{ margin: "2%" }}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            </div>
            <Coments postId={props.postID} coments={props.coments} />
        </div>
    )
}


export default Post;