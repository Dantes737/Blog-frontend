import React from 'react';
import './Post.css';
import Coments from "./Coments/Coments";




function Post(props) {


    return (
        <div className="post">
            <div>{props.nick}</div>

            <img className="postImg" src={props.img} alt="Post IMG" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>Data : {props.data}</div>
            <Coments postId={props.postID} coments={props.coments} />
        </div>
    )
}


export default Post;